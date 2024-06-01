"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = __importDefault(require("./swagger"));
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./database/knexfile"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const db = (0, knex_1.default)(knexfile_1.default.development);
app.use(express_1.default.json());
(0, swagger_1.default)(app);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
