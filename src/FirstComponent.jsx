import { Component } from "react";

class FirstComponent extends Component{
    a=15;
    constructor()
    {
        super();
    }
    
    render() // render shows result code on browser
    {
        return(
            <div>
                <h1>This is my react js Component</h1>
                <h2>Value of a is {this.a}</h2>
            </div>
        )
    }
}
export default FirstComponent;