/*
Este es un archivo que nos permite emular una conexion a un servidor
*/


const productos = [
    {id: "1", nombre: "Yerba", stock:10, precio: 500, img: "../public/img/yerbamarolio.jpg", idCat: "2"},
    {id: "2", nombre: "Fideos", stock:10, precio: 180, img: "../public/img/FideosMarolio.jpg", idCat: "2"},
    {id: "3", nombre: "Arroz", stock:10, precio: 200, img: "../public/img/ArrozMarolio.jpg", idCat: "3"},
    {id: "4", nombre: "Aceite", stock:10, precio: 900, img: "../public/img/AceiteMarolio.jpg", idCat: "3"},
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

/* Detalle de un producto I*/
//Creamos una funcion similar a la anterior pero que solo nos retorne un item

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una nueva funcion que retorna toda una categoria:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria)
        }, 2000)    
    })
}