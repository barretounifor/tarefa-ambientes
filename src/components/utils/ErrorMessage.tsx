import { useContext } from "react";
import { Context } from "../../context/context";
import './ErrorMessage.css'

export function ErrorMessage() {
    const { errorMessage, setErrorMessage } = useContext(Context);

    if (errorMessage) {
        setTimeout(() => {
            setErrorMessage(undefined)
        }, 2000)
        return (
            <div className="error-message-container">
                <div className="error-message-box">
                    <h1>Erro</h1>
                    <p>{errorMessage}</p>
                </div>
            </div>
        )
    }
    return null;
}
