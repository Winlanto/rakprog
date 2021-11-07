import './App.css';
import Fun from './components/fun';
import Greeting from './components/Greeting';
import {useState} from "react"

function App() {

const [magicNumber, setMagicNumber] = useState(0)
const [show, setShow] = useState(true)

  return (  
    <div className="App">
      {show && <h1>{magicNumber}</h1>}
      <Fun 
      magicNumber={magicNumber}
      setMagicNumber={setMagicNumber}
      show={show}
      setShow={setShow} 
      />
      <Fun 
      magicNumber={magicNumber}
      setMagicNumber={setMagicNumber}
      amount={7}
      show={show}
      setShow={setShow}
      />
      <Fun 
      magicNumber={magicNumber} 
      setMagicNumber={setMagicNumber} 
      amount={21}
      show={show}
      setShow={setShow}
      />
      <Greeting name="Alek" age="21" />
    </div>
  );
}

export default App;
