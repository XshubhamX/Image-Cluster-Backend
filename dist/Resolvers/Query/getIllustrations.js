"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allIllustrations = void 0;
const Illustration_1 = __importDefault(require("../../Model/Illustration"));
const allIllustrations = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    let illus;
    try {
        illus = yield Illustration_1.default.find(null, null, {
            skip: args.skip,
            limit: args.limit,
        });
        if (illus.length === 0) {
            return {
                illus: null,
                error: {
                    subject: "No More illustrations",
                    message: "No more illustrations",
                },
            };
        }
        return {
            illus,
            error: null,
        };
    }
    catch (e) {
        return {
            illus: null,
            error: {
                subject: "error",
                message: "e",
            },
        };
    }
});
exports.allIllustrations = allIllustrations;
//# sourceMappingURL=getIllustrations.js.map