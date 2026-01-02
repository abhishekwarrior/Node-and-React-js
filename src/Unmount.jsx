import React, { Component } from 'react'

export default class Unmount extends Component {

    constructor()
    {
        super();
    }

    componentDidMount()
    {
        document.addEventListener("keydown",this.handlekeydown);
    }

    handlekeydown=(event)=>{
        console.log(event.key);
    }

    componentWillUnmount()
    {
        document.removeEventListener("keydown",this.handlekeydown);
        console.log("keydown remved")
    }

  render() {
    return (
      <div>Unmount</div>
    )
  }
}
