
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 3000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

// .find ayuda a encontrar algo dentro del array articulos
let encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);

//forEach No es necesario generar nuevo array, se utiliza para realizar un recorrido de un array principal
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);