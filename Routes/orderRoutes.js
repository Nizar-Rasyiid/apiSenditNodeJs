const express = require("express");
const pemesananController = require("../Controller/OrderController");

const router = express.Router();

router.get("/:id_pemesanan", pemesananController.getPemesananById);
router.get("/", pemesananController.getPemesanan);

module.exports = router;
