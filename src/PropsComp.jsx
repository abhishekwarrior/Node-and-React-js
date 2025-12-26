import { Component } from "react";

class PropsComp extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <h1>this is child component</h1>
                <h1>name is {this.props.name}</h1>
                <h2>age is {this.props.age+5} and marks is {this.props.marks}</h2>
                <h2>course is {this.props.course}</h2>

            </div>
        )
    }
}

export default PropsComp;