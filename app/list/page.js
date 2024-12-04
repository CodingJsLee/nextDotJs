"use client";
import Image from "next/image";
import listImage from "/public/food0.png";
import listImage1 from "/public/food1.png";
import listImage2 from "/public/food2.png";
import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let images = [listImage, listImage1, listImage2];
  let [cnt, setCnt] = useState(0);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            {/* <img src="/food0.png" alt="" className="food-img" /> */}
            <Image src={images[idx]} className="food-img" />
            <h4>{el} $30</h4>
            <span> {cnt} </span>
            <button
              onClick={() => {
                setCnt(cnt + 1);
              }}
            >
              +
            </button>
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
