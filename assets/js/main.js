console.log('we');
/* 

👉Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/
const pari_dispari = prompt('scegli tra pari o dispari')
console.log(pari_dispari);


const userN = 1//Number(prompt('scegli un numero da 1 a 5'))
console.log(userN);

function randomN() {
    let randomPc = Math.floor(Math.random() * 5 + 1);
    console.log(randomPc);
    return randomPc;
}

const somma = userN + (randomN());
console.log(somma);


if (pari_dispari === 'pari') {
    
    if(somma % 2 === 0){
        console.log('hai vinto');
    } else {
        console.log('Il risultato e dispari');
    }

} else if(pari_dispari === 'dispari'){

    if(somma % 2 === 0){
        console.log('Il risultato e pari');
    } else {
        console.log('hai vinto');
    }
} else {
    alert('inserisci pari o dispari')
}