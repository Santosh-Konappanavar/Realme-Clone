import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Product from '../Pages/Product';
import ErrorPage from '../Pages/ErrorPage';
import ProtectedRoutes from './ProtectedRoutes';

const RoutesContainer = () => {
  const isLoggedIn = false;

  return (
    <div>      
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/category" element={<ProtectedRoutes auth={isLoggedIn}> <Category/> </ProtectedRoutes> } />
            <Route path="/product" element={<ProtectedRoutes auth={isLoggedIn}> <Product/> </ProtectedRoutes> } />
            <Route path="*" element={ <ErrorPage/> } />
        </Routes>
    </div>
  )
}

export default RoutesContainer