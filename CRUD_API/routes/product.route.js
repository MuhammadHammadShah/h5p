import express from "express";
import {
  createProductByPost,
  deleteProductById,
  getProductById,
  getProducts,
  UpdateProductByPut,
} from "../controllers/product.controller.js";

const ProductRouter = express.Router();

ProductRouter.get("/", getProducts);
ProductRouter.get("/:id", getProductById);

// del
ProductRouter.delete("/:id", deleteProductById);

// put
ProductRouter.put("/:id", UpdateProductByPut);

// POST

ProductRouter.post("/", createProductByPost);

export default ProductRouter;
