// Pari e Dispari

const myButton = document.getElementById("playBtn");


myButton.addEventListener(`click`,


    function () {

        // L’utente sceglie pari o dispari 
        let sceltaUser =  document.getElementById("inputP_D").value;
        let sceltaUserUpper = sceltaUser.toUpperCase();
        console.log("hai scelto: ", sceltaUser);

        // inserisce un numero da 1 a 5.
        let numeroUser = parseInt(document.getElementById("input_number").value); 
        console.log("il tuo numero è: ", numeroUser);

        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        let numeroPC = getRandomNumb(1, 5);
        document.getElementById("numero_pc").innerHTML = "il computer ha scelto " + numeroPC;
        console.log("il numero del pc è: ", numeroPC);

        // Sommiamo i due numeri
        let sommaPuntate = numeroUser + numeroPC;
        console.log(sommaPuntate);

        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        let resultPariDispari = PariODispari(sommaPuntate);
        let resultPariDispariUpper = resultPariDispari.toUpperCase();
        console.log(resultPariDispari);


        // Dichiariamo chi ha vinto.
        if (sceltaUserUpper == resultPariDispariUpper) {
            debugger;
            document.getElementById("risultato").innerHTML = "Hai vinto!";
            console.log("Hai vinto!");
        } else {
            debugger;
            document.getElementById("risultato").innerHTML = "Hai perso!";
            console.log("Hai perso");
        }



    }

)

const myButtonReset = document.getElementById("rePlayBtn")


myButtonReset.addEventListener(`click`,

    function(){
        
        document.getElementById("inputP_D").value = "";
        document.getElementById("input_number").value = "";
        document.getElementById("numero_pc").innerHTML = "";
        document.getElementById("risultato").innerHTML = "";
        document.getElementById("risultato").innerHTML = "";

    }

)


// funzioni

function getRandomNumb(rangeMin, rangeMax) {

    let result = Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;

    return result;

}

function PariODispari(numeroCheck) {

    if (numeroCheck % 2 === 0) {
        return "Pari";

    } else {
        return "Dispari";
    }
}

