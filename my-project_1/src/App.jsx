// 1.
// // 1. Fixed typo "functiom" to "function"
// function Button({ onClick, variant, children }) {
//   // Define styles based on the variant prop
//   const style =
//     variant === "primary"
//       ? { padding: "1rem", color: "white", background: "purple", border: "none", cursor: "pointer" }
//       : { padding: "1rem", color: "white", background: "gray", border: "none", cursor: "pointer" };

//   return (
//     // 2. Used the passed-in "onClick" prop
//     // 3. Rendered "children" so the text shows up
//     // 4. Properly closed the <button> tag
//     <button style={style} onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// export default function App() {
//   const handlePrimaryClick = () => alert("Primary Clicked!");
//   const handleSecondaryClick = () => alert("Secondary Clicked!");

// 
// 
// 
// 
// 
// 

//   return (
//     <div style={{ display: "flex", gap: "10px" }}>
//       <Button variant="primary" onClick={handlePrimaryClick}>
//         Primary Button
//       </Button>
//       <Button variant="secondary" onClick={handleSecondaryClick}>
//         Secondary Button
//       </Button>
//     </div>
//   );
// }


// 2. 

// import React from 'react';

// // 1. Named export (not default)
// export function AppCreateElement() {
//   return React.createElement(
//     "div",
//     { className: "App" },
//     [
//       React.createElement("h1", { key: "h1" }, "Hello, World!"), 
//       React.createElement("p", { key: "p" }, "Hello, World!")
//     ]
//   );
// }

// // 2. Default export
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//       <p>Hello, World!</p>
//     </div>
//   );
// }


// 3.
// export default function Avatar(){
//     return (
//       <img
//       className="avatar"
//       src="https://i.pravatar.cc/150?img=3"
//       alt="Avatar"
//     />
//     )


// 4. 

// export default function Avatar() {
//   const avatar= "https://i.pravatar.cc/150?img=3";
//   const description = "Avatar the mighty";
  
//   return (
//     <img
//       className="avatar"
//       src={avatar}
//       alt={description}
//     />
//   );   
// }


// 5. 
// const today= new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
//   }).format(date);
// }
// export default function TodoList() {
//   return (
//     <h1>Today is {formatDate(today)}</h1>
//   );   
// }

// 6. 

// export default function TodoList() {
//   return (
//     <ul style={{
//       backgroundColor: "black",
//       color: "pink"
//     }}>
//       <li>Task 1</li>
//       <li>Task 2</li>
//       <li>Task 3</li>
//     </ul>
//   );
// }

// 7. 

// const person ={
//     name: "bhavya",
//     theme:{
//         backgroundColor: "black",
//         color: "pink"
//     }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todo List</h1>
//       <img 
//       className= "Bhanu"
//       src="https://i.pravatar.cc/150?img=3"
//       alt="Avatar"
//       />
//       <ul>
//         <li>Task 1</li>
//         <li>Task 2</li>
//         <li>Task 3</li>
//       </ul>
//     </div>
//   );
// }

// 8.

// export default function Bio() {
//   return(
//     <div>
//       <div>
//         <h1>Welcome to my page</h1>
//       </div>
//       <p className="summary">
//         I am a Full Stack Web Developer
//         <br /><br />
//         <b>And <i>pics</i></b> Hello
//       </p>
//     </div>
//   )
// }


// 9. 
// function App(){
//   const app = document.createElement("div")
//   app.className="App"
//   const h1= document.createElement("h1")
//   const h2= document.createElement("h2")
//   h1.textContent="Hello, World!"
//   h2.textContent="Welcome to my page"
//   app.append(h1,h2)
//   return app
// }
// document.body.append(App())

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//       <h2>Welcome to my page</h2>
//     </div>
//   );
// }

// 10, 

// export default function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>Welcome to my page</h2>
//     </div>
//   );
// }
import React from 'react';
import axios from 'axios';

export default async function App() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <div>
      <h1>Hello</h1>
      <p>{response.data.title}</p>
    </div>
  );
}   
console.log("App component rendered");
