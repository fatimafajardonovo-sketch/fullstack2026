const age = 15;
const haveEntrance = true;

if (!haveEntrance) {
    console.log("Debes comprar una entrada primero");
} else if (age < 18) {
    console.log("Acceso denegado: eres menor");
} else {
    console.log("¡Bienvenido al cine!");
}