import express from "express";

const app = express();

// Middleware to log requests
app.use(logger);

app.get("/", (req, res, next) => {
  console.log("Home Page");
  res.send("Home Page");
  next();
});
app.get("/users", auth, (req, res) => {
  console.log(req.originalUrl);
  res.send("Users Page");
});

function logger(req, res, next) {
  console.log("log");
  next();
}
function auth(req, res, next) {
  if (req.query.admin === "true") {
    console.log("Yes he is an admin");
    next();
  } else {
    res.status(203).send("You are not an admin");
  }
}

app.listen(3000);
