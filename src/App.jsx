import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomeScreen from './screens/dashboards/Admin/HomeScreen';
import AboutUs from './screens/dashboards/Admin/AboutUs';
import ContactUs from './screens/dashboards/Admin/ContactUs';
import NotFound from './screens/dashboards/Admin/NotFound';
import Movies from './screens/dashboards/Admin/Movies';
import SingleMovie from './screens/dashboards/Admin/SingleMovie';
 

const App = () => {
  return (
    <Routes>
    <Route path="/lists" element={<HomeScreen/>}/>
    <Route path="/about-us" element={<AboutUs/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/movies/:id" element={<SingleMovie/>}/>
   


  </Routes>
  )
}

export default App;

