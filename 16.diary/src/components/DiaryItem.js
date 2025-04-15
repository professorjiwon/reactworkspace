import { useNavigate } from "react-router-dom";
import { getEmotionImg } from "../util/emotion-img";
import Button from "./Button";
import './DiaryItem.css'

const DiaryItem = ({id, emotionId, createDate, content}) => {
    const nav = useNavigate();
    return (
        <div className="DiaryItem">
            <div className="img_section">
                <img src={getEmotionImg(emotionId)} />
            </div>
            <div className="info_section">
                <div>{new Date(createDate).toLocaleDateString()}</div>
                <div>{content}</div>
            </div>
            <div className="button_section">
                <Button 
                text={"수정하기"}
                onClick={() => nav(`/edit/${id}`)}
                />
            </div>
        </div>
    )
}
export default DiaryItem;