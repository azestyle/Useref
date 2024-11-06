import React from "react";
import Cart from "./Cart";

function Cartgr(){
  return (
  <div className="cartgr">
    <Cart>
        <div>
            <img src="https://picsum.photos/id/237/200/300" alt="" />
        </div>
        <div>
            <p>this is dog</p>
        </div>
    </Cart>
    <Cart>
        <div>
            <img src="https://picsum.photos/id/238/200/300" alt="" />
        </div>
        <div>
            <p>this is town</p>
        </div>
    </Cart>
    <Cart>
        <div>
            <img src="https://picsum.photos/id/239/200/300" alt="" />
        </div>
        <div>
            <p>this is happy</p>
        </div>
    </Cart>
    <Cart>
        <div>
            <img src="https://picsum.photos/id/240/200/300" alt="" />
        </div>
        <div>
            <p>this is cubic</p>
        </div>
    </Cart>

  </div>
 
    
        
        ) 
}

export default  Cartgr;