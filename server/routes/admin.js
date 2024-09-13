const express = require('express');
const router = express.Router();
const { registerUser, editUser, deleteUser, getUsers } = require('../controllers/userController');
const isAdmin = require('../middleware/isAdmin');

// Aplica o middleware isAdmin às rotas administrativas
router.get('/users', isAdmin, getUsers); // Defina a rota para buscar usuários
router.post('/register', isAdmin, registerUser);
router.put('/edit/:id', isAdmin, editUser);
router.delete('/delete/:id', isAdmin, deleteUser);

module.exports = router;
