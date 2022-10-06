import axios from "axios";
import { useContext, useState } from "react"
import { Context } from "../context/context";
import NumberInputBox from "./utils/NumberInputBox";

export default function Count({ visible, quantity, setResult, setVisible, setQuantity }: any) {
    const { errorMessage, setErrorMessage } = useContext(Context);

    const [totalNumbers, setTotalNumbers] = useState<any[]>([])
    function handleSetNumbersQuantity(lenght: string | number) {
        lenght = parseInt(lenght as string);
        const array = []
        for (var i = 0; i < lenght; i++) {
            array.push([])
        }
        setTotalNumbers(array);
    }

    function handleCalc() {
        let support = 0
        totalNumbers.map(e => {
            if (typeof e != "number") {
                setErrorMessage("Preencha todos os campos.")
            }
        })
        totalNumbers.map(number => {
            if (parseInt(number) == number) {
                support++
            }
            setVisible(false);
            setResult(support + " números inteiro(s).")
        })
    }

    async function handleCalcJava() {
        totalNumbers.map(e => {
            if (typeof e != "number") {
                setErrorMessage("Preencha todos os campos.")
            }
        })
        const parsedNumbers = totalNumbers.map(e => parseFloat(e));
        setTotalNumbers(parsedNumbers);
        const response = await axios.post(`http://localhost:8080/calc/count`, {
            totalNumbers
        });
        const countApiResult = response.data;
        setResult(countApiResult + " números inteiro(s).")
        setVisible(false);
    }

    if (visible) {
        return (
            <div className='whitebox-container-numbers-input'>
                <div className='whitebox'>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 className='white-box-label'>Insira o valor N</h1>
                        <input
                            className='input'
                            type="text"
                            placeholder='Ex: 5'
                            onChange={e => handleSetNumbersQuantity(e.target.value)}
                        />
                        <div className="number-input-container">
                            {totalNumbers.map((e, index) => (
                                <NumberInputBox totalNumbers={totalNumbers} setTotalNumbers={setTotalNumbers} index={index} />
                            ))}
                        </div>
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
