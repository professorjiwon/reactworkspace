import { useContext, useEffect, useState } from 'react';
import {Button, Nav,} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Context1 } from '../App';

function Detail(props) {
    /*
    // useContext(받은것)
    let a = useContext(Context1);
    console.log(a);
    console.log(a.stock);
    */

    let {stock, clothes} = useContext(Context1);
    console.log(stock);
    console.log(clothes);

    let {pid} = useParams();

    let findId = props.clothes.find((v) => v.id == pid)

    let[alert, setAlert]= useState(true);
    let[tab, setTab]= useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        return () => {
            clearTimeout(timer);
        }
    },[])

    let [detailFade, setDetailFade] = useState('start');

    useEffect(() => {
        setDetailFade('end')
    },[])

    return(
        <div className={detailFade}>
            {
                alert ? <div>3초이내에 구매시 30%할인</div> : null
            }
            <div className='detail'>
                <img src = {`${process.env.PUBLIC_URL}/img/clothes${findId.id}.png`} width="60%"/> 
                <div className='detail_text'>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
                    <Button variant="outline-info">주문하기</Button>
                </div>
            </div>

            <Nav fill variant="tabs" defaultActiveKey="link-0" className='deNav'>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link-0">패션에 대하여</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link-1">옷의 정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link-2">기타</Nav.Link>
                </Nav.Item>
            </Nav>

            {/* 1. 삼항연산자
            { tab == 0 ? <div>패션은 예술이다</div> : tab == 1 ? <div>퀄리티 높은 재료</div> : <div>내용들</div> }
            */}
            <TabContent tab = {tab} />
        </div>
    )
}

function TabContent({tab}) {
    let [fade, setFade] = useState('');

    let {stock} = useContext(Context1);

    // react 18버전부터 automatic batching기능
    // state함수가 근처에 있으면 합쳐서 한꺼번에 state를 변경
    useEffect(() => {
        setTimeout(() => { setFade('end')}, 100);
        return () => {
            setFade('start ');
        }
    },[tab])

    return (
        <div className={fade}>
            {[<div>{stock}</div>, <div>{stock[1]}</div>, <div>내용들</div>][tab]}
        </div>
    )
}

/*
function TabContent({tab}) {

    // 2. if문으로
    if(tab == 0) {
        return <div>패션은 예술이다</div>
    } else if(tab == 1) {
        return <div>퀄리티 높은 재료</div>
    } else {
        return <div>내용들</div>
    }

    // 3. 배열로
    let tabArr = [<div>패션은 예술이다</div>, <div>퀄리티 높은 재료</div>, <div>내용들</div>];
    return tabArr[tab];


    // 4. 2번을 한줄로
    return [<div>패션은 예술이다</div>, <div>퀄리티 높은 재료</div>, <div>내용들</div>][tab] }
}
*/
export default Detail;