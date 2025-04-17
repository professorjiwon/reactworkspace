import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
	const [hello, setHello] = useState('');
	const [menuList, setMenuList] = useState([]);
	
	useEffect(() => {
		axios.get('/api/test')
			 .then(result => (
				console.log(result),
				console.log(result.data),
				setHello(result.data)
			 ))
	},[])
	
  return (
    <div className="App">
      <h2>서버와 통신하기</h2>
      <p>서버에서 들어온 값 : {hello}</p>
      <button onClick={() => {
		  axios.get('/api/menuall')
		  		.then(result => {
					  console.log(result);
					  setMenuList(result.data);
				  })
				 .catch(() => {
					 console.log("실패");
				 })
	  }}>menu 데이터 가져오기</button>
	  
	  <button onClick={() => {
		  axios.post('/api/addmenu', 
		  	{restaurant:'맛나분식', name:'쫄면', price:10000, type:'KR', taste:'HOT'})
		  	   .then(result => {
					 console.log(result);
				 })
				.catch(() => {
					console.log("실패");
				})
	  }}>menu 데이터 입력</button>
    </div>
  );
}

export default App;