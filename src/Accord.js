import React, { useState } from 'react'
import { questions } from './api'
import Myaccord from './Myaccord'



const Accord = () => {
    const [data, setData]=useState(questions)

  return (
    <div>
      <h1> QUESTION AND ANSWERS FOR REACT.JS </h1>
      {
        data.map((curr)=>{
          const {id}=curr;
           return <Myaccord key={id} {...curr}/>
        })
      }
    </div>
  )
}

export default Accord;
