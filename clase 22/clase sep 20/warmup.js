/*Ejercicio 1: Objeto estudiante
Crea un objeto llamado estudiante con:

nombre: "María"
edad: 20
calificaciones: [8, 9, 7, 8]
activo: true
Realiza lo siguiente:

Imprime el nombre del estudiante.
Imprime la primera calificación del array.
Agrega una nueva calificación (10) al array usando .push().
Cambia el valor de activo a false.
Imprime el objeto completo. */


const student = {
    nombre: "María",
    edad: 20,
    calificaciones: [8, 9, 7, 8],
    activo: true
};

console.log(student.nombre);
console.log(student.calificaciones[0]);

student.calificaciones.push(10);
student.activo = false;

console.log(student);
/*
Ejercicio 2: Operaciones básicas con arrays
Crea un array llamado frutas con 5 frutas diferentes.
Usa .push() para agregar una nueva fruta.
Usa .pop() para remover la última fruta.
Usa .shift() para remover la primera fruta.
Imprime el array en cada paso con console.log().
*/


const frutas = ["pera", "manzana", "melón", "sandía", "plátano"];
console.log(frutas);

frutas.push("melocotón");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);