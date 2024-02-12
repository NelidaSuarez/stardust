import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h1>StarShop</h1>
            <div>
            <button>Todo</button>
                <button>Vinilos</button>
                <button>Equipos</button>
                <button>Accesorios</button>      
                <CartWidget/>          
            </div>
        </nav>
    ) 
}
export default NavBar