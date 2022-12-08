const express = require("express");
const cors = require("cors")
require("dotenv").config();
require("express-async-errors");
const morgan = require("morgan");
const ConnectDB = require("./db/db");
const { globalErrorCatch } = require("./middlewares/globalErrorCatch");

const app = express();

//Routes
const router = require('./routers/post');

ConnectDB();
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))

app.use(morgan("dev"));
app.use('/api/blog', router);

//Use global error middleware
app.use(globalErrorCatch)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    //console.log("port is listening on " + PORT);
})