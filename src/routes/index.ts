import express from "express";
import contactRouter from "./contact";
const router = express.Router();

router.use(contactRouter);

export default router;
