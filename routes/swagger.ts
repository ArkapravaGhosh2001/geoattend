import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Router } from "express";

const router = Router();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "A sample API",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: [".dist/routes/*.js"],
};

var options = {
  explorer: true
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));

export default router;
