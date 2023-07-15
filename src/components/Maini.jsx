import React,{useState} from 'react'

export default function Main() {
 const[ text,setText]=useState(0); 

  const handleChange=(e)=>{
    console.log(e.target.value);
    setText(e.target.value);

  }
  const handleIncrement=()=>{
    
    setText(text+1);
  }

  const handleDecrement=()=>{
    setText(text-1);
  }
  return (
    <>
        <main>
        <button className='but' onClick={handleIncrement}>+</button>
        <input className='inp' onChange={handleChange} type="text" value={text}/>
        <button className='but' onClick={handleDecrement}>-</button>
        </main>
    </>
  )
}
