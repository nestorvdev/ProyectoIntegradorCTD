import styles from "./Forms.module.css"
import { Link } from "react-router-3"
import { useState } from "react";

export default function FormLogin(){

    const[email, setEmail] = useState("");
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const[password, setPassword] = useState("");
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const[errores, setErrores] = useState([])

    const credencialesValidas = {
        email:"grupo1@digital.com",
        password: "1234567"
    }

    const validarCredenciales = () => {
        let credencialesSonValidas = true;
        if(email !== credencialesValidas.email || password !== credencialesValidas.password){
            setErrores(["Por favor vuelva a intentarlo. Las credenciales son inválidas"])
            credencialesSonValidas = false;
        }
        return credencialesSonValidas;
    }

    const sendData = (event) => {
        if(!validarCredenciales()){
            event.preventDefault();
        }else{
            event.preventDefault();
            window.location.pathname = ""
        }
    }

    return(
        <div className={styles.container}>
            <h3>Iniciar sesión</h3>
            <form className={styles.formFlex} onSubmit={sendData}>
                <div className={styles.inputLabel}>
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" value = {email} onChange={handleChangeEmail}/>
                </div>
                <div className={styles.inputLabel}>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" value = {password} onChange = {handleChangePassword}/>
                </div>
                <ul>{errores.map((error)=> {return <li className={styles.error}>{error}</li>})}</ul>
                <div className={`${styles.inputLabel} ${styles.boton}`}>
                    <button type="submit">Ingresar</button>
                    <p>¿Aún no tenés cuenta?<Link to="/create"> Registrate</Link></p>
                </div>
            </form>
        </div>
    )
}