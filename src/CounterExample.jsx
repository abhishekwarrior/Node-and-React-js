import { Component } from "react";

class CounterExample extends Component
{
    constructor()
    {
        super();
        this.state={"counter":0, "date":12 };
    }

    Updatecounter=()=>
    {
        //setstate()
        this.setState({"counter":this.state.counter+1,"date":45});
    }

    render()
    {
        return(
            <div>
                <h1>counter is {this.state.counter}</h1>
                <h1>date is {this.state.date}</h1>
                <button onClick={this.Updatecounter}>click for update counter</button>
            </div>
        )
    }
}
export default CounterExample;