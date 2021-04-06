const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../services/async_middleware");
const auth = require("./../services/auth_service");

const TestController = require("./../controllers/test_controller");

// router.post("/fuel_update", auth, PlantUpdate.insert);
router.get("/get_test_route", auth, asyncMiddleware(TestController.get));

module.exports = router;
