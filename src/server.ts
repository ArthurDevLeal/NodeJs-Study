import express from "express";
import helmet from "helmet";
import router from "./routes";

const app = express();
const cors = require("cors");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", router);

app.listen(3000);
