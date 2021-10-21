import styles from "./Forms.module.css"

export default function FormCreate() {
    return (
        <div className={styles.container}>
            <h3>Crear cuenta</h3>
            <form className={styles.formFlex}>
                <div className={styles.fullName}>
                    <div className={styles.inputLabel}>
                        <label for="name">Nombre</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className={styles.inputLabel}>
                        <label for="surname">Apellido</label>
                        <input type="text" name="surname" id="surname"/>
                    </div>
                </div>
                <div className={styles.inputLabel}>
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className={styles.inputLabel}>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className={styles.inputLabel}>
                    <label for="confirm-password">Confirmar contraseña</label>
                    <input type="password" name="confirm-password" id="confirm-password"/>
                </div>
                <div className={`${styles.inputLabel} ${styles.boton}`}>
                    <button type="submit">Crear cuenta</button>
                    <p>¿Ya tienes una cuenta?<a href="./login.html"> Iniciar sesión</a></p>
                </div>
            </form>
        </div>
    )
}

