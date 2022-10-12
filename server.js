const express = require("express");
require("dotenv").config({ path: `${__dirname}/.env` });
const mongoose = require("mongoose");
const path = require("path");
const products = require("./data/products");
const connectDB = require("./database/db");

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
