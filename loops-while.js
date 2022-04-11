var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//ciclo while
while(estudiantes.length>0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}