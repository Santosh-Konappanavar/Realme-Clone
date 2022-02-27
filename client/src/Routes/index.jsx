import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Product from '../Pages/Product';
import ErrorPage from '../Pages/ErrorPage';
import ProtectedRoutes from './ProtectedRoutes';
import HomeProdDetail from '../Components/HomePage/homeProdDetail';


const RoutesContainer = () => {
  const isLoggedIn = false;

  return (
    <div>      
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/category" element={<ProtectedRoutes auth={isLoggedIn}> <Category/> </ProtectedRoutes> } />
            <Route path="/product" element={<ProtectedRoutes auth={isLoggedIn}> <Product/> </ProtectedRoutes> } />
            <Route path="*" element={ <ErrorPage/> } />
            <Route path='/category/:homeid' element={<HomeProdDetail/>}  ></Route>
        </Routes>
    </div>
  )
}

export default RoutesContainer