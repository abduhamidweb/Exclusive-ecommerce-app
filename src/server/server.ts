import express, { Application, Request, Response, NextFunction } from "express";
// import { connectToDatabase } from "../db/db.js";
import "../db/mongo.js"
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;
import errorMiddleware from "../middleware/errorHandler.js";
import indexRoutes from "../routes/index.routes.js"
import swRouter from "../utils/swagger.js";
app.use(express.json());
app.use('/docs', swRouter);
app.use('/api', indexRoutes);
app.use(errorMiddleware);
app.listen(PORT, () => console.log("Server listening on port" + PORT));

// connectToDatabase().then(() => {
// app.listen(PORT, () => console.log("Server listening on port" + PORT));

// });    