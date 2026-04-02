import Avt from "./Components/Avt"
import Avatar from "./Components/Avatar1"
function App(){
    let arr=["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6"]

    const ans= arr.map()
    return <div>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
        <li>Task 4</li>
        <li>Task 5</li>
        <li>Task 6</li>
    </ul>
    <Avt name="John Doe" age={30} />
     <h1>Hello World</h1>
    <Avatar />
    </div>
}

export default App;
