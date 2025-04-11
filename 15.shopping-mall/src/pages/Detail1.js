import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function Detail(props) {
    let {pid} = useParams();
    console.log(pid);

    let findId = props.clothes.find((v) => v.id == pid)

    let[alert, setAlert]= useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        return () => {
            clearTimeout(timer);
        }
    },[])
/*
    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {
            alert('숫자만 입력하세요')
        }
    },[num])
*/
    return(
        <div className='detail'>
            {/* <input onChange={(e) => {setNum(e.target.value)}} /> */}
            {
                alert ? <div>3초이내에 구매시 30%할인</div> : null
            }
            <div className='detail_img'>
                <img src = {`${process.env.PUBLIC_URL}/img/clothes${findId.id}.png`} width="60%"/> 
            </div>
            <div className='detail_text'>
                <h4>{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <Button variant="outline-info">주문하기</Button>
            </div>
        </div>
    )
}

export default Detail;