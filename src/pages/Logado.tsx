import  authImg  from '../svgs/auth-593b4661.svg';
import '../styles/logado.css';
import { useContext } from 'react';
import { Context } from '../contexts/Context';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export const Logado = () => {
    const ctxContext = useContext(Context);
    const ctxTheme = useContext(ThemeContext);

    const navigate = useNavigate();

    const handleBackBtn = () => {
        navigate('/')
    }

    return (
    <div className={ctxTheme?.themes === 'light' ? 'light' : 'dark'}>
        <h3 className={ctxTheme?.themes === 'light' ? 'title-light' : 'title-dark'}>BasicLogin</h3>
        <div className='logado-container'>
            <div className={`logado-area ${ctxTheme?.themes === 'light' ? 'area-login-light' : 'area-login-dark'}`}>
                <h3 className='logado-title'>Bem-vindo (a) {ctxContext?.name}</h3>
                <img className='img-logado' src={authImg} alt={authImg}/>
                <button onClick={handleBackBtn}>Sair</button>
            </div>
        </div>
    </div>
    )
}