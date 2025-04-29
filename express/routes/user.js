// jo file ka name h phir wo yhn route m rakhne ki need nhi h

import express from "express";
function logger(req, res, next) {
  console.log(req.OriginalUrl);
  next();
}
const router = express.Router();
router.use(logger);
/* GET methods*/
router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", logger, (req, res) => {
  res.send("new user Form");
});

router.get("/:id", (req, res) => {
  res.send(`User with ID ${req.params.id}`);
});

/* POST methods*/

router.post("/", (rq, res) => {
  res.send("User Created");
});

/* PUT methods*/
router.put("/:id", (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});

/* DELETE methods*/

router.delete("/:id", (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});
/* DELETE, PUT, GET methods together*/

router
  .route("/:id")
  .get((req, res) => {
    res.send(`User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

export default router;
