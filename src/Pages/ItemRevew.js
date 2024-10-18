import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavber from "../Components/Sheard/Navber/TopNavber";
// import WhatsappIcon from "../Components/PageIcon/WhatsappIcon";
import Footer from "../Components/Sheard/Footer/Footer";
import Navber from "../Components/Sheard/Navber/Navber";
import data from "../data/PremiumKatanData";

function ItemRevew({ stateFunction }) {
  const { love, shop } = stateFunction;
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const filter = data.find((item) => item.id === id);
    setProduct(filter);
  }, [id]);

  return (
    <div>
      <TopNavber />
      <Navber data={{ love, shop }} />
      {/* <WhatsappIcon /> */}
      {
        <div className="wrap mx-5">
          <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-7">
            <div className="flex justify-center   ">
              {product && (
                <img
                  className="rounded-md  max-w-[600px] w-full m-auto"
                  src={product.image}
                  alt=""
                />
              )}
            </div>
            <div className="">
              {product && (
                <h3 className="font-bold text-2xl">{product.title}</h3>
              )}

              {product && (
                <div className="flex gap-5 my-5">
                  <h3 className="font-bold">Price-</h3>
                  <h3 className=" text-green-500  font-bold text-xl ">
                    {" "}
                    {product.price}৳
                  </h3>
                </div>
              )}

              <a
                target="_blank"
                href="https://wa.me/01789282050"
                rel="noreferrer"
              >
                <button className="w-full p-2 font-bold text-bold rounded-lg hover:bg-gray transition-all duration-300 cursor-pointer bg-green-500 text-white my-6">
                  {" "}
                  অর্ডার করতে ক্লিক করুন
                </button>
              </a>

              {product && (
                <ul className=" py-5 list-none">
                  {product.desc.descContent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              <p>
                বিঃদ্রঃ ডিভাইস রেজুলেশন ও লাইটের কারণে কালারের হাল্কা তারতম্য
                হতে পারে। তবে আমরা ন্যাচারাল রাখার চেষ্টা করেছি।
              </p>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}

export default ItemRevew;
