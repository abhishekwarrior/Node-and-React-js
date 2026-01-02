import React,{ Component} from "react";

export default class ClassCompoentLifecycle extends Component
{
    constructor()
    {
        super();
        console.log("This is constructor of my class")
        this.state={"counter":0}
    }

    update=()=>
    {
        this.setState({"counter":this.state.counter+1})
    }

    componentDidMount()
    {
        console.log("This is msg from componentDidMount()....")
        document.addEventListener("keydown",this.handlekeydown);
    }
    
    counter1=0;
    handlekeydown=(event)=>
    {
        console.log(event.key)
        this.counter1++;
        console.log("you press no of charecters as "+this.counter1);
    }

    render()
    {
        console.log("this is render method");
        return(
            <div>
                <h1>counter is {this.state.counter}</h1>
                <button onClick={this.update}>update counter</button>
                Enter name: <input type="text"></input>
                Enter age: <input type="number"></input>
                <button onClick={this.handlekeydown}>click only</button>
            </div>
        )
    }
}