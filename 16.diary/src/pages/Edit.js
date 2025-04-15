import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import Editor from "../components/Editor"
import Header from "../components/Header"
import { useContext, useEffect, useState } from "react"
import { DiaryDispathContext, DiaryStateContext } from "../App"

const Edit = (() => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispathContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    const onClickDelete = () => {
        if(window.confirm("일기를 정말 삭제하시겠습니까?")) {
            onDelete(params.id);
            nav("/", { replace : true})
        }
    }

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정하시겠습니까?")) {
            onUpdate(
                params.id,
                input.createDate.getTime(),
                input.emotionId,
                input.content
            );
            nav("/", { replace : true});
        }
    }

    useEffect(() => {
        const CurrentDiaryItem = data.find((item) => item.id == params.id)
        if(!CurrentDiaryItem) {
            window.alert("존재하지 않는 일기 입니다.");
            nav("/", { replace : true})
        }
        setCurDiaryItem(CurrentDiaryItem);
    },[params.id, data])

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button text={"뒤로"} onClick={() => nav(-1)} />
                }
                rightChild={
                    <Button text={"삭제하기"} type={"red"}
                        onClick={onClickDelete}
                    />
                }
            />
            <Editor initData = {curDiaryItem} onSubmit={onSubmit} />
        </div>
    )
})
export default Edit