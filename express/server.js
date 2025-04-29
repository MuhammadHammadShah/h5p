import express from "express";
function logger(req, res, next) {
    console.log(req.OriginalUrl);
    next();
  }
const app = express();
app.set("view engine", "ejs");

app.get("/", logger, (req, res) => {
  //   console.log("Hello World!");
  //   res.send("Hi Hello");
  //   res.status(200).json({
  //     message: "goos good",
  //   });
  res.render("index", { test: "Message from server" });
});



// bs jo name yhn pr likho aur enjoy kro then hahaa
import router from "./routes/user.js";
const routers = router;
app.use("/users", routers);

export default logger;

app.listen(3000);
