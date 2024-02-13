import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ejemploRouter from "./routes/ejemplo.routes.js";

// Creacion de app
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routing
app.use("/", ejemploRouter);

// Server
app.listen(`${PORT}`, () => console.log(`Sever on http://localhost:${PORT}`));
