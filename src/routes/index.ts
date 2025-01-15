import express, { RequestHandler } from "express";
import productsRouter from "./product";

const router = express.Router();

router.use("/products", productsRouter);


export default router;
