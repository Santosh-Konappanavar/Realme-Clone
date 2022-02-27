import React from 'react'
import Slider from '../Components/HomePage/Slider';
import CategoryCard from '../Components/HomePage/CategoryCard';

import TabGroup from '../Components/HomePage/Tab';
import { useEffect } from 'react';
import { Header } from '../Components/NavAndFooter/Header';
import { useSelector } from 'react-redux';
import { Footer } from '../Components/NavAndFooter/Footer';
import { useDispatch } from 'react-redux';
import {getDataSuccess} from '../redux/dataReducer/actions';
import axios from 'axios';


const HomePage = () => {
  const {  data } = useSelector((store) => store.data.homeData);
  const dispatch=useDispatch()

useEffect(()=>{
  getHomeData()
},[])

  const getHomeData=()=>{
      axios.get('https://neha-json-server.herokuapp.com/homeData').then(({data})=>{
          dispatch(getDataSuccess(data))
 
      })
  }


  return (
    <div>
      <nav>
    <Header/>
      </nav>
      <Slider/>
      <CategoryCard data={data}/>
      <TabGroup data={data}/>

      <footer>
      <Footer/>
      </footer>
   
    </div>
  )
}

export default HomePage