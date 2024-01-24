import  authImg  from '../svgs/auth-593b4661.svg';
import '../styles/logado.css';
import { useContext } from 'react';
import { Context } from '../contexts/Context';
import { useNavigate } from 'react-router-dom';

export const Logado = () => {
    const ctxContext = useContext(Context);
    const navigate = useNavigate();

    const handleBackBtn = () => {
        navigate('/')
    }

    return (
    <div>
        <h3 className="title">BasicLogin</h3>
        <div className='logado-container'>
            <div className='logado-area'>
                <h3 className='logado-title'>Bem-vindo (a) {ctxContext?.name}</h3>
                <img className='img-logado' src={authImg} alt={authImg}/>
                <button onClick={handleBackBtn}>Sair</button>
            </div>
        </div>
    </div>
    )
}