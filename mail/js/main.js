//creo una lista con dentro le email che hanno accesso
var emailAutorizzate = ["edo@gmail.com", "edo1@gmail.com", "marco@gmail.com" , "marco1@gmail.com" , "enrico@gmail.com"];
console.log(emailAutorizzate);

//creo un prompt dove l'lutente inserirà l'email
var emailInserita =prompt("Inserisci la tua email");

//se l'email è all'interno della lista faccio un alert
var mailtrovata = false;

for (var i = 0; i < emailInserita.length; i++) {
    if (emailAutorizzate[i] == emailInserita) {
        mailtrovata = true;  //assegna il valore true
    }
};

// mostro messaggio all'utente
if (mailtrovata == true) {
    alert("Email autorizzata");
} else {
    alert("Email non autorizzata");
};

