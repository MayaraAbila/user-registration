import './login.css';
import Header from './header';

function Login () {
    return (
        <div className="app">
            <div className="header">
                <Header />
            </div>
            <div className="form">
                <form>
                    <input className="data" type="email" placeholder="Digite seu email" required/>
                    <input className="data" type="password" placeholder="Digite sua senha" required/>
                    <input id="input" type="submit" value="Acessar"/>
                </form>
            </div>
        </div>
    );
}

export default Login;