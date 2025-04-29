import Product from "../models/product.model.js";

export const getProducts = async () => {
  return await Product.find({});
};

export const getProductById = async (id) => {
  return await Product.findById(id);
};

export const deleteProductById = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export const updateProductById = async (id, data) => {
  await Product.findByIdAndUpdate(id, data);
  return await Product.findById(id); // latest one
};

export const createProductByPost = async (data) => {
  return await Product.create(data);
};
