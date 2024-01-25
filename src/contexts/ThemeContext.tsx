import { ReactNode, createContext, useState } from "react";


export type ContextType ={
    themes: string;
    setThemes: (t: string) => void;
}


export const ThemeContext = createContext<ContextType | null>(null);

type Props = {
    children: ReactNode;
}
export const ThemeContextProvider = ({children}: Props) => {
    const [themes, setThemes] = useState('')

    return (
        <ThemeContext.Provider value={ { themes, setThemes } }>
            {children}
        </ThemeContext.Provider>
    )
}