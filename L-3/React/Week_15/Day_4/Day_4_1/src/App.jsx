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