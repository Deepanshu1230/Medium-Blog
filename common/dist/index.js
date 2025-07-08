"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInput = exports.signupInput = exports.blogUpdate = exports.blogcreate = void 0;
const zod_1 = __importDefault(require("zod"));
exports.blogcreate = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.blogUpdate = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional(),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
