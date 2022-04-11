// METODOS DE RECORRIDO ARRAYS

// metodo 1 con filter! esto hace un filtrado
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 3000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
   return articulo.costo <= 500                                       
});

// console.log(articulosFiltrados);

// metodo 2 metodo de map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  //me regresa todos los articulos con el nombre y se guarga en un nuevo array
});

console.log(nombreArticulos);
