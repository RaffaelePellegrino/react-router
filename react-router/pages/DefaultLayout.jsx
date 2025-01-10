import { Outlet } from "react-router";
import FooterComponent from "../components/headerComponent";
import HeaderComponent from "../components/footerComponent";



export default function defaultLayout(){
    return(
        <div>
            <HeaderComponent/>
            <main>
                <Outlet/>
            </main>
            <FooterComponent/>

        </div>
    );  
}