import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './AdminDashboard.scss'; // Importando o arquivo SCSS

const AdminDashboard = () => {
    const token = localStorage.getItem('jwtToken');
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // O papel padrão é 'user'
  const [editingUserId, setEditingUserId] = useState(null); // Para rastrear qual usuário está sendo editado

  // Função para buscar usuários
  const fetchUsers = () => {
    
    Axios.get('http://localhost:3002/admin/users',{headers: {
        'Authorization': `Bearer ${token}` // Adicionando o token JWT no cabeçalho
      }})
      .then((response) => {
        setUsers(response.data); // Atualiza a lista de usuários
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      });
  };

  // UseEffect para buscar usuários ao montar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  // Função para adicionar/editar usuários
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password, role }); // Verifique os valores aqui
  
    const token = localStorage.getItem('jwtToken'); // Obtendo o token JWT do localStorage

    if (editingUserId) {
      // Editando um usuário
      Axios.put(`http://localhost:3002/admin/users/${editingUserId}`, {
        email,
        username,
        password,
        role,
      }, {
        headers: {
          'Authorization': `Bearer ${token}` // Adicionando o token JWT no cabeçalho
        }
      }).then(() => {
        fetchUsers(); // Atualiza a lista de usuários
        clearForm(); // Limpa o formulário
      });
    } else {
      // Cadastrando um novo usuário
      Axios.post('http://localhost:3002/admin/register', {
        Email: email,
        UserName: username,
        Password: password,
        Role: role,
      }, {
        headers: {
          'Authorization': `Bearer ${token}` // Adicionando o token JWT no cabeçalho
        }
      })
      .then(() => {
        fetchUsers(); // Atualiza a lista de usuários
        clearForm(); // Limpa o formulário
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error.response ? error.response.data : error.message);
      });
    }
  };

  // Função para editar um usuário
  const editUser = (user) => {
    setEditingUserId(user.id);
    setEmail(user.email);
    setUsername(user.username);
    setPassword(user.password);
    setRole(user.role);
  };

  // Função para excluir um usuário
  const deleteUser = (userId) => {
    const token = localStorage.getItem('jwtToken'); // Obtendo o token JWT do localStorage
    Axios.delete(`http://localhost:3002/admin/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Adicionando o token JWT no cabeçalho
      }
    }).then(() => {
      fetchUsers(); // Atualiza a lista de usuários
    }).catch(error => {
      console.error('Erro ao excluir usuário:', error);
    });
  };

  // Função para limpar o formulário
  const clearForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setRole('user');
    setEditingUserId(null);
  };

  return (
    <div className="admin-dashboard">
      <h1>Painel Administrativo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Papel:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit">{editingUserId ? 'Atualizar Usuário' : 'Cadastrar Usuário'}</button>
        <button type="button" onClick={clearForm}>Limpar</button>
      </form>

      <h2>Usuários Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nome de Usuário</th>
            <th>Papel</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => editUser(user)}>Editar</button>
                <button onClick={() => deleteUser(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
