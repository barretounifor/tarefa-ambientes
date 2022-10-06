export function sum(numbers: string) {
    const numbersArray = numbers.split(" ").map(numberString => parseFloat(numberString));

    const sum = numbersArray.reduce((prev, curr) => prev + curr);

    return sum;
}
