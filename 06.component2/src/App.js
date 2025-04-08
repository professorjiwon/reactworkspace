import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Compo1 from './component/Compo1';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <section>
        <h1>본문</h1>
        <Compo1/>
        <Compo1/>
        <Compo1/>
      </section>
      <MyFooter/>
    </div>
  );
}

export default App;
