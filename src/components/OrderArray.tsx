import axios from 'axios';
import React, { SetStateAction } from 'react'
import { API_URL } from '../config/api_url';
import { calcFibonacci } from '../functions/calcFibonacci';
import { quickSort } from '../functions/orderArray';
import './Fibonacci.css'

interface IOrderArrayComponent {
    visible: boolean;
    quantity: string;
    setQuantity: React.Dispatch<SetStateAction<string>>;
    setResult: React.Dispatch<SetStateAction<string>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function OrderArray({ visible, quantity, setResult, setVisible, setQuantity }: IOrderArrayComponent) {

    function handleCalc() {
        if (/[a-zA-Z]/gm.test(quantity)) {
            alert("Só numero né brother")
            return;
        }
        const array = quantity.split(" ");
        const arrayResult = quickSort(array);
        setResult(arrayResult.toString().replace(/,/gm, " "));
        setVisible(false);

    };

    async function handleCalcJava() {
        if (/[a-zA-Z]/gm.test(quantity)) {
            alert("Só numero né brother")
            return;
        }
        const array = quantity.split(" ").map(e => parseInt(e))
        const response = await axios.post(`${API_URL}/calc/quick-sort`, {
            quantity: array
        });
        setResult(response.data.toString().replace(/,/gm, " "));
        setVisible(false);
    };

    if (visible) {
        return (
            <div className='whitebox-container'>
                <div className='whitebox'>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 className='white-box-label'>Insira abaixo a sequência de números como no exemplo:</h1>
                        <input
                            className='input'
                            type="text"
                            placeholder='0 5 6 7 8 15 14 17 22 13'
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                        <button onClick={handleCalc} className='calc-button'>Calcular (Javacript)</button>
                        <button onClick={handleCalcJava} className='calc-button'>Calcular (Java)</button>
                        <button className='cancel-button' onClick={() => setVisible(false)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default OrderArray;
