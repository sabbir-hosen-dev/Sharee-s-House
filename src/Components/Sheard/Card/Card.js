import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

function Card({ data, ftion }) {
  const { image, title, price, id ,oldPrice} = data;
  const { setLove, setShop, love, shop } = ftion;
  return (
    <div className="card card-compact bg-base-100 cursor-pointer shadow-xl">
      <figure>
        <Link to={`/item/${id}`}>
          <img className="  " src={image} alt="Shoes" />
        </Link>
      </figure>
      <div className="p-2">
        <h2 className="font-[500]">{title}</h2>
        {/* <p>{desc}</p> */}
        <div className="card-actions justify-between">
          <p className="">
            <span className="mr-3 text-gray"><s>{oldPrice}৳</s></span>
            <span className="font-bold text-primary">{price}৳</span>
          </p>
          <div className="flex gap-2">
            <FiShoppingCart
              onClick={() => {
                setShop([...shop, id]);
              }}
              className="text-gray text-2xl hover:text-primary duration-300 transition-all"
            />
            <AiOutlineHeart
              onClick={() => setLove([...love, id])}
              className="text-gray text-2xl hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
