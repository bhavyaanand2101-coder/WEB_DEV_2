// import React, {component} from 'react';
// class Counter extends component{
//   constructor(){
//     super()
//     this.state = {
//       count: 0
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>Counter</h1>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>this.increment()}>Increment</button>
//         </div>
//     )
//   }
// }
// export default Counter;


// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   //  Define the increment method
//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   //  Define decrement method if needed
//   decrement() {
//     this.setState({
//       count: this.state.count - 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         {/* Use an arrow function or bind this to ensure 'this' refers to the class */}
//         <button onClick={() => this.increment()}>Increment</button>
//         <button onClick={() => this.decrement()}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default Counter;


// import React, {useState} from 'react';
// function Counter(){
//   const[count,setCount]=useState(0);
//   const btn={ padding:'6px 12px',margin:'5px',fontSize:'30px',backgroundColor:'blue',color:'white',border:'none',borderRadius:'5px',cursor:'pointer'  }
  
//   const increment=()=>{
//     setCount(count+1);
//   }
//   const decrement=()=>{
//     setCount(count-1);
//   }
//   const reset=()=>{
//     setCount(0);
//   }
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button style={btn} onClick={increment}>+</button>
//       <button style={btn} onClick={decrement}>-</button>
//       <button style={btn} onClick={reset}>Reset</button>
//     </div>
//   )   
// }
// export default Counter; 

// import React from 'react';
// import Button from './Button'; // Import the child component

// export default function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Buttons with Props</h2>

//       {/* Passing different props to the same component */}
//       <Button color="blue" text="Submit" />
//       <Button color="green" text="Confirm" />
//       <Button color="red" text="Delete" />
//     </div>
//   );
// }

// import React from 'react';
// import Greet from './Components/Greet';

// function App() {
//   return (
//     <div>
//       <Greet name="Alice" />
//       <Greet name="Bob" />
//       <Greet name="Charlie" />
//     </div>
//   );
// }
// export default App;

// function App() {
//   const isLoggedIn = true; // Change this to false to test the other case
//   if (isLoggedIn) {
//     return <h1>Welcome back!</h1>;
//   } else {
//     return <h1>Please log in.</h1>;
//   }
// }

// export default App;

// function App(){
//   const isLoggedIn =false;
//   return(
//   <div>
//     {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
//   </div>
// )
// }
// export default App;
