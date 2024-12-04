// "use client";

import data from "./data.js";
import dynamic from "next/dynamic";
import Head from "./components/Head.js";
import RedBtn from "./components/RedBtn.js";
export default function Cart() {
  let arrData = ["tomatoes", "Pasta"];
  return (
    <div>
      <RedBtn color="blue" />
      <h4 className="title">Cart</h4>
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </>
  );
}
