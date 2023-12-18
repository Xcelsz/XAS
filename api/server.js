const express = require("express");
import mysql from "mysql2";
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const PORT = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "oish_db",
});

app.listen(PORT, () => {
  console.log("app listening");
});
