import React from "react";
import Cart from "./Cart";

function Newcart(){
   let arr=[
    {img: <img src="https://picsum.photos/id/237/200/300" alt="" />,
     tittle: <p>this is dog</p>   
    },
    {img: <img src="https://picsum.photos/id/238/200/300" alt="" />,
     tittle: <p>this is town</p>,
     button:<button>click me</button>   
    },
    {img: <img src="https://picsum.photos/id/239/200/300" alt="" />,
     tittle: <p>this is happy</p>   
    },
    {img: <img src="https://picsum.photos/id/240/200/300" alt="" />,
     tittle: <p>this is cubes</p>   
    }
   ];
 let cartmp=arr.map((el,index)=>{
   return (<Cart key={index}>
        <div>
           {el.img}
        </div>
        <div>
            {el.tittle}
        </div>
        <div>
            {el.button}
        </div>
    </Cart>)
   })
   return(
    <div className="cartgr">
        {cartmp}
    </div>
   )
}

export default Newcart;

  