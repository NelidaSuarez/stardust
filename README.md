Nombre del Proyecto : RetroShop

Es un Ecomerce de productos retro tanto consolas, como vinilos , equipos y juegos de epocas pasadas.

Requisitos Previos:
    -Creacion del entorno con React.js Vite:
        utilizando:Node.js, y creando en la terminal el proyecto mediante la instalacion de react:
                    comandos utilizados :
                        1- npm create vite@latest 
                        2- cd ecomerce  	
                        3- npm install  o npm i	
                        4- npm run dev
    -Istalacion ded dependecias:
        -React-Dom
        -React-router-dom

    
Para las entregas los requisitos fueron:
        -1er Preentrega:
                -NavBar:
                -Brand (titulo)
                -Listado de categorias cicleables
                -Incorporación de libreria (utilice Bootstrap )
                -CartWidget (icono y numero hardcordeado fijo)  
                -Componente contenedor ItemListContainer.jsx (con prop greeting)
        
        -2da Preentrega:
                -Crear rutas utilizando react-router-dom permitiendo la navegabilidad entre el catalogo y los detalles (rutas y links)
                -componentes (NavBar, Catalogo, Detalle del producto)
                
        -3era Entrega Final :
                -Desarrolla una app de e-comerce rubro a eleccion
                -Componentes:
                    NavBar
                    Catalogo
                    Detalle del producto
                    CartContext
                    CartWidget
                    ItemListContainer
                    ItemList
                    ItemDetailContainer
                    ItemDetail
                        ItemQuantitySelector
                        Description
                        AddItemButton
                    Checkout

                    Extras:
                        CheckoutForm (con base dee datos en firebase)
                        Spiner
                        Las imagenes estan en base de datos utilizada
                        proyecto subido a : https://retroshops.vercel.app/

                        



Por utlimo cambiamos los datos de firebase por el archivo .env luego los ingresamos a ignore para evitar subir informacion sencible.