const { Router } = require("express");
const userController = require("../controllers/userController");
const { protectedRoute } = require("../middleware/authMiddleware");
const router = Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.route("/profile").get(protectedRoute, userController.getUserProfile);

module.exports = router;
