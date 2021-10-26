import "./style.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";


export default function LayoutPrincipal(props) {
    const [showBurger, setShowBurger] = useState(false)
   /*  console.log(showBurger); */

    return (
        <div className={showBurger === true ? "opacity" : null}>
            <BrowserRouter >
                <Header isLogged={props.route.isLogged} showBurger={showBurger} setShowBurger={setShowBurger} />
                <main>
                    {props.children}
                </main>
                <Footer showBurger={showBurger}/>
            </BrowserRouter>
        </div>
    )
}