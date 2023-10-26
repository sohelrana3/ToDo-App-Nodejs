const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/TodoRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("connet your mongodb"))
    .catch((error) => console.log(error));
app.use("/api", router);
app.listen(8000);
