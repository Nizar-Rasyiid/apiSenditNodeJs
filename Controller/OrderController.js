const Pemesanan = require("../Model/order");

exports.getPemesananById = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.findByPk(req.params.id_pemesanan);
    if (pemesanan) {
      res.json(pemesanan);
    } else {
      res.status(404).send("Pemesanan not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error bang");
  }
};

exports.getPemesanan = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.findAll();
    res.json(pemesanan);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
