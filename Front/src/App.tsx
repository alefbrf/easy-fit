import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [exemplo, setExemplo] = useState("");

  useEffect(() => {
    axios.get('https://localhost:7183/Exemplo')
      .then(function (response) {
        console.log(response);
        setExemplo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <h2>{exemplo}</h2>
    </>
  )
}

export default App
