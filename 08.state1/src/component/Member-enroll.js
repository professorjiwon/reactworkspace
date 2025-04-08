import {useState} from 'react';

const MemberEnroll = () => {

    const [input, setInput] = useState({
        name : "",
        location : "",
        mylife : ""
    })
   
    const onChange = (e) => {
        console.log(e.target.name + ' : ' + e.target.value)
        setInput({
            ...input,   // input 객체 얕은복사. 기존상태 그대로 유지
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
            <h1>회원가입</h1>
            이름 : <input name='name' onChange={onChange} value={input.name}/><br/><br/>
            생년월일 : <input type="date" name="birth"/><br/><br/>
            <select name="location" onChange={onChange}>
                <option value="">선택</option>
                <option value="seoul">서울특별시</option>
                <option value="incheon">인천광역시</option>
                <option value="busan">부산광역시</option>
            </select><br/><br/>
            <textarea name="mylife" onChange={onChange}></textarea>
        </>
    )
}

export default MemberEnroll;