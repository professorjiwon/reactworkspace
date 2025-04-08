function Assign() {
    /*
    - (구조)분해 할당
      > 배열 분해 할당
      > 객체 분해 할당
    */

    // 1. 배열 분해 할당
    // ES5
    const points = [20, 30, 40];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];
    console.log(`x1=${x1}, y1=${y1}, z1=${z1}`);

    // ES6
    const [x2, y2, z2] = points;
    console.log(`x2=${x2}, y2=${y2}, z2=${z2}`);

    // 두번째 값 무시
    const [x3, , z3] = points;
    console.log(`x3=${x3}, z3=${z3}`);

    // 첫번째 값만 넣기
    const [x4] = points;
    console.log(`x4=${x4}`);

    // 배열보다 더 많은 변수가 있을 때
    const [x5, , , n5] = points;
    console.log(`x5=${x5}, n5=${n5}`);

    // 객체 분해 할당
    const car = {
        model : 'sm7',
        color : 'black',
        year : 2025
    }

    // ES5 객체 분해 할당
    const model1 = car.model;
    const color1 = car.color;
    const year1 = car.year;

    console.log(`model = ${model1}, color = ${color1}, year=${year1}`);

    // ES6 객체 분해 할당
    const {model, color, year} = car;
    console.log(`model = ${model}, color = ${color}, year=${year}`);

    const {model: m2, color: c2, year: ye2} = car;
    console.log(`model = ${m2}, color = ${c2}, year=${ye2}`);

    // 객체를 매개변수로 넘겨주기
    const func1 = (car) => {
        console.log(`func1 : model = ${car.model}, color = ${car.color}`);
    }
    func1(car);

    // 객체를 분해할당하여 넘겨주기
    const func2 = ({model, year}) => {
        console.log(`func2 : model = ${model}, year = ${year}`);
    }
    func2(car);
}

export default Assign;