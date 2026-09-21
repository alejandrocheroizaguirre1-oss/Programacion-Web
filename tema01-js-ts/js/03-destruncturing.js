const producto= {
    id: 101,
    nombre: "Laptop",
    precio: 2500,
    detalle: {
        marca: "Dell",
        garantia: "1 años"
    }
}

const { nombre, precio, detalle:{marca}} = producto;

console.log(`producto: ${nombre}`);
console.log(`precio: ${precio}`);
console.log(`marca: ${marca}`);
console.log(`Id: ${id}`);
