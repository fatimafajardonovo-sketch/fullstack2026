
/* function darBienvenida () {
    return "¡Bienvenido a la tienda de Mascotas";
} */

const darBienvenida = (text) => text

console.log (darBienvenida("¡Bienvenido a la tienda de Mascotas"))


/* 2. Calcular el precio total con IVA (Dos parámetros)
function calcularTotal(precio, cantidad) {
  return precio * cantidad * 1.21;
}
*/
const precioIva = (precio,cantidad) => precio*cantidad*1.21

console.log (precioIva(21,30))


/*  3. Formatear el nombre de la mascota (Un parámetro)
function nombrarMascota(nombre) {
  return "Mascota: " + nombre;
} */

const nombrarMascota = (text) => "Mascota: " + text
console.log (nombrarMascota("Simba"))



/*  4. Aplicar descuento especial (Varias líneas de código)
function calcularDescuento(precio, esSocio) {
  if (esSocio) {
    return precio * 0.8; // 20% de descuento
  } else {
    return precio;
  }
}
*/

const calcularDescuento = (precio, esSocio) => esSocio ? precio * 0.8 : precio;