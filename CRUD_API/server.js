import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./routes/product.route.js";
import BaseRouter from "./routes/index.js";

const app = express();

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
app.use("/api/products", ProductRouter);  // for CRUD products
app.use("/", BaseRouter); // for homepage, health check

/* Connections */

mongoose
  .connect("mongodb://localhost:27017/backend")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });
