import { Dispatch, SetStateAction } from "react";

export function calcFibonacci(quantity: string) {
    const fibonacciStart = [0, 1];

    for (var i = 1; i <= parseInt(quantity); i++) {
        fibonacciStart[i + 1] = fibonacciStart[i] + fibonacciStart[i - 1];
    }

    return fibonacciStart.toString().replace(/,/gm, "  ");
}