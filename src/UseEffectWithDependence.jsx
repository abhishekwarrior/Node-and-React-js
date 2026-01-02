import React, { useEffect, useState } from 'react'

export default function UseEffectWithDependence() {
    let [counter,setCounter]=useState(0);
    let [data,setData]=useState(100);

    useEffect(
        ()=>{
            console.log("This is example of dependencies array")
        }
    ,[])
  return (
    <div>
        <h1>counter is {counter}</h1>
        <h1>data is {data}</h1>
        <button onClick={()=>{setCounter(counter+10)}}>update counter</button>
        <button onClick={()=>{setData(data-10)}}>update data</button>
    </div>
  )
}
