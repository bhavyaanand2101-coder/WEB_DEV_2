// // Q11. Create a React application using Vite and implement JSX expressions 
// // 1. Create the project
// // npm create vite@latest my-react-app -- --template react

// // 2. Go into the folder
// // cd my-react-app

// // 3. Install dependencies
// // npm install

// // 4. Start the development server
// // npm run dev

// import React from 'react';

// function App() {
//   // 1. Defining variables
//   const name = "Rahul";
//   const course = "Web Development";
//   const year = 2027;
//   const isLoggedIn = true;

//   // 2. Defining a function to be used in JSX
//   const getGreeting = (user) => {
//     return `Welcome back, ${user}!`;
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h1>React with Vite</h1>

//       {/* Using curly braces {} to inject JS expressions */}
//       <p><strong>Student Name:</strong> {name}</p>
//       <p><strong>Course:</strong> {course}</p>
      
//       {/* Arithmetic Expression */}
//       <p><strong>Next Year will be:</strong> {year + 1}</p>

//       {/* Function Call Expression */}
//       <h3>{getGreeting(name)}</h3>

//       {/* Ternary Operator (Conditional Expression) */}
//       <div>
//         {isLoggedIn ? (
//           <p style={{ color: 'green' }}>Status: You are logged in.</p>
//         ) : (
//           <p style={{ color: 'red' }}>Status: Please log in.</p>
//         )}
//       </div>

//       {/* Using JS logic for dynamic attributes */}
//       <button disabled={!isLoggedIn}>Access Dashboard</button>
//     </div>
//   );
// }

// export default App;

// // Q12. Develop functional components and pass data using props 

// import StudentCard from "../StudentCard";
// function App() {
//   return (
//     <div>
//       <h1>College Directory</h1>
      
//       {/* Passing data using props */}
//       <StudentCard 
//         name="Amit Sharma" 
//         roll={101} 
//         course="Computer Science" 
//       />
      
//       <StudentCard 
//         name="Sneha Kapoor" 
//         roll={102} 
//         course="Information Technology" 
//       />
//     </div>
//   );
// }

// export default App;

// // StudentCard.jsx

// // We use 'destructuring' { name, roll, course } to get values directly
// function StudentCard({ name, roll, course }) {
//   return (
//     <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '8px' }}>
//       <h2>Student Details</h2>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Roll No:</strong> {roll}</p>
//       <p><strong>Course:</strong> {course}</p>
//     </div>
//   );
// }

// export default StudentCard;

// Q13. Manage component state and conditional rendering in React 

// import { useState } from "react";

// function App() {
//   // 1. Defining State
//   // isLoggedIn: the current value (false)
//   // setIsLoggedIn: the function used to update the value
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to toggle the state
//   const handleAuth = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}>
//       <h1>State & Conditional Rendering</h1>

//       {/* --- Method 1: Ternary Operator (Condition ? True : False) --- */}
//       {isLoggedIn ? (
//         <h2 style={{ color: "green" }}>Welcome back, User! ✅</h2>
//       ) : (
//         <h2 style={{ color: "red" }}>Please log in to continue. ❌</h2>
//       )}

//       {/* --- Method 2: Logical && (Show only if True) --- */}
//       {isLoggedIn && <p>Dashboard Access Granted: Secret Token #12345</p>}

//       <button 
//         onClick={handleAuth} 
//         style={{ padding: "10px 20px", cursor: "pointer", marginTop: "10px" }}
//       >
//         {isLoggedIn ? "Log Out" : "Log In"}
//       </button>

//       <hr style={{ margin: "30px 0" }} />

//       {/* Another simple state example: Counter */}
//       <h3>Simple Counter Example</h3>
//       <Counter />
//     </div>
//   );
// }

// // A smaller component to show local state management
// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Click count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       {/* Conditional rendering for a warning */}
//       {count > 10 && <p style={{ color: "orange" }}>Warning: High count!</p>}
//     </div>
//   );
// }

// export default App;

// Q13. Manage component state and conditional rendering in React 
// import { useState } from "react";

// function App() {
//   // 1. Create a state variable (isVisible) with initial value 'false'
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>React Easy State Demo</h1>

//       {/* 2. Conditional Rendering: Only show the <h2> if isVisible is TRUE */}
//       {isVisible && <h2 style={{ color: "blue" }}>Hello! I am now visible.</h2>}

//       {/* 3. Button to toggle the state */}
//       <button onClick={() => setIsVisible(!isVisible)}>
//         {/* Ternary logic to change button text based on state */}
//         {isVisible ? "Hide Message" : "Show Message"}
//       </button>
//     </div>
//   );
// }

