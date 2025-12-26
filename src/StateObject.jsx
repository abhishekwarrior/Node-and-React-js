import { Component } from "react";

class StateObject extends Component
{
    constructor()
    {
        super();
        this.state={"name":"abhishek","age":20,"email":"abhi@gmail.com"}
        //object.key
        //this.state.name  > state is readymade
    }

    render()
    {
        return(
            <div>
                <h1>name is {this.state.name}</h1>
                <h1>age is {this.state.age}</h1>
                <h1>email is {this.state.email}</h1>
            </div>
        )
    }
}
export default StateObject;