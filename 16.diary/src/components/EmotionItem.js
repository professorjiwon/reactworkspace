import { getEmotionImg } from "../util/emotion-img"
import './EmotionItem.css'

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
    return (
        <div 
            onClick={onClick}
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}   
        >
            <img src = {getEmotionImg(emotionId)} />
            <div className="emo_name">{emotionName}</div>
        </div>
    )
}
export default EmotionItem