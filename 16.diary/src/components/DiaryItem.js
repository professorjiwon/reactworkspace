import { getEmotionImg } from "../util/emotion-img";
import Button from "./Button";
import './DiaryItem.css'

const DiaryItem = (() => {
    const emotionId = 1;

    return (
        <div className="DiaryItem">
            <div className="img_section">
                <img src={getEmotionImg(emotionId)} />
            </div>
            <div className="info_section">
                <div>{new Date().toLocaleDateString()}</div>
                <div>일기의 내용</div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} />
            </div>
        </div>
    )
})
export default DiaryItem;