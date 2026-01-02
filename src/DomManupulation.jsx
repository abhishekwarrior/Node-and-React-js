import { Component } from "react"

export default class DomManupulation extends Component
{
    componentDidMount()
    {
        document.getElementById("header").style.color="red";
        document.getElementById("header").style.backgroundColor="yellow";
    }

    render()
    {
        return(
            <div>
                <h1 id="header">welcome Abhishek you are great</h1>
            </div>
        )
    }
}