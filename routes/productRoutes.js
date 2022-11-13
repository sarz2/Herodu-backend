const { Router } = require("express");
const productController = require("../controllers/productController");
const { protectedRoute } = require("../middleware/authMiddleware");
const router = Router();

//Public Routes
router.route("/").get(productController.getProducts);
router.route("/search/:keyword").get(productController.getProducts);
router.route("/top").get(productController.getTopRatedProducts);
router.route("/:id").get(productController.getOneProduct);

//Private Route /User
router
  .route("/:id/reviews")
  .post(protectedRoute, productController.createReview);

//Public Route
router.route("/:id/:qty").post(productController.reduceQtyInProduct);

module.exports = router;
