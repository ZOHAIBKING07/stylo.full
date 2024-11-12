const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller")

router.post("/register",controller.register);
router.post("/login",controller.login);
router.get("/",controller.index);
router.get("/:id",controller.get);
router.delete("/:id",controller.destroy);
router.put("/:id",controller.update);
router.post("/verify",controller.verifyUser);
router.post("/forgotpassword",controller.forgotPassword);

module.exports = router;