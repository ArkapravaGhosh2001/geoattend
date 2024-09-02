import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import errorMiddlware from "./middlewares/error.middleware";
import cmpRouter from "./routes/company.route";
import empRouter from "./routes/employee.route";
import swaggerRouter from "./routes/swagger";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(errorMiddlware);

app.use("/", empRouter);
app.use("/", cmpRouter);
app.use("/api-docs", swaggerRouter);

app.use("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is Working..." });
});

app.listen(port, () => {
  console.log(` > Server is running on http://localhost:${port}`);
});
