const Controller = ({onClickBtn}) => {
    return (
        <div>
            <button onClick={() => {onClickBtn(-1)}}>-1</button>&emsp;
            <button onClick={() => {onClickBtn(-10)}}>-10</button>&emsp;
            <button onClick={() => {onClickBtn(-100)}}>-100</button>&emsp;
            <button onClick={() => {onClickBtn(100)}}>+100</button>&emsp;
            <button onClick={() => {onClickBtn(10)}}>+10</button>&emsp;
            <button onClick={() => {onClickBtn(1)}}>+1</button>
        </div>
    )
}

export default Controller;