import axios from 'axios';
import React, { SetStateAction } from 'react'
import { API_URL } from '../config/api_url';
import { calcFibonacci } from '../functions/calcFibonacci';
import { isPrimeNumber } from '../functions/isPrimeNumber';
import './Fibonacci.css'

interface IPrimeNumberComponent {
    visible: boolean;
    quantity: string;
    setQuantity: React.Dispatch<SetStateAction<string>>;
    setResult: React.Dispatch<SetStateAction<string>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function PrimeNumber({ visible, quantity, setResult, setVisible, setQuantity }: IPrimeNumberComponent) {

    function handleCalc() {
        const result = isPrimeNumber(quantity) ? "É primo" : "Não é primo.";
        setResult(result);
        setVisible(false);
    }

    async function handleCalcJava() {
        const response = await axios.post(`${API_URL}/calc/is-prime`, {
            number: quantity
        })
        console.log(response.data)
        const isPrime = response.data == true ? "É primo" : "Não é primo";
        setResult(isPrime);
        setVisible(false);
    }

    if (visible) {
        return (
            <div className='whitebox-container'>
                <div className='whitebox'>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 className='white-box-label'>Insira o número para conferir se é primo ou não</h1>
                        <input
                            className='input'
                            type="text"
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                        <button onClick={handleCalc} className='calc-button'>Calcular (Javascript)</button>
                        <button onClick={handleCalcJava} className='calc-button'>Calcular (Java)</button>
                        <button className='cancel-button' onClick={() => setVisible(false)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default PrimeNumber;
