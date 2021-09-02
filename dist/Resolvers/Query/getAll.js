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
exports.getAll = void 0;
const AllFiles_1 = __importDefault(require("../../Model/AllFiles"));
const getAll = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    let all;
    try {
        all = yield AllFiles_1.default.find().sort({ timestamp: -1 });
        if (all.length === 0) {
            return {
                all: null,
                error: {
                    subject: "No More Files",
                    message: "No more Files",
                },
            };
        }
        return {
            all,
            error: null,
        };
    }
    catch (e) {
        return {
            all: null,
            error: {
                subject: "error",
                message: "e",
            },
        };
    }
});
exports.getAll = getAll;
//# sourceMappingURL=getAll.js.map