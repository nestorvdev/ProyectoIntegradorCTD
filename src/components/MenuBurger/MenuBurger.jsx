import { Link } from "react-router-3";
import logoFb from "./img/IconFb.png";
import logoLinkedIn from "./img/IconLinkedIn.png";
import logoTwitter from "./img/IconTw.png";
import logoIg from "./img/IconIg.png";
import line from "./img/Line.png";
import ValidCredentials from "../../credentials/ValidCredentials";
import { MenuBurgerWrapper } from "./MenuBurgerWrapped.jsx";

export default function MenuMobile({ show, handleHide, isLogged, iniciales, activeLogin, activeCreate, handleLogOut }) {

    const hideObject = (isLogged) ? "hide" : null;//Para esconder los botones cuando esta logueado
    const showObject = (isLogged) ? null : "hide"; //Para que se vea el avatar cuando se loguea

    return (
        <MenuBurgerWrapper show={show} className="containerMobile">
            <div className="mobileHeader">
                <div className="close" onClick={handleHide}>X</div>
                <div className={`avatar ${showObject}`}>
                    <div className="logoMobile">
                        <p>{iniciales}</p>
                    </div>
                    <div className="text">
                        <h3 className="great">Hola,</h3>
                        <h3 className="name">{ValidCredentials.nombre} {ValidCredentials.apellido}</h3>
                    </div>
                </div>
                <p className={`textMenu ${hideObject}`}>MENÚ</p>
            </div>
            <div className="mobileBody">
                <div className={`botones ${hideObject} ${(!activeLogin && activeCreate) ? "subir" : null}`}>
                    <Link to="/create" onClick={handleHide}><p className={(!activeLogin && activeCreate) ? "hide" : null} >Crear cuenta</p></Link>
                    <img className={`${activeCreate || activeLogin ? "hide" : null}`} src={line} alt="" />
                    <Link to="/login" onClick={handleHide}><p className={(!activeCreate && activeLogin) ? "hide" : null} >Iniciar sesión</p></Link>
                </div>
            </div>
            <div className="mobileFooter">
                <div className={`logOut ${showObject}`}>
                    <div>¿Deseas <a href="/" onClick={handleLogOut}>cerrar sesión?</a></div>
                    <img className="iconsImgMobile" src={line} alt="" />
                </div>
                <div className="iconsMobile">
                    <img src={logoFb} alt="" />
                    <img src={logoLinkedIn} alt="" />
                    <img src={logoTwitter} alt="" />
                    <img src={logoIg} alt="" />
                </div>
            </div>
        </MenuBurgerWrapper>
    )
}

