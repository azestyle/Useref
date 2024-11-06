import React,{useRef} from 'react';


function Usesref(){
   const usefocus=useRef(null);
   
   const getFocus=()=>{
    usefocus.current.focus();
   };

   const getReset=()=>{
    usefocus.current.value="";
   }

    return(
        <div className='section2'>
        <div>
            <input type="text" ref={usefocus}/>
        </div>

        <div>
            <button onClick={getFocus}>click onFocus</button>
            <button onClick={getReset}>click reset</button>
        </div>
        </div>
    )
}

export default Usesref;
