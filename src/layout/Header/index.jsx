//import { PROPERTY_TYPES } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-3";
import ValidCredentials from '../../credentials/ValidCredentials';
import logo from "./img/logo 1DB.png";
import './style.css';
import MenuBurger from '../../components/MenuBurger/MenuBurger';
import { HeaderWrapper } from '../../components/MenuBurger/HeaderStyles';
import MenuButton from '../../components/MenuBurger/MenuButton';

export default function Header(props) {

    const [activeCreate, setIsActiveCreate] = useState((window.location.pathname==="/create")?true:false)
    const [activeLogin, setIsActiveLogin] = useState((window.location.pathname==="/login")?true:false)
    const [activeHome, setActiveHome] = useState((window.location.pathname==="/")?true:false)

    /*function toggleClass(name) {
        const ruta = window.location.pathname;
        console.log("headerRuta", ruta);
        if (name === "createButton") {
            setIsActiveCreate(true)
            setIsActiveLogin(false)
        } else if (name === "loginButton") {
            setIsActiveLogin(true)
            setIsActiveCreate(false)
        } else if("home"||ruta==="/"){
            setIsActiveLogin(false)
            setIsActiveCreate(false)
        }
    };*/
    const ruta = window.location.pathname;
    console.log("ruta",ruta);

    function hide() {
        if (ruta==="/login") {
            setIsActiveCreate(false)
            setIsActiveLogin(true)
        } else if (ruta==="/create") {
            setIsActiveLogin(false)
            setIsActiveCreate(true)
        } else if(ruta==="/"){
            setIsActiveLogin(false)
            setIsActiveCreate(false)
        }
    };
    
    useEffect(
        ()=> hide()
    )
    
    console.log("header ruta",window.location.pathname);
    console.log("activeLogin", activeLogin);
    console.log("activeCreate", activeCreate);
    const showUserName = (props.isLogged) ? "user loggedIn" : "user"; //para cambiar la clase segun este loggueado o no y
    //que aparezca el nombre del usuario
    const hideButtons = (props.isLogged) ? "buttons user" : "buttons";//Para esconder los botones cuando esta logueado
    const iniciales = `${ValidCredentials.nombre.slice(0, 1).toUpperCase()}${ValidCredentials.apellido.slice(0, 1).toUpperCase()}`

    

    function handleLogOut() {
        sessionStorage.setItem("log", "false")
    }
    
    const [showBurger, setShowBurger] = useState(false)

    function handleShow(){
        setShowBurger(true)
    }
    function handleHide(){
        setShowBurger(false)
    }

    return (
        <HeaderWrapper className="header">
            <Link to="/" className="home" onClick={handleHide}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h3>Sentite como en tu hogar</h3>
                </div>
            </Link>
            <div className={hideButtons}>
                <Link to="/create"><button className={activeCreate ? "hideButton" : null} >Crear Cuenta</button></Link>
                <Link to="/login"><button className={activeLogin ? "hideButton" : null} >Iniciar Sesion</button></Link>
            </div>
            <div className={showUserName}>
                <div className="logoName">
                    <p>{iniciales}</p>
                </div>
                <div className="text">
                    <h3 className="great">Hola,</h3>
                    <h3 className="name">{ValidCredentials.nombre} {ValidCredentials.apellido}</h3>
                </div>
                <div className="close"><a href="/" onClick={handleLogOut}>X</a> </div>
            </div>
            <MenuBurger show={showBurger} handleShow={handleShow} handleHide={handleHide} isLogged={props.isLogged} iniciales={iniciales} activeLogin={activeLogin} activeCreate ={activeCreate} handleLogOut={handleLogOut}/>
            <MenuButton show={showBurger} handleShow={handleShow} /> 
        </HeaderWrapper>
    )
}