import React, { useState, useEffect } from "react";
import { WomensData } from "../Datas/WomensData";
import { Link } from "react-router-dom";
function Women() {
  //useState
  const [posts, setPosts] = useState(WomensData);


  return (
    <>
       <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-2 space-x-2 space-y-2">
        {posts.map((product) => {
          const {
            product_id,
            product_name,
            product_image,
            product_price,
            brand,
            size,
            gender,
          } = product;
          return (
            <Link
              to={`/ItemDetail${product_id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="cursor-pointer w-[100%] h-[100%]  flex flex-col justify-between align-middle text-left   space-y-1"
                key={product_id}
              >
                <img
                  className="  object-fit h-[100%] w-[100%] rounded-lg"
                  src={product_image}
                  alt=""
                />
                <span className="text-black font-bold tracking-wide">
                  {brand}
                </span>
                <h4 className="text-gray-700 text-base md:text-lg">
                  {product_name}
                </h4>
                <span className="text-black">Gender : {gender}</span>
                <span className="text-black font-bold">
                  $ {product_price}.00{" "}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Women;
