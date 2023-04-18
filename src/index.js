const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user");
const apoderadoRoutes = require("./routes/apoderado");
const apoderado2Routes = require("./routes/apoderado2");

//middlewares
app.use(express.json());

app.use(cors());
app.use("/api", userRoutes);
app.use("/api", apoderadoRoutes);
app.use("/api", apoderado2Routes);

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("BD Alumnos");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("Server is running on port", port));
