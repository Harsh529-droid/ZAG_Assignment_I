import React,{ useState } from 'react'
import HomeScreen from './components/HomeScreen'
import Product from './components/Product'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PaymentByCard from './components/PaymentByCard';

function App() {

  return (
 
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<HomeScreen/>} />
            <Route path = "/product" element = {<Product/>} />
            <Route path = "/payment" element = {<PaymentByCard/>} />
        </Routes>
      </BrowserRouter>
      
     
  )
}

export default App
