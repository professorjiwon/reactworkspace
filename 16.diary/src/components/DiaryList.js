import Button from "./Button"
import './DiaryList.css'
import DiaryItem from './DiaryItem';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const DiaryList  =({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState('latest')

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    /*
        * Sort : 원본파일 바뀌어서 들어옴
        * toSorted(a, b) : 원본은 그대로 유지하고 sort된 data만 반환(ES2023 새로 생김)
          a-b 를 한 결과
          음수면 자리바꿈 안함(0포함)
          양수면 자리바꿈
    */
    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if(sortType == "oldest") {
                return a.createDate - b.createDate;
            } else {
                return b.createDate - a.createDate;
            }
        })
    } 

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"green"} onClick={()=> nav("/new")}/>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem {...item} key={item.id}/>)}
            </div>
        </div>
    )
}
export default DiaryList
