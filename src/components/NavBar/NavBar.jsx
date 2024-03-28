import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import '/public/gif2.gif'
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
           <div className='categories'>
            <nav className="navbar navbar-expand-lg   " >          
            <div >
                <Link to="/" >
                    <img  src={'/gif2.gif'  }  alt="Logo2" style={{width:"200px"}}/>
                </Link>    
            </div>
            <section className='navb' >
                   <div  className="active-color: var(--bs-btn-hover-color)  ">        
                <NavLink to={`/category/Equipos`} type="button" className="btn btn-outline-success  ">Equipos</NavLink> 
                <NavLink to={`/category/Vinilos`} type="button" className="btn btn-outline-danger ">Vinilos</NavLink>               
                <NavLink to={`/category/Consolas`} type="button" className="btn btn-outline-primary">Consolas</NavLink>
                <NavLink to={`/category/Juegos`} type="button" className="btn btn-outline-success ">Juegos</NavLink>  
                </div>   
            </section>
            
            
            <CartWidget/>
        </nav>
        </div> 
    ) 
}
export default NavBar

