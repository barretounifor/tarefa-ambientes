import { useContext, useState } from 'react'
import { Context } from '../../context/context';
import './NumberInputBox.css'

export default function NumberInputBox({ totalNumbers, setTotalNumbers, index }: any) {

    const [number, setInputNumber] = useState("");
    const { errorMessage, setErrorMessage } = useContext(Context);
    const [isEnabled, setIsEnabled] = useState(true);
    function handleConfirm() {
        const newNumber = [];
        newNumber.push(number);
        const numberExists = totalNumbers.findIndex(e => e == number);
        if (numberExists != -1) {
            console.log(numberExists, totalNumbers)
            setErrorMessage("O número já consta nos dados colocados.")
            return;
        }
        const subsTituteArray = totalNumbers;
        subsTituteArray[index] = number;
        setTotalNumbers(subsTituteArray);
        setIsEnabled(false)
    }
    const enabledStyle = isEnabled ? {} : { backgroundColor: "gray" }
    return (
        <div className="number-input-box">
            <input disabled={!isEnabled} style={enabledStyle} type="text" onChange={e => {
                if (isEnabled) {
                    setInputNumber(parseFloat(e.target.value))
                }
            }} />
            <button onClick={() => handleConfirm()}>Confirmar</button>
        </div>
    )
}
