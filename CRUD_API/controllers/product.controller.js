import express from "express";
import Product from "../models/product.model.js";
import * as ProductService from "../services/product.service.js";

export const getProducts = async (req, res) => {
  try {
    const product = await ProductService.getProducts();

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.deleteProductById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not Found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateProductByPut = async (req, res) => {
  try {
    const product = await ProductService.updateProductById(
      req.params.id,
      req.body
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not Found",
      });
    }

    // const updatedProduct = await Product.findById(id);

    res.status(201).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProductByPost = async (req, res) => {
  try {
    const product = await ProductService.createProductByPost(req.body);
    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
