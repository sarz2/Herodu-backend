const { Router } = require("express");
const userController = require("../controllers/userController");
const protectedRoute = require("../middleware/authMiddleware");
const router = Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/profile", protectedRoute, userController.getUserProfile);
router.put("/profile", protectedRoute, userController.updateUserProfile);

module.exports = router;
