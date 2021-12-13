//Mail
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

//Dadi