//creo due dadi che generano numeri casuali
var dadoPc = Math.floor(Math.random() * 6) + 1;
alert("Il pc ha tirato " + (dadoPc) ); 
var dadoUtente = Math.floor(Math.random() * 6) + 1;
alert("L'utente ha tirato " + (dadoUtente) ); 

//se dadoUno è maggiore di dado due vince ,al contrario dado uno vince, se sono uguali pareggio
if (dadoPc > dadoUtente) {
    alert("Il Pc ha vinto"); 
    } else if (dadoPc < dadoUtente) {
        alert("L'Utente ha vinto");
    } else if (dadoUtente == dadoPc) {
        alert("Pareggio");
    }


