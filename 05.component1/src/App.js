/*
  * 컴포넌트
    - 리액트는 Component 기반의 구조를 가지고 있다.
    - 모든 페이지가 Component 구성되어 있고 하나의 Component는 또다른 여러개의 Component의 조합으로 구성될 수 있다.
    - 마치 블럭을 조립하듯 여러개의 새로운 Component를 이용하여 프로젝트를 만든다
  
  * Component사용시 장점
    - 코드 양을 줄일 수 있다
    - 개발시간을 줄일 수 있다
    - 유지보수 비용이 줄어든다
    
  * 컴포넌트의 구성요소
    1) property(props)
      : 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터. 자식 컴포넌트에서는 수정 할 수 없다.
    2) state
      : 컴포넌트의 상태를 저장하고 수정 가능한 데이터
    3) context
      : 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터

  * 컴포넌트의 종류
    - 함수 컴포넌트 : 현재는 함수 컴포넌트만 사용
    - 클래스 컴포넌트
    
  * 컴포넌트의 규칙
    - 첫글자는 대문자로 시작
    - return구문으로 jsx형식의 마크업을 반환
*/
import './App.css';

const user = {
  firstName : 'Hong',
  lastName : 'GilDong'
};

function Student(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>Start React 2025 Tjoeun</h1>
      <h3>Component 실습</h3>
     
      {isStudent ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다</h4>}

      <Com1></Com1>
      <Com1/>
      <Com1/>
    </div>
  );
}

function Com1() {
  return (
    <>
      <h2>[THIS IS COMPONENT]</h2>
      <p>고용노동부 k-digital 취업캠프</p>
      <ul>
        <li>java</li>
        <li>oracle</li>
        <li>spring boot</li>
        <li>react</li>
      </ul>
    </>
  );
}

export default App;
