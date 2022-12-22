const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");


router.post(
    "/",
    authController.autenticarUsuario
);

router.get("/", authMiddleware, authController.usuarioAutenticado)


module.exports = router;