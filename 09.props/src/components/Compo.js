import Button from './Button';

/*  1. 문자 혹은 변수로 값 받기 
const Compo = (props) => {
    return (
        <>
            <h3>props 내용 출력</h3>
            <p>이름 : {props.user}</p>
            <p>주소 : {props.addr}</p>
        </>
    )
}
*/

/* 2. 객체로 넘겨준값 받기
const Compo = (props) => {
    return (
        <>
            <h3>props 내용 출력</h3>
            <p>이름 : {props.user.name}</p>
            <p>주소 : {props.user.addr}</p>
            <p>특히 좋아하는 것 : {props.user.likeList[2]}</p>
        </>
    )
}
*/

/*
// 3. 객체를 스프레드 연산자로 풀어서 넘겨준 값 받기
const Compo = ({name, addr, likeList}) => {
    return (
        <>
            <h3>props 내용 출력</h3>
            <p>이름 : {name}</p>
            <p>주소 : {addr}</p>
            <p>특히 좋아하는 것 : {likeList[2]}</p>
        </>
    )
    
}
*/

const Compo = () => {
    const btnProps = {
        text : '1번버튼',
        color : 'green',
        a : 1,
        b:2,
        c:3
    }

    function btnClick(e) {
        alert('버튼누르지마');
        console.log(e);
        console.log(e.target.name);
    }

    return (
        <>
            <h3>버튼 만들기</h3>
            <button onClick={btnClick} name='A버튼'>A버튼 이벤트</button><br/><br/>
            <button onClick={() => {alert('왜 불러')}} name='B버튼'>B버튼 이벤트</button><br/><br/>
            {/* <Button />   1. */}
            <Button btnValue={btnProps}/>
            <Button {...btnProps} />
        </>
    )
}
export default Compo;