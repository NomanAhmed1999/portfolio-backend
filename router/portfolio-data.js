const router = require('express').Router();
const portfolioDataController = require("../controller/portfolio-data-controller");

router.get("/", portfolioDataController.all_portfolios);
router.post("/", portfolioDataController.add_new_portfolio);
router.get("/:portfolioId", portfolioDataController.single_portfolio);
router.put("/:portfolioId", portfolioDataController.update_portfolio);
router.delete("/:portfolioId", portfolioDataController.delete_portfolio);


module.exports = router;