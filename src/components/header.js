import React from 'react'
import Logout from '../images/logout.png'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <button className="nav">Login</button>
                <button className="nav">Usuários</button>
                <a href="logout" className="logout">
                    <img src={Logout} />
                </a>      
            </nav>
        </div>
    )
}

export default Header;