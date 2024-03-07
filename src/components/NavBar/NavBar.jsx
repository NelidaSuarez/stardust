import CartWidget from "../CartWidget/CartWidget"
import logo from '/logo2.png';
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
            
            <nav style={{display:"flex" ,justifyContent:"space-between", alignItems:"center"}} >          
            <div >
                <Link to="/" >
                    <img  src={logo}  alt="Logo2" style={{width:"200px"}}/>
                </Link>    
            </div>
            <section  className="active-color: var(--bs-btn-hover-color)  ">
                              
                <NavLink to={`/category/Equipos`} type="button" className="btn btn-outline-success">Equipos</NavLink> 
                <NavLink to={`/category/Vinilos`} type="button" className="btn btn-outline-danger">Vinilos</NavLink>               
                <NavLink to={`/category/Consolas`} type="button" className="btn btn-outline-warning">Consolas</NavLink>
                <NavLink to={`/category/Juegos`} type="button" className="btn btn-outline-info">Juegos</NavLink>  
                
            </section>
            <CartWidget/>
        </nav>
    ) 
}
export default NavBar

