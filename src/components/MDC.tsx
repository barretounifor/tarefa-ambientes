import axios from 'axios';
import React, { useContext } from 'react'
import { API_URL } from '../config/api_url';
import { Context } from '../context/context';
import { CalcMDC } from '../functions/CalcMdc';

function MDC({ visible, quantity, setResult, setVisible, setQuantity }: any) {

    const isOnlyNumbers = /^[0-9]/gm
    const { setErrorMessage } = useContext(Context);

    function handleCalc() {
        if (!isOnlyNumbers.test(quantity)) {
            setErrorMessage("São somente aceitos números.")
            return;
        }
        if (!quantity.includes(" ")) {
            setErrorMessage("Insira dois números");
            return;
        }
        setResult(CalcMDC(quantity));
        setVisible(false)
    }

    async function handleCalcJava() {
        if (!isOnlyNumbers.test(quantity)) {
            setErrorMessage("São somente aceitos números.")
            return;
        }
        if (!quantity.includes(" ")) {
            setErrorMessage("Insira dois números");
            return;
        }
        const response = await axios.post(`${API_URL}/calc/mdc`, {
            value: quantity
        })
        setResult(response.data)
        setVisible(false)
    }

    if (visible) {
        return (
            <div className='whitebox-container'>
                <div className='whitebox'>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 className='white-box-label'>Insira os dois números que deseja calcular o mdc</h1>
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

export default MDC
