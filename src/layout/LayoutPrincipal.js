import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"

export default function LayoutPrincipal(props){
    return(
        <BrowserRouter>
            <Header/>
            {props.children}
            <Footer/>
        </BrowserRouter>
    )
}