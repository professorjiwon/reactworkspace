import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
    let {pindex} = useParams();
    let id = props.clothes[pindex].id;

    let findId = props.clothes.find(function(v) {
        return v.id == id;
    })

    let[alert, setAlert]= useState(true);

    useEffect(() => {
        setTimeout(() => { setAlert(false) }, 3000)
    })

    return(
        <div className='detail'>
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