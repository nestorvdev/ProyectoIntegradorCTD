import React from 'react';
import {Link} from "react-router-3"
import './style.css';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="home">
                <div className="logo">
                    <img src={"img/logo 1DB.png"} alt="logo"/>
                    <h3>Sentite como en tu hogar</h3>
                </div>
            </Link>
            <div className="buttons">
                <Link to="/login"><button>Crear Cuenta</button></Link>
                <Link to="/create"><button>Iniciar Sesion</button></Link>
            </div>
            <div className="user">
                <div className="logoName">
                    <p>BR</p>
                </div>
                <div className="text">
                    <h3 className="great">Hola,</h3>
                    <h3 className="name">Bruno Rodriguez</h3>
                </div>

                <div className="close"><a href="/">X</a> </div>
            </div>
            <div className="mobile">
                <img src={"img/menú.png"} alt="menu mobile"/>
            </div>
        </header>
    )
}