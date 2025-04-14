import "./Button.css";

/*
    text : 버튼의 글씨
    type : 일반버튼, 초록색, 빨간색 버튼인지
    onClick : 버튼이 클릭되었을 때(props로 받음)
*/
const Button = ({text, type, onClick}) => {
    return <button className={`button button_${type}`} onClick={onClick}>{text}</button>
}

export default Button