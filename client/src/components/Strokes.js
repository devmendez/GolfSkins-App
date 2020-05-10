import React, { Component } from 'react'

class Strokes extends Component {

state = {
    count: 0
    };
  

  increment = () => {
    this.setState({
        count: this.state.count +1
    });
  }

  decrement = () => {
    this.setState({
        count: this.state.count -1
    });
  }


    render() {
        return (
            <div>
               <p>count: {this.state.count}</p> 
               <button> onclick= {this.increment}increment</button>
               <button> onclick= {this.decrement}decrement</button>
            </div>
        )
    }
}
export default Strokes