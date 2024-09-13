const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'sua_chave_secreta');
        console.log('Decoded Token:', decoded); // Adicione isso para verificar o token
        req.user = decoded;

        if (req.user.role !== 'admin') {
            return res.status(403).send({ message: 'Access denied. Admins only.' });
        }

        next();
    } catch (error) {
        return res.status(400).send({ message: 'Invalid token.' });
    }
};

module.exports = isAdmin;
