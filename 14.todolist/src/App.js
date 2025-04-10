import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

const tmpData = [
  {
    id : 0,
    isDone : false,
    content : 'React 공부하기',
    date : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : '꿀맛같은 휴식',
    date : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : '친구와 게임하기',
    date : new Date().getTime()
  },
]

function App() {
  const [todos, setTodos] = useState(tmpData);

  /*
  * useRef()
    : 변경되는 값 저장
      DOM요소에 직접 접근가능
      재랜더링 되지 않음
  */ 
  // 새로운 todolist 추가시 id의 번호 부여 변수
  const idRef = useRef(3);

  // 새로운 todolist 추가하는 함수
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    }
    setTodos([newItem, ...todos])
  }

  // 삭제시 isDone의 체크박스를 true로 바꾸기
  const onUpdate = (targetId) => {
    console.log(targetId);
    setTodos (todos.map((todo) => {
      if(todo.id == targetId) {
        return {
          ...todo,
          isDone : !todo.isDone
        }
      }
      return todo;
    }))
    // 삼항 연사자로 변경하면
    // setTodos (todos.map((todo) => todo.id == targetId ? {...todo, isDone : !todo.isDone} : todo ))
  }

  // 삭제하기
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id != targetId))
  }


  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
