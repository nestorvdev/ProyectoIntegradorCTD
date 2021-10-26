import styles from "./Forms.module.css"
import { Link } from "react-router-3"
import { useState } from "react";
import ValidCredentials from "../../credentials/ValidCredentials";

export default function FormLogin(props){

    const[email, setEmail] = useState("");
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const[password, setPassword] = useState("");
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const[errores, setErrores] = useState([])

    const validarCredenciales = () => {
        let credencialesSonValidas = true;
        if(email !== ValidCredentials.email || password !== ValidCredentials.password){
            setErrores(["Por favor vuelva a intentarlo. Las credenciales son inválidas"])
            credencialesSonValidas = false;
        }
        return credencialesSonValidas;
    }

    const sendData = (event) => {
        event.preventDefault();
        if(validarCredenciales()){
            props.route.setLog(true)
            sessionStorage.setItem("log", "true")
            window.location.pathname = "/"
        }
    }

    return(
        <div className={styles.container}>
            <h3>Iniciar sesión</h3>
            <form className={`${styles.formFlex} ${styles.login}`} onSubmit={sendData}>
                <div className={styles.inputLabel}>
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" value = {email} onChange={handleChangeEmail}/>
                </div>
                <div className={styles.inputLabel}>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password" value = {password} onChange = {handleChangePassword}/>
                </div>
                <div>{errores.map((error)=> {return <p className={styles.error}>{error}</p>})}</div>
                <div className={`${styles.inputLabel} ${styles.boton}`}>
                    <button type="submit">Ingresar</button>
                    <p>¿Aún no tenés cuenta?<Link to="/create"> Registrate</Link></p>
                </div>
            </form>
        </div>
    )
}