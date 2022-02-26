import React from 'react'
import {useParams} from "react-router-dom";
import Data from "../data.json";
import "./styles/productdetail.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { addItem, deleteItem } from '../redux_product/react_redux/action';
console.log(Data)
export const Productdetail = () => {
    const [cartBtn,setcartBtn] =useState("Add to Cart")
    const proid = useParams();
    const prodDetail = Data.filter(x=>x.id==proid.id)
    const arr=prodDetail[0];
    console.log(arr);
    const dispatch = useDispatch()
    const handleCart =(arr)=>{
        if(cartBtn==="Add to Cart"){
            dispatch(addItem(arr))
            setcartBtn("Remove from Cart")
        }else{
            dispatch(deleteItem(arr))
            setcartBtn("Add to Cart")
        }
    }
  return (
      <>
    <div className='cotainer my-5 py-3'>
        <div className='row1'>
            <div className='col-md-1 d-flex justify-content-center mx-auto '>
                <img src={arr.image_url} alt={arr.name} height="400px" />
            </div>
            <div className='col-md-2 d-flex flex-column justify-content-center'>
                <h1 className='brand display-6 fw-bold'>{arr.name} (Prism Blue,6GB+128GB)</h1>
                <h2 className='my-1 cartprice'>₹ {arr.price}</h2>
                <hr/>
                <div className='mar'>
                    <div className='button'>{arr.coupon1}</div>
                    <div className='button'>{arr.coupon2}</div>
                </div>
                <div className='buy'>
                    <div className='total'>
                        <div> <p>Total:</p></div>
                        <div></div>
                        <div><h2>{arr.price}</h2></div>
                        
                    </div>
                    <div className='cartsession'>
                    <button className='gray' onClick={()=>handleCart(arr)}>{cartBtn}</button>
                <button className='yellow'>Buy Now</button>
                    </div>
                
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}