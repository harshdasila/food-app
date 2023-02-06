import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,Router,RouterProvider,Outlet } from "react-router-dom";
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/about',
        element:<About/>,
        errorElement:<Error/>,
        children:[
          {
            path:'profile',
            element:<Profile/>
          }
        ]
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/restaurantMenu/:id',
        element:<RestaurantMenu/>
      },
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);




reportWebVitals();
