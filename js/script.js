//Mail

const verifiedMail = ['mimmo@gmail.com', 'pino@libero.it', 'gino@hotmail.com'];
let mailPresente = false;

let mailUtente = prompt('Qual è la tua mail?');

let outputHtml = document.querySelector('.printmail')

for(let i = 0; i < verifiedMail.length; i++) {
    if (mailUtente === verifiedMail[i]) {
        mailPresente = true;
    }
}

if(mailPresente) {
    outputHtml.innerHTML = `<div class="padding-top">${mailUtente} </div>`
    outputHtml.innerHTML += '<h4 class="padding-top">Accesso Confermato</h4>'
    console.log('Accesso confermato');
} else {
    outputHtml.innerHTML = `<div class="padding-top"> Non valida! </div>`
    outputHtml.innerHTML += '<h4 class="padding-top">Accesso Negato</h4>'
    console.log('Accesso negato');
}


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

//creo una variabile vuota che andrò a popolare nel ciclo
let randomNumber = '';

let outputHtml2 = '';

//Creo una variabile legata al bottone avente id dicebutton nell'html
const button = document.getElementById('dicebutton');

button.addEventListener('click', function () {
    //imposto un array senza valore
    const arrayNum = [];

    for(i=0; i < 2; i++) {
        randomNumber = Math.floor(Math.random(1) * 6) + 1;
        //Mando all'interno di arrayNum un numero generato randomicamente per ogni esecuzione del ciclo (2 volte) 
        arrayNum.push(randomNumber);
    }
    console.log(arrayNum);

    //Creo due variabili atte a rappresentare i numeri pescati casualmente dai player

    let numPlayer1 = (arrayNum[0]);
    outputHtml2 = document.querySelector('.box')
    outputHtml2.innerHTML = `<h1>${numPlayer1}</h1>`;
    console.log(numPlayer1);

    let numPlayer2 = (arrayNum[1]);
    outputHtml2 = document.querySelector('.box.red')
    outputHtml2.innerHTML = `<h1>${numPlayer2}</h1>`;
    console.log(numPlayer2);

    //Imposto le soluzioni di vittoria:
    //-Se il numero del giocatore 1 è maggiore di quello del giocatore 2, vince il giocatore uno
    //-Viceversa vince il giocatore 2
    //-Altrimenti è un pareggio
    outputHtml2 = document.querySelector('.winner')

    if(numPlayer1 > numPlayer2) {
        outputHtml2.innerHTML = '<h3>Ha vinto il Player 1</h3>';
        console.log('Ha vinto il giocatore 1');
    } else if (numPlayer1 < numPlayer2) {
        outputHtml2.innerHTML = '<h3>Ha vinto il Player 2</h3>';
        console.log('Ha vinto il giocatore 2 (Computer)');
    } else {
        outputHtml2.innerHTML = '<h3>Pareggio!</h3>';
        console.log('Pareggio');
    }
});