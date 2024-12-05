"use client";
import Image from "next/image";
import listImage from "/public/food0.png";
import listImage1 from "/public/food1.png";
import listImage2 from "/public/food2.png";
import { useState } from "react";

export default function List() {
  let [상품, set상품] = useState([
    { id: 0, product: "Tomatoes", cnt: 0 },
    { id: 1, product: "Pasta", cnt: 0 },
    { id: 2, product: "Coconut", cnt: 0 },
  ]);
  let images = [listImage, listImage1, listImage2];

  const productCnt = (idx) => {
    const newProduct = [...상품];
    newProduct[idx].cnt += 1;
    set상품(newProduct);
    console.log(상품);
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            {/* <img src="/food0.png" alt="" className="food-img" /> */}
            <Image src={images[idx]} className="food-img" />
            <h4>{el.product} $30</h4>
            <span> {el.cnt} </span>
            <button onClick={() => productCnt(idx)}>+</button>
          </div>
        );
      })}

      {/* <div className="food">
        <h4>{상품[0]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[1]} $30</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $30</h4>
      </div> */}
    </div>
  );
}
