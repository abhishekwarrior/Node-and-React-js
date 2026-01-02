import React, { useEffect } from 'react'

export default function UseEffectUnmount() {

    useEffect(()=>{
        document.addEventListener("keydown",handlekeydown)
        console.log("In mounting")
        return()=>{
            document.removeEventListener("keydown",handlekeydown)
            console.log("In Unmounting");
        }
    })

    let handlekeydown=(event)=>{
        console.log(event.key);
    }
  return (
    <div>
        Enter name: <input type="text" />
    </div>
  )
}
