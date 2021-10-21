import styles from "./Forms.module.css"

export default function FormLogin(){
    return(
        <div className={`${styles.container} ${styles.login}`}>
            <h3>Iniciar sesión</h3>
            <form className={styles.formFlex}>
                <div className={styles.inputLabel}>
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className={styles.inputLabel}>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className={`${styles.inputLabel} ${styles.boton}`}>
                    <button type="submit">Ingresar</button>
                    <p>¿Aún no tenés cuenta?<a href="./registro.html"> Registrate</a></p>
                </div>
            </form>
        </div>
    )
}