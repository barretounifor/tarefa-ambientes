import { createContext, SetStateAction, useState } from "react";

interface IContext {
    errorMessage: string | undefined;
    setErrorMessage: React.Dispatch<SetStateAction<string | undefined>>;
}

export const Context = createContext<IContext>({} as IContext);

interface IChildren {
    children: React.ReactNode
}

export function ContextProvider({ children }: IChildren) {

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    return (
        <Context.Provider value={{
            errorMessage,
            setErrorMessage
        }}>
            {children}
        </Context.Provider>
    )
}
