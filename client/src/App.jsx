import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AdminDashboard from './Components/Dashboard/admin-dashboard'; // Importa o painel administrativo
import CadastroExame from './Components/Dashboard/CadastroExame'; // Importa o componente de cadastro de exame

// Import React router dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Lets create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/admin-dashboard', // Nova rota para o painel administrativo
    element: <div><AdminDashboard/></div>
  },
  {
    path: '/CadastroExame', // Nova rota para cadastro de exame
    element: <div><CadastroExame/></div>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
