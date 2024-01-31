/* Definisco le variabili */
var first_number, last_number,first_error,
last_error,calcola,testo_risultato;
window.addEventListener('load', init);

/* Inizializzo le variabili */
function init(){
    first_number=document.getElementById('first_number');
    last_number=document.getElementById('last_number');
    first_error=document.getElementById('first_error');
    last_error=document.getElementById('last_error');
    calcola=document.getElementById('calcola');
    testo_risultato=document.getElementById('testo_risultato');
    eventHandler();
}

eventHandler=()=>{
    calcola.addEventListener('click', controlla);
}
/* Prendo in input i value e lancio la verifica, se maggiori di zero, in caso
affermativo, eseguo la funzione eseguiConteggio()*/
controlla=()=>{
   first_error.innerHTML='';
   last_error.innerHTML=''; 
   risultato.innerHTML='';
   let numero_uno=parseInt(first_number.value);
   let numero_due=parseInt(last_number.value);
   verifica(numero_uno, numero_due) ? eseguiConteggio(numero_uno,numero_due) : false;  
  
}

verifica=(a,b)=>{
    let expression=(a > 0) && (b > 0) && (a <= 15) 
    && (b <= 15) && (a !== b) && (a - b > 3) || (b - a > 3);
    while(expression){
        first_error.innerHTML='';
        last_error.innerHTML=''; 
        return true;
    }
    testo_risultato.classList.add('d-none');
    stampaErrore(a,b);
}

/* Stampa Errore condizione non rispettata */
stampaErrore=(a,b)=>{
    a<=0 || isNaN(a) ? first_error.innerHTML='Errore numero minore/uguale a zero': a===b 
    ? first_error.innerHTML='Errore i numeri devono essere diversi' :
    (a - b <= 3 && b - a <= 3) ? first_error.innerHTML='Forbice non rispettata' : a >= 15 ?
    first_error.innerHTML='Errore numero maggiore di 15': true;

    b<=0 || isNaN(b) ? last_error.innerHTML='Errore numero minore/uguale a zero': b===a 
    ? last_error.innerHTML='Errore i numeri devono essere diversi' :
    (b - a <= 3 && a-b <= 3) ? last_error.innerHTML='Forbice non rispettata' : b >= 15 ?
    last_error.innerHTML='Errore numero maggiore di 15': true;
}
/* Confronto fra il primo e il secondo numero */
eseguiConteggio=(a,b)=>{
   return a<b ? contaIn(a,b) : contaAv(a,b);
}

/* Se il primo è minore del secondo, conto alla rovescia */
contaIn=(a,b)=>{
    for(let i=a; i<=b; i++){
        if(i===a || i===b){   /* Salto il primo e l'ultimo numero del range */
            continue;
        } 
        testo_risultato.classList.remove('d-none');
        risultato.innerHTML+=i+"\n";
        clear(); 
    }
}
/* Se il primo è maggiore del secondo, conto in avanti */
contaAv=(a,b)=>{
    for(let i=a; i>=b; i--){
        first_error.innerHTML='';
        last_error.innerHTML=''; 
        testo_risultato.classList.remove('d-none');
        risultato.innerHTML+=i+"\n";
        clear(); 
    }
}
/* Cancello i value dopo l'invio */
clear=()=>{
    first_number.value='';
    last_number.value='';
}   