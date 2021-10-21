import React, {useState} from 'react';
import {Link} from "react-router-3";
import logo from "./img/logo 1DB.png";
import logoMobile from "./img/menu.png";
import './style.css';

export default function Header() {

    const[activeCreate, setIsActiveCreate] = useState(false)
    const[activeLogin, setIsActiveLogin] = useState(false) 

    function toggleClass(name) {
        if(name==="createButton"){
            setIsActiveCreate(true)
            setIsActiveLogin(false)
        }else if(name==="loginButton"){
            setIsActiveLogin(true)
            setIsActiveCreate(false)
        }else{
            setIsActiveLogin(false)
            setIsActiveCreate(false)
        }
    };

    return (
        <header className="header">
            <Link to="/" className="home" onClick={()=>toggleClass()}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h3>Sentite como en tu hogar</h3>
                </div>
            </Link>
            <div className="buttons">
                <Link to="/create"><button className={ activeCreate? "hideButton":null } onClick={()=>toggleClass("createButton")}>Crear Cuenta</button></Link>
                <Link to="/login"><button className={ activeLogin? "hideButton":null } onClick={()=>toggleClass("loginButton")}>Iniciar Sesion</button></Link>
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
                <img src={logoMobile} alt="menu mobile"/>
            </div>
        </header>
    )
}