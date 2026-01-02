import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {

    constructor()
    {
        super();
        this.state={"counter":0}
    }

    update=()=>{
        this.setState({"counter":1})
    }

    componentDidUpdate(prevProps,prevState)
    {
        console.log("This is compondidupdate()....example")
        if(this.state.counter<=10){
           this.setState({"counter":this.state.counter+1})
           console.log("counter is:::"+this.state.counter)
           console.log("before update counter is "+prevState.counter)
        }
        

    }

  render() {
    return (
      <div>
        <h1>counter is {this.state.counter}</h1>
        <button onClick={this.update}>update button</button>
      </div>
    )
  }
}
