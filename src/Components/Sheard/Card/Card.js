import { AiOutlineHeart } from "react-icons/ai"; 
import React from 'react'

function Card({data}) {

  const {image,title,desc,price} = data

  return (
<div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="p-2">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-between">
        <p className='text-primary font-bold'>{price}<span className="font-bold">৳</span></p>
        <AiOutlineHeart className="text-gray text-2xl" />
    </div>
  </div>
</div>
  )
}

export default Card
