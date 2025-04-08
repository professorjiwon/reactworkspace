function ArrowFun() {
    const func1 = function(a, b) {
        return a+b;
    }
    console.log(`func1 : ${func1(3,4)}`);
    // console.log("func1 : " + func1(3,4));

    const func2 = (a, b) => {
        return a+b;
    }

    // func1() 함수를 화살표 함수로 하면
    const func3 = (a, b) => a+b
    console.log(`func3 : ${func3(1,2)}`);

    // 매개변수가 1개일때만 소괄호() 생략가능
    const func4 = a => a+5
    console.log(`func4 : ${func4(7)}`);

    const func5 = function(num) {
        return function(value) {
            return num+value;
        }
    }

    let func5Num = func5(5);
    let result = func5Num(7);
    console.log(`func5Num : ${func5Num}`);
    console.log(`result : ${result}`);

    result = func5(3)(4);
    console.log(`result : ${result}`);

    const func6 = num => value => num+value;
    console.log(`func6 : ${func6(1)(2)}`);
}

export default ArrowFun;