//funcion construtora
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

console.log(autoNuevo)

var autoNuevo2 = new auto("Toyota", "Corolla", 2012);
console.log(autoNuevo2);