import React from "react";
import Markdown from 'react-markdown';
import Post from "../components/blogmaker";
import { useEffect, useState } from "react";
const Cart = (props) => {
  const inputChange = (e) => {
    if(e.target.value === "https://thechosen2.github.io/#/stuff"){
      props.setstuffcount(props.stuffcount + 1);
    }
    else if(e.target.value === "stuff"){
      props.setstuffcount(props.stuffcount + 1);
    }
  }
  let carttext = `# You have ${props.stuffcount} item(s).
  ## Fill your cart with stuff.
  `
  return (
    <div className="cart-container">
      <Markdown>{carttext}</Markdown>
      <div id="cartimagediv">
        <Post path={"cart.md"} name={"cart"}/>
        <textarea id="cart-input" value={""} onChange={inputChange}></textarea>
      </div>
    </div>
  )
};

export default Cart;
