// Pari e Dispari

// L’utente sceglie pari o dispari 
let sceltaUser = prompt("Scegli tra pari e dispari");
console.log("hai scelto: " , sceltaUser);

// inserisce un numero da 1 a 5.
let numeroUser = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log("il tuo numero è: " , numeroUser);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numeroPC = getRandomNumb(1, 5);
console.log("il numero del pc è: " , numeroPC);

// Sommiamo i due numeri
let sommaPuntate = numeroUser + numeroPC;
console.log(sommaPuntate);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let resultPariDispari = PariODispari(sommaPuntate);
console.log(resultPariDispari);

// Dichiariamo chi ha vinto.
if(sceltaUser == resultPariDispari){
    console.log("Hai vinto!");
} else {
    console.log("Hai perso");
}

// funzioni

function getRandomNumb (rangeMin, rangeMax) {

    let result = Math.floor(Math.random() * (rangeMax - rangeMin))  + rangeMin;

    return result;
    
}

function PariODispari (numeroCheck) {

    if(numeroCheck % 2 === 0){
        return "pari";
    
    } else {
        return "dispari";
    }
}