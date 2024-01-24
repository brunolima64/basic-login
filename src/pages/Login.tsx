import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import '../styles/Login.css'
import  landImg  from '../svgs/land-d6e509cd.svg'
import { Context } from "../contexts/Context";

export const Login = () => {
    const navigate = useNavigate();

    const ctxContext = useContext(Context);

    const [emailInput, setEmailInput] = useState('');
    const [passworldInput, setPassworldInput] = useState('')

    const handleLogin = () => {
        if(ctxContext?.email === emailInput && ctxContext?.passworld === passworldInput) {
            navigate('/logado')
        } 
        if(emailInput === '' && passworldInput === '') {
            alert('Usuário não cadastrado!')
        }
    }
    
    return (
    <div>
        <h3 className="title">BasicLogin</h3>
        <div className="geral-login">
            <div>
                <img src={landImg} alt={ landImg} width={500}/>
            </div>
            
            <div className="area-login">
                <h1>Login</h1>

                <div className="input-area">
                <p>e-mail</p>
                <input 
                type="email"
                placeholder="Digite seu email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                />

                <p>senha</p>
                <input 
                type="email"
                placeholder="digite sua senha"
                value={passworldInput}
                onChange={e => setPassworldInput(e.target.value)}
                />
                <button onClick={handleLogin}>Entrar</button>
                </div>

                <div className="area-link">
                    <p>Ainda não tem cadastro?
                        <Link className="link" to='/cadastro'>Cadastrar - se já!</Link>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
    )
}