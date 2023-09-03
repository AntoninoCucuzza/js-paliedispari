console.log('we');
/* 

👉Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/


document.getElementById('conferma').addEventListener('click', function(e){
    e.preventDefault();
    

    const pari_dispari = document.getElementById('input_paridispari').value.toLowerCase();
    console.log(`hai selezionato ${pari_dispari}`);
  
    
    const userN = Number(document.getElementById('input_numero').value)
    console.log(`hai selezionato ${userN}`);


    function randomN() {
        let randomPc = Math.floor(Math.random() * 5 + 1);
        console.log(`il pc ha scelto ${randomPc}`);
        return randomPc;
    }
    
    const somma = userN + (randomN());
    console.log(`la somma dei numeri scelti e ${somma}`);

    
    if(pari_dispari === 'pari'){
        if(somma % 2 === 0){
            alert(`${somma} e un numero pari quindi hai vinto`)

        } else {
            alert(`${somma} non e un numero pari quindi hai perso`)
        }
    
    }else if(pari_dispari === 'dispari'){
    
        if(somma % 2 === 0){
            alert(`${somma} e un numero pari quindi hai perso`)

        } else {
            alert(`${somma} e un numero dispari quindi hai vinto`)
            
        }
    }else{
        alert('inserisci pari o dispari')
    }
})

//const pari_dispari = 'pari' //prompt('scegli tra pari o dispari')

//const userN = 1 //Number(prompt('scegli un numero da 1 a 5'))



console.log('####################################################');
/* 

👉Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

//👇 versione con i cheat

//const userWord = 'botto' prompt('inserisci una parola palindroma')
//console.log(userWord);

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
/*  function testPalindromo() {
    return userWord.split('').reverse().join('')
}  */
/* console.log(testPalindromo(userWord))

if(userWord === testPalindromo(userWord)) {
    console.log('la parola inserita e palindroma');
}else{
    alert('la parola inserita non e palindroma')
}

*/
document.getElementById('conferma_parola').addEventListener('click', function(e){

    const userWord = document.getElementById('input_userword').value.toLowerCase();

    const userWordArray = []


    for (let i = 0; i < userWord.length; i++) {
        const lettera = userWord[i];
        //console.log(lettera);
        userWordArray.push(lettera)
        //console.log(userWordArray);
    }

    console.log(userWordArray);


    const reverseUserWordArray = []

    for (let i = userWordArray.length - 1; i >= 0 ; i--) {
        const lettera = userWordArray[i]
        reverseUserWordArray.push(lettera)
        
    }

    console.log(reverseUserWordArray );

    function testPalindromo(userWordArray, reverseUserWordArray) {
        for (let i = 0; i < userWordArray.length; i++) {
            if (userWordArray[i] != reverseUserWordArray[i]) {
                return false;
            }
        }
        return true;
    }


    if (testPalindromo(reverseUserWordArray, userWordArray)) {
        alert(`La parola ${userWord} e una parola palindroma`)

    } else {
        alert(`La parola ${userWord} non e una parola palindroma`)
    }

})