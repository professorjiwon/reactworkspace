import emotion1 from '../resources/img/emotion1.png';
import emotion2 from '../resources/img/emotion2.png';
import emotion3 from '../resources/img/emotion3.png';
import emotion4 from '../resources/img/emotion4.png';
import emotion5 from '../resources/img/emotion5.png';
import emotion6 from '../resources/img/emotion6.png';
import emotion7 from '../resources/img/emotion7.png';

export function getEmotionImg(emotionId) {
    switch(emotionId) {
        case 1 :
            return emotion1;
        case 2 :
            return emotion2;
        case 3 :
            return emotion3;
        case 4 :
            return emotion4;
        case 5 :
            return emotion5;
        case 6 :
            return emotion6;
        case 7 :
            return emotion7;
        default :
            return null;
    }
}