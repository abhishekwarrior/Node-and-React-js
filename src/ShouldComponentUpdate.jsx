import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {

    constructor()
    {
        super();
        this.state={"counter":0};
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Before update counter is: "+prevState.counter);
        return true;
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("This is our example for update phase");
        console.log("update value of counter is : "+nextState.counter);
        return true;
    }

    update=()=>
    {
        this.setState({"counter":this.state.counter+1})
        console.log("counter is "+this.state.counter)
    }
    
  render() {
    return (
      <div>
        <h1>This is should conponent update method</h1>
        <h1>counter is {this.state.counter}</h1>
        <button onClick={this.update}>update</button>
      </div>
    )
  }
}
