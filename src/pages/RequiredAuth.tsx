import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../contexts/Context";
// navigate renderiza um componente de fato;

type Props = { 
    children: ReactNode
}
export const RequiredAuth = ({children}: Props) => {
    const ctxContext = useContext(Context);

    //const isAuth = false; // false ele vai para login, true ele vai para o sobre.
 
    if(ctxContext?.email && ctxContext?.passworld) {
        return children; // é onde vai a rota englobada.
    } else {
        return <Navigate to="/" /> // para onde vai quando o usuario nao estiver logado.                              //parece um link mais mais o navigate vai mesmo mandar para algun lugar.
    }
}