// export default App;

// Q14. Implement component lifecycle behavior using React hooks or lifecycle methods

// import { useState, useEffect } from "react";

// // This is a separate component to demonstrate "Unmounting"
// function TimerComponent() {
//   useEffect(() => {
//     // 1. MOUNTING: Runs once when the component appears
//     console.log("Timer Component: Mounted (Created)");

//     // 3. UNMOUNTING: The 'cleanup' function runs when the component disappears
//     return () => {
//       console.log("Timer Component: Unmounted (Destroyed)");
//     };
//   }, []);

//   return <h2 style={{ color: "red" }}>The Timer is running...</h2>;
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [showTimer, setShowTimer] = useState(true);

//   // 2. UPDATING: Runs every time the 'count' state changes
//   useEffect(() => {
//     if (count > 0) {
//       console.log("App Component: Updated! New count is " + count);
//     }
//   }, [count]); // Dependency array: only runs when 'count' changes

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>React Lifecycle Demo</h1>
//       <p>Check the **Console (F12)** to see the lifecycle logs!</p>

//       {/* Button to trigger Update */}
//       <button onClick={() => setCount(count + 1)}>
//         Update Count: {count}
//       </button>

//       <hr />

//       {/* Button to trigger Mount/Unmount */}
//       <button onClick={() => setShowTimer(!showTimer)}>
//         {showTimer ? "Remove Timer Component" : "Add Timer Component"}
//       </button>

//       {showTimer && <TimerComponent />}
//     </div>
//   );
// }

// export default App;


// Q15. Apply different styling techniques in React including CSS Modules and Tailwind CSS

// import React from 'react';
// // 1. Importing CSS Module
// import styles from './MyStyle.module.css';

// function App() {
  
//   // 2. Defining Inline Styles (Object)
//   const inlineBox = {
//     backgroundColor: 'lightblue',
//     padding: '20px',
//     borderRadius: '10px',
//     border: '2px solid blue',
//     marginBottom: '10px'
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>React Styling Techniques</h1>

//       {/* Technique 1: Inline Styling */}
//       <div style={inlineBox}>
//         <strong>1. Inline Style:</strong> Styled using a JS Object.
//       </div>

//       {/* Technique 2: CSS Modules */}
//       <div className={styles.moduleBox}>
//         <strong>2. CSS Module:</strong> Styled using an imported local class.
//       </div>

//       {/* Technique 3: Tailwind CSS (Utility Classes) */}
//       {/* Note: Tailwind must be installed/configured in your project to work */}
//       <div className="bg-purple-500 text-white p-5 rounded-lg border-2 border-purple-800">
//         <strong>3. Tailwind CSS:</strong> Styled using utility classes like 'p-5' and 'bg-purple-500'.
//       </div>

//     </div>
//   );
// }

// export default App;
// MyStyle.module.css
/* This class is scoped only to the component that imports it */

// .moduleBox {
//     background-color: lightgreen;
//     padding: 20px;
//     border-radius: 10px;
//     border: 2px solid green;
//     margin-bottom: 10px;
// }

// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// Then add the paths to all of your template files in the tailwind.config.js file:
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// in css file add the following lines
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// // Q16. Implement useState and useEffect hooks to manage state and side effects

// import { useState, useEffect } from "react";

// function App() {
//   // 1. Manage State (using useState)
//   const [count, setCount] = useState(0);

//   // 2. Manage Side Effects (using useEffect)
//   useEffect(() => {
//     // This side effect updates the Browser Tab Title
//     document.title = `Count: ${count}`;
    
//     console.log("Effect triggered: The count is now " + count);
    
//   }, [count]); // Dependency Array: Run this effect only when 'count' changes

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>Hooks Demo</h1>
      
//       <div style={{ fontSize: "24px", margin: "20px" }}>
//         Current Count: <strong>{count}</strong>
//       </div>

//       <button 
//         onClick={() => setCount(count + 1)}
//         style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//       >
//         Increment Count
//       </button>

//       <p>Check the Browser Tab Title and Console (F12)!</p>
//     </div>
//   );
// }

// export default App;

// // 17. Develop controlled forms with validation and submission handling in React

// import { useState } from "react";

// function App() {
//   // 1. State for form inputs
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
  
//   // 2. State for validation errors
//   const [error, setError] = useState("");

//   // 3. Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents page reload

