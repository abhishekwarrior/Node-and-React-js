import { Component } from "react";

class Toggaleffect extends Component
{
    constructor()
    {
        super();
        this.state={"result":true}
    }
    
    updateresult=()=>{
        this.setState({"result":!this.state.result});
    }

    render()
    {
        return(
            <div>
                <h1>result is {this.state.result.toString()}</h1>
                <button onClick={this.updateresult}>click here to update</button>
            </div>
        )
    }
}
export default Toggaleffect;