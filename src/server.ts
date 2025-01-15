import express from "express";
import helmet from "helmet";
import router from "./routes/index";

const app = express();
const cors = require("cors");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(3000, () => {
	console.log("Server running at http://localhost:3000");
});
