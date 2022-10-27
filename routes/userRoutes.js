const { Router } = require("express");
const userController = require("../controllers/userController");
const middleware = require("../middleware/authMiddleware");
const router = Router();

//Public routes
router.post("/login", userController.login);
router.post("/signup", userController.signup);

//Private routes /User
router
  .route("/profile")
  .get(middleware.protectedRoute, userController.getUserProfile);
router
  .route("/profile")
  .put(middleware.protectedRoute, userController.updateUserProfile);

//Private routes /Admin
router
  .route("/")
  .get(
    middleware.protectedRoute,
    middleware.isAdmin,
    userController.getAllUsers
  );
router
  .route("/:id")
  .delete(
    middleware.protectedRoute,
    middleware.isAdmin,
    userController.deleteUser
  );
router
  .route("/:id")
  .get(
    middleware.protectedRoute,
    middleware.isAdmin,
    userController.getOneUserById
  );
router
  .route("/:id")
  .put(
    middleware.protectedRoute,
    middleware.isAdmin,
    userController.updateUser
  );

module.exports = router;
