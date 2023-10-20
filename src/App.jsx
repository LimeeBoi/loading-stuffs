import './App.css';
import LoadingThing from './LoadingThing';
import { useState } from 'react';



function App() {
  const [state, setState] = useState({
    speed: 2,
    delay: 2,
    num: 5
  });

  function handleChange(to, val) {
    switch (to) {
      case 'speed' :
        setState({speed: val}); 
        break;
      case 'delay' :
        setState({delay: val});
        break;
      case 'num' : 
        setState({num: val}); 
        break;
      default :
        console.warn('invalid parameter');
    }
  }
  
  return (
    <div className="App">
      <header className="App-header"/>
      <LoadingThing 
        speed={state.speed}
        delay={state.delay}
        num={state.num}
      />
      
    </div>
  );
}

export default App;