//     // Basic Validation Logic
//     if (username.length < 3) {
//       setError("Username must be at least 3 characters long.");
//       return;
//     }
//     if (!email.includes("@")) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // If validation passes
//     setError(""); // Clear errors
//     alert(`Form Submitted!\nName: ${username}\nEmail: ${email}`);
    
//     // Optional: Reset form
//     setUsername("");
//     setEmail("");
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px" }}>
//       <h2>Controlled Form</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Username Input */}
//         <div style={{ marginBottom: "10px" }}>
//           <label>Username: </label> <br />
//           <input 
//             type="text" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//           />
//         </div>

//         {/* Email Input */}
//         <div style={{ marginBottom: "10px" }}>
//           <label>Email: </label> <br />
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//         </div>

//         {/* Display Validation Error */}
//         {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// // 18. Configure client-side routing using React Router with dynamic route parameters

// // npm install react-router-dom

// import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

// // 1. HOME COMPONENT
// function Home() {
//   return (
//     <div>
//       <h2>Welcome to the Home Page</h2>
//       <p>Select a user to view their profile:</p>
//       <ul>
//         <li><Link to="/user/101">View User 101</Link></li>
//         <li><Link to="/user/202">View User 202</Link></li>
//         <li><Link to="/user/Alpha">View User Alpha</Link></li>
//       </ul>
//     </div>
//   );
// }

// // 2. DYNAMIC USER DETAIL COMPONENT
// function UserProfile() {
//   // useParams hook captures the dynamic ":id" from the URL
//   const { id } = useParams();

//   return (
//     <div style={{ padding: "10px", border: "1px solid blue" }}>
//       <h3>User Profile Page</h3>
//       <p>Current User ID is: <strong style={{ color: "red" }}>{id}</strong></p>
//       <Link to="/">Back to Home</Link>
//     </div>
//   );
// }

// // 3. MAIN APP (Router Configuration)
// function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
//         <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
//       </nav>

//       <div style={{ padding: "20px" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
          
//           {/* ":id" is a dynamic parameter. It can be anything. */}
//           <Route path="/user/:id" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// // 19.Implement global state management using Context API and useContext hook

// import { createContext, useState, useContext } from "react";

// // 1. CREATE the Context (Like a global storage box)
// const UserContext = createContext();

// function App() {
//   const [user, setUser] = useState("Rahul Kumar");

//   return (
//     // 2. PROVIDE the Context to all children
//     <UserContext.Provider value={user}>
//       <div style={{ padding: "20px", border: "2px solid black" }}>
//         <h1>Parent Component (App)</h1>
//         <p>User in App state: {user}</p>
//         <hr />
//         <MiddleComponent />
//       </div>
//     </UserContext.Provider>
//   );
// }

// // A middle component that DOES NOT receive props
// function MiddleComponent() {
//   return (
//     <div style={{ padding: "10px", backgroundColor: "#eee" }}>
//       <h3>Middle Component</h3>
//       <p>I am just a bridge. I don't use the user data.</p>
//       <DeepChild />
//     </div>
//   );
// }

// // 3. CONSUME the Context in a deep child
// function DeepChild() {
//   // Use the useContext hook to reach up and grab the 'user' value
//   const loggedInUser = useContext(UserContext);

//   return (
//     <div style={{ padding: "10px", backgroundColor: "lightyellow", border: "1px solid gold" }}>
//       <h4>Deep Child Component</h4>
//       <p>Data received from Context: <strong>{loggedInUser}</strong></p>
//     </div>
//   );
// }

// export default App;

// // Q20. Integrate REST APIs using Fetch or Axios with loading and error handling
// import { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);    // To store API data
//   const [loading, setLoading] = useState(true); // To track loading status
//   const [error, setError] = useState(null);   // To store error messages

//   useEffect(() => {
//     // Define the async function
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Start loading
        
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         // If API returns an error (like 404), manually throw an error
//         if (!response.ok) {
//           throw new Error("Failed to fetch data from server.");
//         }

//         const data = await response.json();
//         setUsers(data); // Save data to state
//       } catch (err) {
//         setError(err.message); // Save error message to state
//       } finally {
//         setLoading(false); // Stop loading regardless of success or failure
//       }
//     };

//     fetchData();
//   }, []); // Run only once on mount

//   // 1. CONDITIONAL RENDERING FOR LOADING
//   if (loading) return <h2 style={{ color: "blue" }}>Loading users... Please wait.</h2>;

//   // 2. CONDITIONAL RENDERING FOR ERROR
//   if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

