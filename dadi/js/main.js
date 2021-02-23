//creo due dadi che generano numeri casuali
var dadoPc = Math.floor(Math.random() * 6) + 1;
console.log(dadoPc); 
var dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(dadoUtente);

//se dadoUno è maggiore di dado due vince ,al contrario dado uno vince, se sono uguali pareggio
if (dadoPc > dadoUtente) {
    alert("Dado Pc ha vinto"); 
    } else if (dadoPc < dadoUtente) {
        alert("Dado Utente ha vinto");
    } else if (dadoUtente == dadoPc) {
        alert("Pareggio");
    }


