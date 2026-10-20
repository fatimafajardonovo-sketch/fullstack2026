const coche = {
    brand: "Citroen",
    model: "C4",
    priceBase: 5000,
    km: 100000,
    status: "new",
    extras: ["comfortable seats", "air conditioning", "bluetooth"],
}

console.log ( "Vehiculo a la venta: " + coche.brand );
console.log ( "Primer extra del coche: " + coche.extras[0] );

coche.extras[2] = "solar panel";
let priceFinal = coche.priceBase*1.21;
coche.status = "used";
let isExpensive = priceFinal > 50000;
let isPreowned = cohe.km <= 10000;
