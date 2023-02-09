import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Menu from '../menu/menu';
import OrderOnline from '../order-online/order-online';
import ReserveTable from '../reserve-table/reserve-table';
import Login from '../login/login';
import PageInProgress from '../page-in-progress/page-in-progress';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/page-in-progress',
    element: <PageInProgress />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/reserve-table',
    element: <ReserveTable />
  },
  {
    path: '/order-online',
    element: <OrderOnline />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;