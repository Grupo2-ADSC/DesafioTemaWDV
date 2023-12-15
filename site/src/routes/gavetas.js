var express = require("express");
var router = express.Router();

var gavetaController = require("../controllers/gavetaController");

router.get("/:empresaId", function (req, res) {
  gavetaController.buscarGavetasPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  gavetaController.cadastrar(req, res);
})

module.exports = router;