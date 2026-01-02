import { useState } from "react"

function ConditionalFunctional()
{
    let[isVisible,setVisible]=useState(true);
    return(
        <div>
            <h1>This is conditional Rendaring or finction</h1>
            {isVisible?<h1>Welcome dear student</h1>:<h1>Welcome strengers</h1>}
            <button onClick={()=>{setVisible(!isVisible)}}>update visiable</button>
        </div>
    )
}
export default ConditionalFunctional;