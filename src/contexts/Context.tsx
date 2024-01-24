import { ReactNode, createContext, useState } from "react";


export type ContextType ={
    name: string;
    email: string;
    passworld: string;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPassworld: (senha: string) => void;
}

export const Context = createContext<ContextType | null>(null);

type Props = {
    children: ReactNode;
}
export const ContextProvider = ({children}: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passworld, setPassworld] = useState('');

    return (
        <Context.Provider value={ { name, email, passworld, setName, setEmail, setPassworld } }>
            {children}
        </Context.Provider>
    )
}