//   // 3. RENDER DATA IF SUCCESSFUL
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>User Directory (API Integration)</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} style={{ margin: "10px 0" }}>
//             <strong>{user.name}</strong> - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// // 21. Implement centralized state management using Redux Toolkit in a React application

// // npm install @reduxjs/toolkit react-redux

// import React from "react";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { Provider, useSelector, useDispatch } from "react-redux";

// // --- 1. CREATE A SLICE (Logic for a specific feature) ---
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => { state.value += 1 },
//     decrement: (state) => { state.value -= 1 },
//   },
// });

// // Export the actions created by the slice
// const { increment, decrement } = counterSlice.actions;

// // --- 2. CONFIGURE THE STORE (The Global Brain) ---
// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// // --- 3. THE COMPONENT ---
// function Counter() {
//   // useSelector gets data from the store
//   const count = useSelector((state) => state.counter.value);
//   // useDispatch sends actions to the store
//   const dispatch = useDispatch();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Redux Toolkit Counter</h2>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// // --- 4. THE MAIN APP (Providing the Store) ---
// function App() {
//   return (
//     // The Provider makes the store available to all components
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// }

// export default App;

// // 22. Optimize application performance using lazy loading and code splitting in React

// import React, { useState, lazy, Suspense } from "react";

// // 1. LAZY LOADING: Import the component using React.lazy
// // This tells React: "Don't download this file until we actually need it."
// const HeavyComponent = lazy(() => import("../HeavyComponent"));

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>Performance Optimization</h1>
//       <p>Initial bundle is small because HeavyComponent isn't included yet.</p>

//       <button onClick={() => setShow(true)}>
//         Load Heavy Component
//       </button>

//       {show && (
//         // 2. SUSPENSE: This is required when using lazy loading.
//         // The 'fallback' is what the user sees while the component is downloading.
//         <Suspense fallback={<h3 style={{ color: "orange" }}>Loading Chunks...</h3>}>
//           <HeavyComponent />
//         </Suspense>
//       )}
//     </div>
//   );
// }

// export default App;
// // HeavyComponent.jsx
// export default function HeavyComponent() {
//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f0f0f0", marginTop: "20px" }}>
//       <h2>I am the Heavy Component!</h2>
//       <p>I was loaded only after you clicked the button.</p>
//     </div>
//   );
// }




// // 23. Mini capstone with CRUD

// import React, { useState, useEffect } from "react";

// function App() {
//   const [products, setProducts] = useState([]); // READ from API
//   const [cart, setCart] = useState([]);         // CRUD on Cart
//   const [loading, setLoading] = useState(true);

//   // 1. READ: Fetching Fake Products from API
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       });
//   }, []);

//   // 2. CREATE: Add Item to Cart
//   const addToCart = (product) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       // 3. UPDATE: If item exists, increase quantity
//       setCart(cart.map((item) => 
//         item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   // 4. DELETE: Remove Item from Cart
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   if (loading) return <div className="text-center mt-20 text-2xl">Loading Amazon Store...</div>;

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* RESPONSIVE NAVBAR */}
//       <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 flex justify-between items-center px-4 md:px-10">
//         <h1 className="text-2xl font-bold text-orange-400">amazon.in</h1>
//         <div className="relative">
//           <span className="font-bold">Cart 🛒</span>
//           <span className="absolute -top-2 -right-3 bg-orange-500 text-xs rounded-full px-1.5">{cart.length}</span>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        
//         {/* PRODUCT GRID (READ) */}
//         <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-4 rounded shadow flex flex-col justify-between">
//               <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
//               <h2 className="font-bold text-sm line-clamp-2">{product.title}</h2>
//               <p className="text-orange-700 font-bold text-xl my-2">${product.price}</p>
//               <button 
//                 onClick={() => addToCart(product)}
//                 className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md font-medium transition">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* SIDEBAR CART (CRUD Display) */}
//         <div className="md:w-1/4 bg-white p-4 rounded shadow h-fit sticky top-20">
//           <h2 className="text-xl font-bold border-b pb-2 mb-4">Your Shopping Basket</h2>
//           {cart.length === 0 ? <p>Your cart is empty.</p> : (
//             cart.map(item => (
//               <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
//                 <div className="text-xs">
//                   <p className="font-bold line-clamp-1">{item.title}</p>
//                   <p>Qty: {item.qty} | ${item.price}</p>
//                 </div>
//                 <button 
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 font-bold text-xs">Remove</button>
//               </div>
//             ))
//           )}
//           <div className="mt-4 font-bold text-lg">
//             Total: ${cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0).toFixed(2)}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;