const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/register", (req, res, next) => {});
router.post("/register", (req, res, next) => {});
router.get("/login", (req, res, next) => {});
router.post("/login", (req, res, next) => {});
router.get("/home", (req, res, next) => {});

module.exports = router;
