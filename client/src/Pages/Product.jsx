import React from 'react';
import { useNavigate } from 'react-router-dom'
import Data from "../data.json";
import './styles/product.css'
export const Product = () => {
  console.log(Data)
 
  const CardItem = (item)=>{
    let navigate = useNavigate()
    const navigatePage = () => {
      navigate(`/Product/${item.id}`)
    }
    return(
      <>
  <div className="card my-3" key={item.id}  onClick={navigatePage}  >
  <img src={item.image_url} className="card-img-top" alt={item.name} />
  <div className="card-body text-center">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.desc}</p>
    <p className='price'>₹ {item.price}</p>
    <div className='color'>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className='coupon'>
    <div className="button">{item.coupon1}</div>
    <div className='button'>{item.coupon2}</div>
    </div>
  </div>
 
</div>
</>
)
  }
  return (
    <div className='box'>
      <div className='container'>
        <div className='row  justify-content-around' >
       
          {Data.map(CardItem)}
          
        </div>
      </div>
    </div>
  )
}