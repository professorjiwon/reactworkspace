import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*
  * 동적 UI를 만드는 법(모달창 만들기)
    : 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문 등 UI들

  * 순서
    1. html과 css로 ui디자인하기
    2. UI의 현재 상태를 state에 저장
    3. state에 따라 UI가 어떻게 보일지 조건문등로 작성
*/
function App() {
  const [like, setLike] = useState(0);
  const [title, setTitle] = useState(['얌샘김밥', '초밥', "JIMMY JOHN'S"]);
  const [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

        배열.map(function(v, i){})

        <div className='list'>
          <h4 onClick={()=>{setModal(!modal)}}>{title[0]}</h4>
          <p>04월 09일 <span onClick={()=>{setLike(like+1)}}>🥇</span> {like} </p>
        </div>

        <div className='list'>
          <h4>{title[1]}</h4>
          <p>04월 09일 <span>🥇</span> 0 </p>
        </div>

        <div className='list'>
          <h4>{title[2]}</h4>
          <p>04월 09일 <span>🥇</span> 0 </p>
        </div>

        { modal ? <Modal/> : null }

        <button onClick={() => {
          let copy = [...title];
          copy[0] = '김밥천국';
          setTitle(copy);
        }}>글수정</button>

        
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
