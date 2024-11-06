import React from 'react';


function  Modal({tittle,img,close,isOpen}){
    
    if(!isOpen){
        return null
    }
    return(
         <div>
            <div>
               <img src={img} alt="" />
            </div>
            <p>{tittle}</p>
            <button onClick={close}>get close</button>
           
         </div>
    )
       
    

}

export default Modal;