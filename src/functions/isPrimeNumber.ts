export function isPrimeNumber(number: string) {
    const parsedNumber = parseInt(number);
    var divisionsCounter = 0;

    for (var i = 1; i <= parsedNumber; i++) {
        if (parsedNumber % i == 0) {
            divisionsCounter++
        }
    }

    if (divisionsCounter == 2) {
        return true;
    }
    return false;

}
