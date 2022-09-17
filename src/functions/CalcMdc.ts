export function CalcMDC(value: string) {
    const [firstNumber, secondNumber] = value.split(" ").map(e => parseFloat(e));

    var bigger = firstNumber > secondNumber ? firstNumber : secondNumber;
    var smallest = bigger == firstNumber ? secondNumber : firstNumber;

    var mdc = 0;

    for (var i = 0; i < bigger; i++) {
        if (bigger % i == 0 && smallest % i == 0) {
            mdc = i;
        }
    }
    return mdc;
}
