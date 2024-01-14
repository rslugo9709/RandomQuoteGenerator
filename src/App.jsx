import { useState } from 'react'

import './App.css'
import Container from './components/container/container'
import data from "./assets/quotes.json";



function App() {
  console.log(data);
  let min = 0;
  let max = 16;
  let randomInteger = 0;
  const [quote, newQuote] = useState(data[0]);
  const [backC, newBackC] = useState("rgb(100,46,173,255)");
  const generate = () =>{
      randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
      //console.log(randomInteger);
      //console.log("Se genera la cita");
      newQuote(data[randomInteger]);
      //console.log(quote)
  }
  
  const bgc = () => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    newBackC(`rgb(${red}, ${green}, ${blue})`);
    //console.log("Se ejecuta el cambio de color");
    //console.log(backC);
};
  

  return (
    <div className="bg" style={{backgroundColor: backC, transition: "all 1s"} }>
      
      <Container quote={quote} generate={generate} cambiarC= {bgc} backC = {backC}></Container>
    </div>
  )
}

export default App
