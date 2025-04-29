import express from "express";
const BaseRouter = express.Router();

BaseRouter.get("/", (req, res) => {
  res.send("Hello from NODE API...");
});

export default BaseRouter;
