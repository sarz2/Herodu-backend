const { Router } = require("express");
const authController = require("../controllers/authController");
const router = Route();
const auth = require("../middleware/auth");

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.get("/user", auth, authController.get_user);
