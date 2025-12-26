import { Component } from "react";

class ConditionalRendering extends Component
{
    constructor()
    {
        super();
        this.state={"isloggedin":true}
    }
    
    updatelogin=()=>
    {
        this.setState({"isloggedin":!this.state.isloggedin})
    }


    render()
    {
        return(
            <div>
                {this.state.isloggedin ? <h1>Welcome user</h1>:<h1>wencome guest please login</h1>}
                <button onClick={this.updatelogin}>click here to update isloggedin</button>
            </div>
        )
    }
}
export default ConditionalRendering;