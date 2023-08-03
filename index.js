const express = require("express");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
//Middleware
app.use(express.json());

const blog = require("./routes/blog");
//Mount
app.use("/api/v1", blog);

const connectionWithDb = require("./config/database");
connectionWithDb();

//start the server
app.listen(PORT, () => {
    console.log("App is started at port");
});
// default route
app.get("/", (req, res) => {
    res.send("<h1>This is home page baby</h1>");
});
