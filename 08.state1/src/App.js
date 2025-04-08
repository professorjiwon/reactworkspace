import './App.css';
import Counter from './component/Counter';
import LightOnOff from './component/Light-on-off';
import MemberEnroll from './component/Member-enroll';

function App() {
  return (
    <div className="App">
      <MemberEnroll/>
      <hr/>
      <Counter/>
      <br/>
      <hr/>
      <br/>
      <LightOnOff/>
    </div>
  );
}

export default App;
