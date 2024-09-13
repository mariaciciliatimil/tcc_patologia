/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import video from '../../LoginAssets/microVideo.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import api from '../../api';
import { ACESS_TOKEN } from '../../constants';

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();
  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');
  const [isAdmin, setIsAdmin] = useState(false); // Adicionando o estado para verificar se o usuário é admin

  const loginUser = (e) => {
    e.preventDefault();
  
    try{
      const res = await api.post('/login',
        LoginUserName: loginUserName,
        LoginPassword: loginPassword
      )
      localStorage.setItem(ACCESS_TOKEN,res)
    }

    Axios.post('http://localhost:3002/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response) => {
      const { token } = response.data;

      // Salvando o token no localStorage
      localStorage.setItem('token', token);

      if (response.data.message || loginUserName === '' || loginPassword === '') {
        navigateTo('/'); // Redireciona para a mesma página de login se as credenciais não corresponderem
        setLoginStatus(`Usuário ou senhas incorretas!`);
      } else {
        // Se for um usuário administrador, redireciona para o painel administrativo
        if (response.data.isAdmin) {
          navigateTo('/admin-dashboard'); // Redireciona para o painel administrativo
        } else {
          navigateTo('/dashboard'); // Se for um usuário comum, redireciona para o dashboard
        }
      }
    });
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setStatusHolder('showMessage');
      setTimeout(() => {
        setStatusHolder('message');
      }, 4000);
    }
  }, [loginStatus]);

  const onSubmit = () => {
    setLoginUserName('');
    setLoginPassword('');
  };

  return (
    <div className='loginPage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Sistema de Rastreamento Patológico</h2>
            <p>Precisão e agilidade para a saúde.</p>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Entre com Suas Credenciais</h3>
          </div>

          <form className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Nome</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input
                  type="text"
                  id='username'
                  placeholder='Seu Usuario'
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input
                  type="password"
                  id='password'
                  placeholder='Senha'
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <span className='forgotPassword'>
              
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
