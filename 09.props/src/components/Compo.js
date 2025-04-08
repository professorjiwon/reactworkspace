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
export default Compo;