import React, { SetStateAction } from 'react'
import { calcFibonacci } from '../functions/calcFibonacci';
import axios from 'axios';
import './Fibonacci.css';

interface IFibonacciComponent {
    visible: boolean;
    quantity: string;
    setQuantity: React.Dispatch<SetStateAction<string>>;
    setResult: React.Dispatch<SetStateAction<string>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function Fibonacci({ visible, quantity, setResult, setVisible, setQuantity }: IFibonacciComponent) {

    function handleCalcJS() {
        setResult(calcFibonacci(quantity));
        setVisible(false)
    }

    async function handleCalcJava() {
        const response = await axios.post(`http://localhost:8080/calc/fibonacci`, {
            quantity
        })
        setResult(response.data.toString().replace(/,/gm, "  "))
        setVisible(false)
    }

    if (visible) {
        return (
            <div className='whitebox-container'>
                <div className='whitebox'>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 className='white-box-label'>Insira o até que número da sequência você deseja</h1>
                        <input
                            className='input'
                            type="text"
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                        <button onClick={handleCalcJS} className='calc-button js'>Calcular (Javascript)</button>
                        <button onClick={handleCalcJava} className='calc-button java'>Calcular (Java)</button>
                        <button className='cancel-button' onClick={() => setVisible(false)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default Fibonacci;
