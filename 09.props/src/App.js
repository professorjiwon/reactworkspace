/*
  * props
    : 부모가 자식컴포넌트에게 전달하는 데이터
      자식컴포넌트는 값 변경 불가
      자식 -> 부모 : 불가
      형제끼리 : 불가
*/

import './App.css';
import Compo from './components/Compo';

function App() {
  const addr = "서초구 강남대로";
  
  return (
    <div className="App">
      <Compo user={"홍길동"} addr={addr}/>
    </div>
  );
}

export default App;
