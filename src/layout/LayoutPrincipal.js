import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"

export default function LayoutPrincipal(props) {

    return (
        <BrowserRouter>
            <Header isLogged={props.route.isLogged} hide={props.route.hide}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </BrowserRouter>
    )
}