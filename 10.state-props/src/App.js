import { useState } from 'react';
import './App.css';
import Controller from './component/Controller.js';
import Views from './component/View.js'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
        <Views count={count}/> 
      </section>
      <section>
        <Controller count={count} setCount={count}/> 
      </section> 
    </div>
  );
}

export default App;
