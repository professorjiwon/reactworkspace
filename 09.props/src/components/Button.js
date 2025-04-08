import './Button.css';
/* 1.
const Button = () => {
    return (
        <>
            <button style={{color : 'red'}} className='btn'>버튼</button>
        </>
    )
}
*/

/*
// 2. 
const Button = (props) => {
    return (
        <>
            <p>{props.btnValue.text}입니다</p>
            <button style={{color : props.btnValue.color}} className='btn'>버튼</button> 
        </>
    )
}
*/

// 3.  2번도 받을 수 있음(객체분해할당임)
const Button = ({color, text, b}) => {
    return (
        <>
            <p>{text}입니다</p>
            <button style={{color : color}} className='btn'>버튼</button>
            <p>{b}번 입니다</p>
        </>
    )
}

export default Button;