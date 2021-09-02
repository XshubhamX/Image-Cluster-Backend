"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_upload_1 = require("graphql-upload");
const graphql_import_1 = require("graphql-import");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const helmet_1 = __importDefault(require("helmet"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const http_1 = __importDefault(require("http"));
const chalk_1 = __importDefault(require("chalk"));
const body_parser_1 = __importDefault(require("body-parser"));
//Local Imports
const db_1 = __importDefault(require("./Database/db"));
const Query_1 = __importDefault(require("./Resolvers/Query"));
const Mutation_1 = __importDefault(require("./Resolvers/Mutation"));
const download_1 = require("./Middlewares/download");
dotenv_1.default.config();
const typeDefs = (0, graphql_import_1.importSchema)("./Schema/Schema.graphql");
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 50000,
    message: "Too many requests from this IP, please try again after 15 minutes",
});
const resolvers = {
    Query: Query_1.default,
    Mutation: Mutation_1.default
};
const PORT = process.env.PORT;
const pubsub = new apollo_server_express_1.PubSub();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(apiLimiter);
app.use((0, xss_clean_1.default)());
app.use((0, helmet_1.default)({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
}));
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, cors_1.default)());
app.use((0, graphql_upload_1.graphqlUploadExpress)());
app.get("/", (req, res) => res.json({ "KPMG Image Cluster": "v1", status: "healthy" }));
app.use("/download", download_1.download);
const httpServer = http_1.default.createServer(app);
const server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    uploads: false,
    resolvers: Object.assign(Object.assign({}, resolvers), { Upload: graphql_upload_1.GraphQLUpload }),
    context: ({ req, res, connection }) => {
        return { req, res };
    }
});
server.applyMiddleware({ app });
db_1.default
    .connect()
    .then(() => {
    // Use native http server to allow subscriptions
    httpServer.listen(PORT || 4000, () => {
        console.log(chalk_1.default
            .hex("#fab95b")
            .bold(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`));
    });
})
    .catch((e) => console.log(chalk_1.default.red(e)));
//# sourceMappingURL=Server.js.map