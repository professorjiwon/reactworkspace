function CallbackFun() {
    // 콜백 함수 : 매개변수에 전달하는 함수

    // forEach() :  배열을 콜백함수를 이용하여 반복 접근하기
    const numbers = [35, 67, 190, 83, 90];
    numbers.forEach((v, i) => console.log(`${i}번째 요소 : ${v}`))
    /*
    numbers.forEach(function(v, i) {
        console.log(`${i}번째 요소 : ${v}`);
    }
    */

    // map() : 콜백함수에서 리턴한 값들을 새로운 배열로 만드는 함수
    let arrMap = numbers.map((value, index) => value * index )
    /*
    let arrMap = numbers.map(function(value, index) {
        return value * index;
    })
    */
    console.log(arrMap);
    // arrMap.forEach(console.log);

    //filter() : 콜백함수의 리턴값이 true인 것들로만 새로운 배열을 만드는 함수
    let num = [0,1,2,3,4,5]

    let oddNum = num.filter( value => value % 2 == 1 )

    /*
    let oddNum = num.filter(function(value) {
        return value % 2 == 1
    })
    */
    console.log(`홀수 배열 : ${oddNum}`);
}

export default CallbackFun;