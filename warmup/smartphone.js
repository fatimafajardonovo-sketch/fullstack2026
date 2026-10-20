const smartphone = {
    model: "Galaxy S21",
    user:"Erika",
    inbox: [ ]
    
}
smartphone.inbox.push("Whatsapp de mama", "Alerta de Seguridad", "Youtube: Nuevo video");
smartphone.inbox.shift();
let totalPending = smartphone.inbox.length;

console.log("Modelo: ", smartphone.model);
console.log("Usuario: ", smartphone.user);
console.log("Bandeja de entrada: ", smartphone.inbox);
console.log("A", smartphone.user, "le quedan", totalPending, "notificaciones");