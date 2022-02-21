import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Start'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

   clickHandler() {
    console.log(this)
    this.setState({message: 'End'})
   }



  render() {
    return (
      <div>
        <h2>Event Binding</h2>
        <div>{this.state.message}</div>

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind