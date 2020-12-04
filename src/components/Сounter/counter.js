import React, { Fragment } from 'react'
import './style.css'

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

  decrement() {
    if (this.state.counter > 0) {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.decrement} >-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.increment}>+</button>
      </Fragment>
    )
  }
}