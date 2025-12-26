import { Component } from "react";

class ClassVariable extends Component 
{
    counter=5;
    update=()=>
    {
        this.counter=10;
        console.log("counter is: "+this.counter);
    }

    render(){
        return(
            <div>
            <h1>counter is {this.counter}</h1>
            <button onClick={this.update}>click here to update counter </button>
            </div>
        )
    }
        
}


export default ClassVariable;