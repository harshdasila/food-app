import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';

//Footer
const Footer = () => {
  return(
    <h2>Footer</h2>
  )
}
function App() {
  return ( 
    <> 
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
