const express = require("express");
const connectDB = require("./config/db");
var cors = require('cors')
//initialize express
const app = express();
app.use(cors())
//connect to mongo
connectDB();
app.get("/", (req, res) => {
  return res.send("im running");
});

app.use(express.json({extended: false}) )

//routes
app.use("/api/scoreboard", require("./routes/api/scoreboard"));
app.use("/api/winner", require("./routes/api/winner"));
app.use("/api/players", require("./routes/api/players"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is running"));
