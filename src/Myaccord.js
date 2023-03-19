import React, { useState } from 'react'
import './Myaccord.css';

const Myaccord = ({questions, answer}) => {
    const [isOpen , setIsopen]=useState(false)
  return (
    <>
    <div className='content' onClick={()=>setIsopen(!isOpen)}>
      <h1>{questions} </h1>
      {isOpen ? 'open': 'close'}
      </div>
      <div className='content2'>

      {isOpen ?  <h1>{answer}</h1> : ''}
    </div>
    </>
  )
}

export default Myaccord
