import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Button from './components/Button';
import { getEmotionImg } from './util/emotion-img'

function App() {
  return (
    <div className="App">
      <div>
        <img src={getEmotionImg(1)} />
        <img src={getEmotionImg(2)} />
        <img src={getEmotionImg(3)} />
        <img src={getEmotionImg(4)} />
        <img src={getEmotionImg(5)} />
        <img src={getEmotionImg(6)} />
        <img src={getEmotionImg(7)} />
      </div>
      <Button 
        text={"일반버튼"}
        onClick={() => console.log("일반버튼 클릭")}
      />
      <Button 
        text={"빨간버튼"}
        type={"red"}
        onClick={() => console.log("빨간버튼 클릭")}
      />
      <Button 
        text={"그린버튼"}
        type={"green"}
        onClick={() => console.log("그린버튼 클릭")}
      />
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<div>잘못된 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
