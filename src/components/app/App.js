import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Page from '../page/page';
import PageInProgress from '../page-in-progress/page-in-progress';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
  },
  {
    path: '/page-in-progress',
    element: <PageInProgress />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;