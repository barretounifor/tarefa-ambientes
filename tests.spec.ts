import { calcFibonacci } from './src/functions/calcFibonacci';
import { isPrimeNumber } from './src/functions/isPrimeNumber';
import { quickSort } from './src/functions/orderArray';
import { CalcMDC } from './src/functions/CalcMdc';
import { sum } from './src/functions/sum';
const result = quickSort([24, 88, 1, 32, 99, 100])
console.log(result)
describe('Teste de algoritmos funcionais', () => {

    describe("Testes fibonacci", () => {
        it("1", () => {
            const result = calcFibonacci(5);

            expect(result).toBe('0  1  1  2  3')
        });
        it("2", () => {
            const result = calcFibonacci(10);

            expect(result).toBe('0  1  1  2  3  5  8  13  21  34')
        });

    })
    describe("Testes MDC", () => {
        it("1", () => {
            const result = CalcMDC("25 24");
            expect(result).toBe(1);
        });
        it("2", () => {
            const result = CalcMDC("12 24");
            expect(result).toBe(12);
        });

    })

    describe("Deve verificar se  o número é primo", () => {
        it("1", () => {
            const result = isPrimeNumber('3')

            expect(result).toBe(true)
        })
        it("2", () => {
            const result = isPrimeNumber('4')

            expect(result).toBe(false)
        })
    })

    describe("Deve ordernar um array", () => {
        it("1", () => {
            const result = quickSort([24, 88, 1, 32, 99, 100])

            expect(result).toMatchObject([1, 24, 32, 88, 99, 100])
        })
        it("2", () => {
            const result = quickSort([100, 25, 88, 113, 26])

            expect(result).toMatchObject([25, 26, 88, 100, 113])
        })
    })

    describe("Soma", () => {
        it("1", () => {
            const result = sum("24 88 1 32 99")

            expect(result).toBe(244)
        })
        it("2", () => {
            const result = sum("100 25 88 113 26")

            expect(result).toBe(352)
        })
    })
})
