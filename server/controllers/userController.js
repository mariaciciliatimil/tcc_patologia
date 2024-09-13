const db = require('../config/db');




const registerUser = (req, res) => {
    const { Email, UserName, Password, Role = 'user' } = req.body;

    const SQL = 'INSERT INTO users (email, username, password, role) VALUES (?,?,?,?)';
    const Values = [Email, UserName, Password, Role];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.status(500).send(err); // Responde com erro em caso de falha
        } else {
            console.log('User inserted successfully!');
            res.status(201).send({ message: 'User added!' }); // Responde com sucesso
        }
    });
};






const loginUser = (req, res) => {
    const { LoginUserName, LoginPassword } = req.body;

    const SQL = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const Values = [LoginUserName, LoginPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else if (results.length > 0) {
            const user = results[0];
            if (user.role === 'admin') {
                res.send({ ...user, isAdmin: true });
            } else {
                res.send({ ...user, isAdmin: false });
            }
        } else {
            res.send({ message: `Credentials don't match!` });
        }
    });
};

const getUsers = (req, res) => {
    const SQL = 'SELECT * FROM users';
    
    db.query(SQL, (err, results) => {
        if (err) {
            res.status(500).send(err); // Responde com erro em caso de falha
        } else {
            res.status(200).send(results); // Responde com os usuários
        }
    });
};


const editUser = (req, res) => {
    const userId = req.params.id;
    const { email, username, password, role } = req.body;

    const SQL = 'UPDATE users SET email = ?, username = ?, password = ?, role = ? WHERE id = ?';
    const Values = [email, username, password, role, userId];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: 'User updated successfully!' });
        }
    });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;

    const SQL = 'DELETE FROM users WHERE id = ?';
    const Values = [userId];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: 'User deleted successfully!' });
        }
    });
};

module.exports = {
    registerUser,
    loginUser,
    editUser,
    deleteUser,
    getUsers, // Adicione esta linha para exportar a função
};
