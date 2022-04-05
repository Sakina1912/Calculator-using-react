
import React,{useState} from 'react';
import './App.css';
import ButtonList from './component/ButtonList';


function App() {
  const [result,setResult] = useState('')

  return (
    <div className="container">
      <h1>Calculator</h1>
      <span>{result ? result : 0}</span>
      <ButtonList setResult={setResult} result={result}/>
    </div>
  );
}

export default App;


// https://medium.com/@gusya59/building-a-simple-calculator-with-react-react-hooks-and-grid-f6724baed5e
// https://morioh.com/p/2a4e533711d0



// https://dev.to/thenerdydev/10-react-projects-every-beginner-should-try-fk9 