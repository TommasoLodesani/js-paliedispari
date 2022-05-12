// Palidroma




// Chiedere all’utente di inserire una parola
const string = prompt('Enter a string: ');

checkPalindrome(string);



// Creare una funzione per capire se la parola inserita è palindroma
function checkPalindrome(string) {

    // converti stringa in array
    let arrayValues = string.split("");

    // inverti l'ordine dei valori dell'array
    let reverseValueArray = arrayValues.reverse();

    // converti array in stringa
    let reversedSring = reverseValueArray.join("");

    // condizioni
    if (string == reversedSring) {
        console.log("la parola è Palindroma");
    } else {
        console.log("la parola non è palindroma");
    }

}

