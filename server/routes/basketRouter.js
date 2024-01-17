const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController.js");

router.post("/", basketController.create);
router.get("/", basketController.getAll);
router.delete("/", basketController.delete);

module.exports = router;
