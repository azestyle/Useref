import React,{useState} from 'react';
import './style.css';
import Cartgr from './Cartgroup';
import Newcart from './Newmethod';
import Usesref from './ButtonUseref';
import Modal from './Modal';
function App() {
  const [count, setcount] = useState(false);
  const getClose=()=>{
    setcount(false);
  };
  const getOpen=()=>{
   setcount(true);
  }
  return (
    <>
    <div className="App">
    {/* <Cartgr/> */}
    <Newcart/>
    </div>
    <Usesref/>
    <div className='modaldiv'>
      <Modal
      img={'https://picsum.photos/id/270/200/300'}
      tittle={'this is rule'}
      close={getClose}
      isOpen={count}/>
      <button onClick={getOpen}>get open</button>
    </div>
  
    </>
  );
}

export default App;
