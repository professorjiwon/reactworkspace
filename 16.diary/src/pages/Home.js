import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';
/*
시작일
new Date(2025,4,1,0,0,0)

끝나는일
new Date(2025,5,0,23,59,59)
*/
const getMonthlyDate = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();

    return data.filter((item) => beginTime <= item.createDate && endTime >= item.createDate)
}

const Home = (() => {
    const data = useContext(DiaryStateContext)
    const [pivotDate, setPivotDate] = useState(new Date());

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }
    return (
        <div>
            <h4>Home</h4>
            <Header 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild = {<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild = {<Button text={">"} onClick={onIncreaseMonth}/>} 
            />
            <DiaryList />
        </div>
    )
})
export default Home