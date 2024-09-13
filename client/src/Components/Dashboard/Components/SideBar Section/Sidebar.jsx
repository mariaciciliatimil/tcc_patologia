import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom
import './sidebar.css';

// Imported Images ==========>
import logo from '../../Assets/logo.png';

// Imported Icons ===========>
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>SIRP.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">MENU</h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <Link to="/dashboard" className='menuLink flex'>
              <span className="smallText">Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/CadastroExame" className='menuLink flex'>
              <span className="smallText">Cadastros</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/consultar" className='menuLink flex'>
              <span className="smallText">Consultar</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/relatorio" className='menuLink flex'>
              <span className="smallText">Relatorio</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <ul className="menuLists grid">
          <li className="listItem logOutBtn">
            <Link to="/" className='menuLink flex'>
              <span className="smallText">Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
