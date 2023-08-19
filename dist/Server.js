"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const login_1 = __importDefault(require("./routes/login"));
const preguntas_1 = __importDefault(require("./routes/preguntas"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        dotenv_1.default.config();
        this.puerto = process.env.PORT || '8000';
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.listen();
        this.Routes();
    }
    listen() {
        this.app.listen(this.puerto, () => console.log(`Servidor corriendo en el puerto ${this.puerto}`));
    }
    Routes() {
        this.app.use('/api/auth', login_1.default);
        this.app.use('/api/preguntas', preguntas_1.default);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map