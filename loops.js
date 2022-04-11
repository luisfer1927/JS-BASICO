// PRIMERA FORMA PARA EL LOOP
var estudiantes = ["maria", "segio", "mario", "coco"];

function holaEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++){
	holaEstudiantes(estudiantes[i]);
}


// SEGUNDA FORMA PARA EL LOOP FOR
var estudiantes = ["maria", "segio", "mario", "coco"];

function holaEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    holaEstudiantes(estudiante);
}

