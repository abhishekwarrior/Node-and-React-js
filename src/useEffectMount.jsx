import React, { useEffect } from 'react'

export default function UseEffectMount() {

    useEffect(()=>{
        console.log("this is mounting phase example")
        document.addEventListener("keydown",handlekeydown)
    });

    let handlekeydown=(event)=>{
        console.log(event.key);
    }
  return (
    <div>
        <h1>This is example of use effect()</h1>
        enter name: <input type="text" />
    </div>
  )
}
