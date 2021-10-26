import styles from "./Forms.module.css";
import { Link } from "react-router-3";
import React, { useState } from "react";

export default function FormCreate(props) {
    const[name, setName] = useState("");
    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const [surname, setSurname] = useState("");
    const handleChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const[email, setEmail] = useState("");
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const[password, setPassword] = useState("");
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const[confirmPassword, setConfirmPassword] = useState("");
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const[error, setError] = useState("")

    const credencialesValidas = {
        email:"grupo1@digital.com",
        password: "1234567"
    }

    const validarPassword = () => {
        let passwordValida = true;
        if(password.length <= 6){
            setError("La contraseña debe tener más de 6 caracteres")
            passwordValida = false;
        }
        if(confirmPassword.length===0){
            setError("Este campo es obligatorio")
            passwordValida = false;
        }
        if(confirmPassword.length>0 && password!==confirmPassword){
            setError("Las contraseñas deben ser iguales")
            passwordValida = false;
        }

        return passwordValida;
    }

    const validarCredenciales = () => {
        let existenCredenciales = false;
        if(email === credencialesValidas.email){
            existenCredenciales = true;
        }
        return existenCredenciales;
    }

    const sendData = (event) => {
        if(!validarPassword()){
            event.preventDefault();
        }else if(validarCredenciales()){
            event.preventDefault();
            setError(["El usuario ya existe."])
        }else{
            event.preventDefault();
            window.location.pathname = "/login"
        }
    }

    return (
        <div className={styles.container}>
            <h3>Crear cuenta</h3>
            <form className={styles.formFlex} onSubmit={sendData}>
                <div className={styles.fullName}>
                    <div className={styles.inputLabel}>
                        <label for="name">Nombre</label>
                        <input type="text" name="name" id="name" value={name} onChange={handleChangeName} required/>
                    </div>
                    <div className={`${styles.inputLabel} ${styles.apellido}`}>
                        <label for="surname">Apellido</label>
                        <input type="text" name="surname" id="surname" value = {surname} onChange={handleChangeSurname} required/>
                    </div>
                </div>
                <div className={styles.inputLabel}>
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" value = {email} onChange={handleChangeEmail}/>
                </div>
                <div className={styles.inputLabel}>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" value = {password} onChange = {handleChangePassword}/>
                </div>
                <div className = {`${styles.inputLabel} ${error==="Este campo es obligatorio"?styles.inputError:null}`}>
                    <label for="confirm-password">Confirmar contraseña</label>
                    <input type="password" name="confirm-password" id="confirm-password" value = {confirmPassword} onChange = {handleChangeConfirmPassword}/>
                </div>
                <div>{(error!=="")?(<p className={styles.error}>{error}</p>):null}</div>
                <div className={`${styles.inputLabel} ${styles.boton}`}>
                    <button type="submit">Crear cuenta</button>
                    <p>¿Ya tienes una cuenta?<Link to="/login"> Iniciar sesión</Link></p>
                </div>
            </form>
        </div>
    )
}

