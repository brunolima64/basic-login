import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"

import '../styles/Login.css'

import  landImg  from '../svgs/signup-303cbb9e.svg'
import { Context } from "../contexts/Context";


export const Register = () => {
    const navigate = useNavigate();
    const ctxContext = useContext(Context);

    const handleRegister = () => {
        if(ctxContext?.name !== '' && ctxContext?.email !== '' && ctxContext?.passworld !== '') {
            navigate('/');
        }
    }

    return (
    <div>
            <h3 className="title">BasicLogin</h3>
        <div className="geral-login">
            <div className="area-login">
                <h1>Cadastrar-se</h1>
                <div className="input-area">
                
                <p>nome</p>
                <input 
                type="name"
                placeholder="Digite seu nome"
                value={ctxContext?.name}
                onChange={e => ctxContext?.setName(e.target.value)}
                />

                <p>e-mail</p>
                <input 
                type="email"
                placeholder="Digite seu email"
                value={ctxContext?.email}
                onChange={e => ctxContext?.setEmail(e.target.value)}
                />

                <p>senha</p>
                <input 
                type="email"
                placeholder="digite sua senha"
                value={ctxContext?.passworld}
                onChange={e => ctxContext?.setPassworld(e.target.value)}
                />

                <button onClick={handleRegister}>Cadastre-se</button>
                </div>

                <div className="area-link">
                    <p>Já cadastrado?
                        <Link className="link" to='/'>Faça o login!</Link>
                    </p>
                </div>
            </div>

                <div>
                    <img src={landImg} alt={ landImg} width={500}/>
                </div>

        </div>
    </div>
    )
}