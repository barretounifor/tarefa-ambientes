import { calcFibonacci } from './src/functions/calcFibonacci';
import { isPrimeNumber } from './src/functions/isPrimeNumber';

describe('Teste de algoritmos funcionais', () => {
    it("Deve dar o resultado esperado em fibonacci", () => {
        const result = calcFibonacci(5);

        expect(result).toBe('0  1  1  2  3  5  8')
    });

    it("Deve verificar se  o número é primo", () => {
        const result = isPrimeNumber('3')

        expect(result).toBe(true)
    })
})
