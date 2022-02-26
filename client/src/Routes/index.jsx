import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import ErrorPage from '../Pages/ErrorPage';
import ProtectedRoutes from './ProtectedRoutes';
import { Cart } from '../Pages/cart';
import { Product } from '../Pages/Product';
import { Productdetail } from '../Pages/productdetail';

const RoutesContainer = () => {
  const isLoggedIn = false;

  return (
    <div>      
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/category" element={<ProtectedRoutes auth={isLoggedIn}> <Category/> </ProtectedRoutes> } />
            <Route path="/Product" element={ <Product/>  } />
            <Route path='/Product/:id' element={<Productdetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={ <ErrorPage/> } />
        </Routes>
    </div>
  )
}

export default RoutesContainer



