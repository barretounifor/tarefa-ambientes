import { Dispatch, SetStateAction } from "react";

export function calcFibonacci(quantity: string | number): string {
    const fibonacciStart = [0, 1];

    quantity = typeof quantity == 'string' ? parseInt(quantity) : quantity;

    for (var i = 1; i <= quantity; i++) {
        fibonacciStart[i + 1] = fibonacciStart[i] + fibonacciStart[i - 1];
    }

    return fibonacciStart.toString().replace(/,/gm, "  ");
}
