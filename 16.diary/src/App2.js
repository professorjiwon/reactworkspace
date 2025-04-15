import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { useReducer, useRef, createContext } from 'react';

const mockData = [
  {
    id : 1,
    createDate : new Date().getTime(),
    emotionId : 1,
    content : "1번 일기 내용"
  },
  {
    id : 2,
    createDate : new Date().getTime(),
    emotionId : 2,
    content : "2번 일기 내용"
  }
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE" :
      return [action.data, ...state];
    case "UPDATE" :
      return state.map((item) => 
        item.id == action.data.id ? action.data : item
      )
    case "DELETE" :
      return state.filter((item) => item.id != action.id)
  }
}

function App() {
  /*
    useReducer() : 상태관리, 상태 업데이트 hook
  */
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data : {
        id : idRef.current++,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 일기 update
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data : {
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 일기 delete
  const onDelete = id => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  /*
    * createContext() : 전역상태를 공유하여 관리 
  */
  const DiaryStateContext = createContext();    // 상태 저장용
  const DiaryDispathContext = createContext();   // dispath(액션처리용)

  return (
    <div className="App">
      <button onClick={() => {
        onCreate(new Date().getTime(), 3, "Hello")
      }}>일기 추가</button>

      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기 입니다")
      }}>일기 수정</button>

      <button onClick={() => {
        onDelete(1)
      }}>일기 삭제</button>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispathContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/*" element={<div>잘못된 페이지 입니다</div>} />
          </Routes>
        </DiaryDispathContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
