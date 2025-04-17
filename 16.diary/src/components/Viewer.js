
import { getEmotionImg } from "../util/emotion-img";
import { DiaryStateContext } from "../App"
import { useContext } from "react"

const Viewer = ({params}) => {
    const data = useContext(DiaryStateContext);
    console.log(params.id);

    const emotionItem = data.find(
        (item) => item.emotionId == params.id
    );

    return (
        <div className="Viewer">
            <section className="img_section">
                <h3>오늘의 감정</h3>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionItem.emotionId}`} >
                    <img src={getEmotionImg(emotionItem.emotionId)} />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className="content_section">
                <h3>오늘의 일기</h3>
                <div className="content_wrapper">
                    {emotionItem.content}
                </div>
            </section>

        </div>
    )

}
export default Viewer;