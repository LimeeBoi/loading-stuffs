import './App.css';
import LoadingThing from './LoadingThing';
import Form from './Form'
import { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(0);
  const [delay, setDelay] = useState(0);
  const [number, setNumber] = useState(0);

  function handleChange(inputId, val) {
    switch (inputId) {
      case 'speed' :
        setSpeed(val);
        break;
      case 'delay' :
        setDelay(val);
        break;
      case 'number' : 
        setNumber(val);
        break;
      default :
        console.warn('invalid parameter');
    }
  }

  return (
    <div className="App">
      <header className="App-header"/>
      <LoadingThing 
        speed={speed}
        delay={delay}
        number={number}
      />
      <Form
        labels={['Speed', 'Delay', 'Number']}
        inputIds={['speed', 'delay', 'number']}
        handler={handleChange}
      />
    </div>
  );
}

export default App;
