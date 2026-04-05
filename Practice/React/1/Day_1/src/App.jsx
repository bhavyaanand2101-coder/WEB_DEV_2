//  import Raect , { useState } from 'react'
// import Child from './Components/Child.jsx'

// function Parent(){
//   const [message, setMessage] = useState("Hello from Parent");
//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Child text={message} setMessage={setMessage} />
//     </div>
//   );
// }
// export default Parent;



// import Welcome from './Welcome'; // Assuming the file is named Welcome.js

// function App() {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// }

// export default App;


// import MyStudents from './Student';

// function App() {
//   return (
//     <div>
//       <MyStudents />
//     </div>
//   );
// }

// // You MUST export App so that main.jsx (or index.js) can use it
// export default App;

import {add,sub} from './utils';

function App() {
  return (
    <div>
      <h1>Sum: {add(5, 3)}</h1>
      <h1>Difference: {sub(5, 3)}</h1>
    </div>
  );
}

export default App;


