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
