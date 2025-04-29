import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please provide a product provide"],
      default: 0,
    },
    Image: {
      type: String,
      required: [false, "Please provide a product image"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
