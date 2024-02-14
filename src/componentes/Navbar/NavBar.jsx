
import "./NavBar.css";
import logoApp from "../../imgs-elementos/logo-Pjfood.png"

function Navbar() {
    return <>

        <section className= "NavBar-component" >

            <img src={logoApp} className="logoStyle" alt="Logotipo" />
            <div className="btts-menu">
            <button className="btt-NavBar" type="button">Sacola <i className="fa-solid fa-bag-shopping"></i></button>
            <a href="">Histórico <i className="fa-regular fa-file-lines"></i></a>
            </div>
        </section>
    </>

}

export default Navbar;