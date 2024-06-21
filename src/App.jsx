import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css'

function App() {
  const inputRef = useRef();
  const [dataFetched, setDataFetched] = useState({});
  async function fetchData() {
    const URL = 'https://jsonplaceholder.typicode.com/users/' + inputRef.current.value;

    let data = await fetch(URL);
    if (data) setDataFetched(await data.json());
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" defaultValue="1" />
      <button type="submit" onClick={fetchData}>Search</button>
      <div className='card'>
        <h1>{dataFetched.name}</h1>
        <p>{dataFetched.email}</p>
      </div>
    </>
  );
}

export default App;
