// import React from 'react';
// class Example extends React.Component {
//   constructor(){
//     super();
//     this.state= {name: "Student"}
//   }
//   componentDidMount(){
//     console.log("Component Did Mount");
//   }
//   render(){
//     return(
//       <div>
//         <h1>Welcome {this.state.name}</h1>
//       </div>
//     )   
//     }
//   }
// export default Example;


// import React from "react";
// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Should Component Update Called");
//     return true; // allow re-render
//   }

//   componentDidUpdate() {
//     console.log("Component Updated");
//   }

//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase
//         </button>
//       </div>
//     );
//   }
// }
// export default Counter;

// import React from "react";
// class Timer extends React.Component {
//   constructor() {
//     super();
//     this.state = { count:0};
//   }
//   componentDidMount() {
//     this.timer= setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Timer Unmounted");
//   }
//   render() {
//     return (
//       <div>
//         <h2>Timer: {this.state.count} seconds</h2>
//       </div>
//     );
//   }
// }
// export default Timer;


import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Start the timer when the component loads
    this.startTimer();
  }

  // Create a separate method to start the timer
  startTimer = () => {
    // Check if a timer is already running to avoid duplicates
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    }
  }

  // Method to stop the timer
  stopTimer = () => {
    clearInterval(this.timer);
    this.timer = null; // Clear the reference
    console.log("Timer Stopped");
  };

  componentWillUnmount() {
    this.stopTimer(); // Always clean up when component is destroyed
  }

  render() {
    return (
      <div>
        <h2>Timer: {this.state.count} seconds</h2>
        {/* Add a button to call the stopTimer method */}
        <button onClick={this.stopTimer}>Stop Timer</button>
        <button onClick={this.startTimer}>Start Timer</button>
      </div>
    );
  }
}

export default Timer;