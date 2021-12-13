//Mail

/* 
const verifiedMail = ['mimmo@gmail.com', 'pino@libero.it', 'gino@hotmail.com'];
let mailPresente = false;

let mailUtente = prompt('Qual è la tua mail?');

for(let i = 0; i < verifiedMail.length; i++) {
    if (mailUtente === verifiedMail[i]) {
        mailPresente = true;
    }
}

if(mailPresente) {
    console.log('Accesso confermato');
} else {
    console.log('Accesso negato');
}
*/

//Dadi

//Metodo 1: Sviluppo dell'esercizio senza il bisogno di un array e di un ciclo for:

//Inizio sviluppando un metodo che mi permetta di generare un numero randomico compreso tra 0 e 6 per due giocatori

/* let numPlayer1 = Math.floor(Math.random(1) * 6) + 1;
console.log(numPlayer1)


let numPlayer2 = Math.floor(Math.random(1) * 6) + 1;
console.log(numPlayer2)

//Imposto le soluzioni di vittoria:
//-Se il numero del giocatore 1 è maggiore di quello del giocatore 2, vince il giocatore uno
//-Viceversa vince il giocatore 2
//-Altrimenti è un pareggio

if(numPlayer1 > numPlayer2) {
    console.log('Ha vinto il giocatore 1');
} else if (numPlayer1 < numPlayer2) {
    console.log('Ha vinto il giocatore 2 (Computer)');
} else {
    console.log('Pareggio');
} */


//Metodo 2 - con array e ciclo for:

//imposto un array senza valore
const arrayNum = [];

//creo una variabile vuota che andrò a popolare nel ciclo
let randomNumber = '';
for(i=0; i < 2; i++) {
    randomNumber = Math.floor(Math.random(1) * 6) + 1;
    //Mando all'interno di arrayNum un numero generato randomicamente per ogni esecuzione del ciclo (2 volte) 
    arrayNum.push(randomNumber);
}
console.log(arrayNum);

//Creo due variabili atte a rappresentare i numeri pescati casualmente dai player
let numPlayer1 = parseInt(arrayNum[0]);
console.log(numPlayer1);

let numPlayer2 = parseInt(arrayNum[1]);
console.log(numPlayer2);

//Imposto le soluzioni di vittoria:
//-Se il numero del giocatore 1 è maggiore di quello del giocatore 2, vince il giocatore uno
//-Viceversa vince il giocatore 2
//-Altrimenti è un pareggio
if(numPlayer1 > numPlayer2) {
    console.log('Ha vinto il giocatore 1');
} else if (numPlayer1 < numPlayer2) {
    console.log('Ha vinto il giocatore 2 (Computer)');
} else {
    console.log('Pareggio');
}