// Chiedere all'utente "km" da percorrere e "età".
const km = parseFloat(prompt("Inserire i KM da percorrere"));
const age = parseInt(prompt("Inserire la propria età"));

// Calcolare il prezzo intero del biglietto: "km" * 0,21€
const fullPrice = km * 0.21;

// Dopodiché calcolare lo sconto, se presente:
// 20% per <18
// 40% per >65
let discount = 0;
let discountPercentage = 0;

if (age < 18) {
    discount = fullPrice * 0.2;
    discountPercentage = 20;
} else if (age > 65) {
    discount = fullPrice * 0.4;
    discountPercentage = 40;
}

const finalPrice = fullPrice - discount;

// Infine nell'output dichiarare il risultato nel formato 0,00€
console.log("Devi percorrere " + km + " km ed hai " + age + " anni.");

if (discount > 0) {
    console.log("Hai diritto ad uno sconto del " + discountPercentage + "%.");
} else {
    console.log("Purtroppo alla tua categoria di età non spetta nessuno sconto.");
}

console.log("Pagherai: " + finalPrice.toFixed(2) + "€");