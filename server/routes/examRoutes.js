const express = require('express');
const router = express.Router();
const { cadastrarExame } = require('../controllers/exameController');
const isAdmin = require('../middleware/isAdmin'); // Se necessário, pode adicionar proteção administrativa

// Define a rota para cadastro de exames
router.post('/CadastroExame', isAdmin, cadastrarExame);

module.exports = router;
