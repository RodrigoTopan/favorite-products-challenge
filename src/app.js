import cors from "cors";
import express from "express";
import "express-async-errors";
import health from "express-healthcheck";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger.json";
import "./bootstrap";
import "./cache";
import "./database";
import routes from "./routes"; // import express-async errors before load routes

class App {
    constructor() {
        this.server = express();

        this.basicMiddlewares(); // erros and auth
        this.routes();
    }

    basicMiddlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use("/health", health());
        this.server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
        this.server.use(routes);
    }
}

export default new App().server;
