//import Styles from "./Forms.module.css"

export default function FormLogin(){
    return(
        <div className="container login">
            <h3>Iniciar sesión</h3>
            <form class="form-flex">
                <div class="input-label">
                    <label for="email">Correo electrónico</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div class="input-label">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div class="input-label boton">
                    <button type="submit">Ingresar</button>
                    <p>¿Aún no tenés cuenta?<a href="./registro.html"> Registrate</a></p>
                </div>
            </form>
        </div>
    )
}