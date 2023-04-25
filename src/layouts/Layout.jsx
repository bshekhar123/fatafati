import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout =({children}) =>{
  return (
    <>
    <div className="bg-black text-white">
        <Navbar/>
            {children}
        <Footer/>
    </div>

    </>
  )
}

export default Layout;