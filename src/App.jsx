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
      <h1 className="title-thingy">
	      HAPPY MOTHER'S DAY CARINA!
      </h1>
        <p className="happy">
          Dear Mom, <br/>
          Happy Mother's Day! <br/>
          I hope you've had the best day ever! <br/>
          I love you very much. :D <br/>
          Love, Ethan
        </p>
      <ul style={{color: 'whitesmoke', fontSize: '2.5vmin', marginLeft: '3vw'}}>
        <li>Also here's somethin you can play with:</li>
        <li>Speed: self-explanitory</li>
        <li>Delay: the amount of time that it takes for a cube to move into the place of another cube in seconds</li>
        <li>Number: Number of cubes in the thing</li>
      </ul>
      <div className="wrapper">
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
    </div>
  );
}

export default App;
