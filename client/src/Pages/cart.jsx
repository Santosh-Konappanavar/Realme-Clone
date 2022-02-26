import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {deleteItem} from '../redux_product/react_redux/action';
export const Cart = () => {
const state=useSelector((state)=>
  state.additem)
  const dispatch = useDispatch();

  const handleclose=(item)=>{
    dispatch(deleteItem(item))
  }
  const cartItems= (cartItem)=>{
    return (
      <div className='"px-4 my-5 bg-light rounded-3' key={cartItem.id}>
        <div className='container py-4'>
          <button onClick={()=>handleclose(cartItem)} className='btn-close float-end'> </button>
            <div className='row justify-content-center'>

              <div className='col-md-4'>
                <img src={cartItem.image_url} alt={cartItem.name} />
              </div>

              <div>
              <h3>{cartItem.name}</h3>
                <p className='lead fw-bold'>{cartItem.price}</p>
              </div>
         
          </div>
        </div>
      </div>
    );
  }

const emptyCart=()=>{
  return(
    <div className='px-4 my-5 bg-light rounded' >
      <div className='container py-4'>
        <div className='row'>
          <h3>Your cart is empty</h3>
        </div>
      </div>
    </div>
  )
}
  return (
    <>
      {state.length===0&&emptyCart()}
      {state.length!==0&&state.map(cartItems)}
    </>
  )
}