const { Router } = require("express");
const productController = require("../controllers/productController");
const router = Router();

router.get("/", productController.get_products);
router.get("/:id", productController.get_one_product);
// router.post("/items", itemController.post_item);
// router.put("/items:id", itemController.update_item);
// router.delete("/items/:id", itemController.delete_item);

module.exports = router;
