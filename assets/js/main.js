console.log('we');
/* 

👉Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/
const pari_dispari = 'pari' //prompt('scegli tra pari o dispari')
console.log(pari_dispari);


const userN = 1 //Number(prompt('scegli un numero da 1 a 5'))
console.log(userN);

function randomN() {
    let randomPc = Math.floor(Math.random() * 5 + 1);
    console.log(randomPc);
    return randomPc;
}

const somma = userN + (randomN());
console.log(somma);

if(pari_dispari === 'pari'){
    
    if(somma % 2 === 0){
        console.log('hai vinto');
    } else {
        console.log('Il risultato e dispari');
    }

}else if(pari_dispari === 'dispari'){

    if(somma % 2 === 0){
        console.log('Il risultato e pari');
    } else {
        console.log('hai vinto');
    }
}else{
    alert('inserisci pari o dispari')
}

console.log('####################################################');
/* 

👉Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

const userWord = 'otto' //prompt('inserisci una parola palindroma')
console.log(userWord.length);


// Function to reverse string

/**
 * ## scrittura inversa delle parole 
 * mettiamo che una variabile ha come valore una parola esempio "ciao"
 * 
 *
 * cio che fa e: scomporre la parola in lettere  
 * 
 * - "c"
 * - "i"
 * - "a"
 * - "o"
 * 
 * le inverte le lettere 
 * 
 * - "o"
 * - "a"
 * - "i"
 * - "c"
 * 
 * e le riassembla in oaic
 * 
 * e qundi se scrivo "otto" = "otto" e posso verificare se sono 'identiche' e in caso positivo posso dire che e una parola palindroma
 * 
 * 
 * (questa risposta l'ho trovata come primo risultato cercando: js how to read backwards olleh)
 * 
 * @param {parola} userWord 
 * @returns  esempio: botto / ottob
 */
function testPalindromo() {
    return userWord.split('').reverse().join('')
} 
console.log(testPalindromo(userWord))

if(userWord === testPalindromo(userWord)) {
    console.log('la parola inserita e palindroma');
}else{
    alert('la parola inserita non e palindroma')
}

