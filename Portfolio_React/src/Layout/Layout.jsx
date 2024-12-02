import React from 'react';
import Header from './Components/Header/Header.jsx'
import Footer from '/src/Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}