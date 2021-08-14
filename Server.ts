import dotenv from "dotenv";
import { ApolloServer, PubSub } from "apollo-server-express";
import { graphqlUploadExpress, GraphQLUpload } from "graphql-upload";
import { importSchema } from "graphql-import";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import http from "http";
import chalk from "chalk";
import path from "path";
import bodyParser from "body-parser"
//Local Imports
import databse from "./Database/db";
import Query from "./Resolvers/Query";
import Mutation from "./Resolvers/Mutation"
import { download } from "./Middlewares/download"

dotenv.config()

const typeDefs = importSchema("./Schema/Schema.graphql");

const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 50000,
    message: "Too many requests from this IP, please try again after 15 minutes",
});

const resolvers: object = {
    Query,
    Mutation
};

const PORT: string = process.env.PORT;
const pubsub = new PubSub();

const app = express();

app.use(bodyParser.json())

app.use(apiLimiter);
app.use(xss());
app.use(
    helmet({
        contentSecurityPolicy:
            process.env.NODE_ENV === "production" ? undefined : false,
    })
);
app.use(mongoSanitize());
app.use(cors());
app.use(graphqlUploadExpress());


app.get("/", (req, res) =>
    res.json({ "KPMG Image Cluster": "v1", status: "healthy" })
)

app.use("/download", download)

const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs,
    uploads: false,
    resolvers: {
        ...resolvers,
        Upload: GraphQLUpload,
    },
    context: ({ req, res, connection }) => {
        return { req, res };
    }
});

server.applyMiddleware({ app });

databse
    .connect()
    .then(() => {
        // Use native http server to allow subscriptions
        httpServer.listen(PORT || 4000, () => {
            console.log(
                chalk
                    .hex("#fab95b")
                    .bold(
                        `🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath
                        }`
                    )
            );
        });
    })
    .catch((e) => console.log(chalk.red(e)));