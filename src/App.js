import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [number,setnumber]=React.useState(0);
 function add()
 {
  setnumber(setnumber =>setnumber+1)
 }
 function minus()
 {
  setnumber(setnumber =>setnumber-1)
 }
  return (
    <div className="App">
     
       <div className='minus' onClick={minus}>
              <b className='text'> minus</b>
       </div>
       <div className='number'>
        <b className='text3'>{number}</b>
       </div>
       <div className='plus' onClick={add}>
        <b className='text'>Plus</b>
       </div>
       
    </div>
  );
}

export default App;
