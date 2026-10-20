const minimumAge = 12;
const minimumHeight = 140;
const entryPrice = 15;
const numberEntries = 2;

let username = "Fatima";
let userAge = 21;
let userHeight = 135;
let availableMoney = 80;

let totalCost = entryPrice * numberEntries;
let restFunds = totalCost - availableMoney;

let hasSufficientAge = userAge >= minimumAge;
let hasSufficientHeight = userHeight >= minimumHeight;
let canPay = availableMoney >= totalCost;
let remainingBalance = canPay ? availableMoney - totalCost : null;

let canUpload = hasSufficientAge && hasSufficientHeight && canPay;

console.log(
  "Usuario:", username,
  "¿Cumple la edad mínima?:", hasSufficientAge,
  "¿Cumple la altura mínima?:", hasSufficientHeight,
  "¿Puede pagar las 2 entradas?:", canPay,
  "Dinero que le falta:", restFunds,
  "Saldo tras la compra:", remainingBalance,
  "¿Puede subir a la atracción?:", canUpload
);