const { Router } = require("express");
const productController = require("../controllers/productController");
const { protectedRoute } = require("../middleware/authMiddleware");
const router = Router();

router.route("/").get(productController.getProducts);
router.route("/search/:keyword").get(productController.getProducts);
router.route("/:id").get(productController.getOneProduct);
router
  .route("/:id/reviews")
  .post(protectedRoute, productController.createReview);

module.exports = router;
