import React, { useEffect, useState } from "react";
import Markdown from 'react-markdown';
import Post from "../components/blogmaker";

const Cart = (props) => {
  const inputChange = (e) => {
    const dynamicLink = `${window.location.origin}/#/stuff`;

    if (e.target.value === dynamicLink) {
      props.setstuffcount(props.stuffcount + 1);
      props.setstuffvisible(false);
    }
    if (e.target.value === "stuff" && props.spanstuff) {
      props.setstuffcount(props.stuffcount + 1);
      props.setspanvisible(false);
    }
  };

  const checkoutClick = (e) => {
    if (props.stuffcount <= 2) {
      alert("Please add more than 2 items to checkout.");
    } else {
      props.setcheckedout(true);
    }
  };

  const selectedStuffHandler = (e) => {
    props.setspanstuff(true);
    console.log(props.spanstuff);
  };

  let carttext = `# You have ${props.stuffcount} item(s).`;

  return (
    <div className="cart-container">
      <Markdown>{carttext}</Markdown>
      <span>
        Fill your cart with {props.spanvisible && <span id={"stuff-span"} onDragStart={selectedStuffHandler} onDragEnd={selectedStuffHandler}>stuff</span>}.
      </span>
      <div id="cartimagediv">
        <Post path={"cart.md"} name={"cart"} />
        <textarea id="cart-input" value={""} onChange={inputChange}></textarea>
      </div>
      <button id="checkout-button" onClick={checkoutClick}>Checkout</button>
    </div>
  );
};

export default Cart;
