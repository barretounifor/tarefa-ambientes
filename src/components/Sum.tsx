import axios from 'axios';
import React, { SetStateAction } from 'react'
import { API_URL } from '../config/api_url';
import { sum } from '../functions/sum';
import './Fibonacci.css'

interface IPrimeNumberComponent {
    visible: boolean;
    quantity: string;
    setQuantity: React.Dispatch<SetStateAction<string>>;
    setResult: React.Dispatch<SetStateAction<string>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function Sum({ visible, quantity, setResult, setVisible, setQuantity }: IPrimeNumberComponent) {

    function handleCalc() {
        const result = sum(quantity)
        setResult(result.toString());
        setVisible(false);
    }

    async function handleCalcJava() {
        const numbersArray = quantity.split(" ").map(numberString => parseFloat(numberString));

        const response = await axios.post(`http://localhost:8080/calc/sum-numbers`, {
            totalNumbers: numbersArray
        })
        setResult(response.data);
        setVisible(false);
    }

    if (visible) {
        return (
            <div className='whitebox-container'>
                <div className='whitebox'>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 className='white-box-label'>Insira um conjunto de números para obter sua soma</h1>
                        <input
                            className='input'
                            type="text"
                            placeholder='Ex: 1 2 3 4 5 6 7 9 55'
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

export default Sum;
