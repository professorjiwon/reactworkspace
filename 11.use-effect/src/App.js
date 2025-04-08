/*
  * useEffect()
    : 컴포넌트의 life사이클을 관리하는 리액트 Hook
      컴포넌트가 생성될 때(mount) -> update 될 때 -> 삭제될 때(unmount)
      이런 lifecycle에서 렌더링 될 때마다 특정작업(side Effect)을 실행함.
       - side effect : 컴포넌트가 렌더링 된 이후에 비동기로 처리되어야 하는 부수적인 효과들
  * 사용
    타이머, mount된 후 바로 서버에서 데이터를 백그라운드로 가져올 때 ...

  * 사용법
    useEffect(()=>{실행할 내용},[배열]);
*/
import { useState, useEffect } from 'react';
import './App.css';
import Controller from './component/Controller.js';
import Views from './component/View.js'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const onClickBtn = (value) => {
    setCount(count + value);
  };

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  /*
  // 생성 되었을 때(mount) => 빈배열
  useEffect(() => {
    console.log('mount');
  },[]);
  */

  // 모든 update될 때마다 호출 => 배열 없음
  useEffect(() => {
    console.log('update');
  });

  // count의 값이 update될 때만 실행
  useEffect(() => {
    console.log('count update');
  },[count]);

  // count와 text의 값이 update될 때만 실행
  useEffect(() => {
    console.log(`count : ${count}, text : ${text}`);
  },[count, text]);

  // unmount 될 때 => retrun 사용
  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('unMount');
    }
  },[])

  return (
    <div className="App">
      <h1>Counter</h1>
      <input value={text} onChange={onChangeInput}/>
      <section>
        <Views count={count}/> 
      </section>
      <section>
        <Controller onClickBtn={onClickBtn}/> 
      </section> 
    </div>
  );
}

export default App;