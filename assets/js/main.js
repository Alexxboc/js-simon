/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.

- div nell'html
- document.querySelector(/document.getElementbyId()
- variabile array che contiene numeri random
- Math.random() | Copio da w3school la funzione
- while
- if
- array includes()
- innerHTML
- setTimeout(Funzione,3000)
- for
- prompt


*/

// Viusalizzare in pagina 5 numeri casuali.
//1. seleziono elemento della dom dove inserire numeri casuali
const numbersElement = document.querySelector('.numbers');
//2. Creare array dove salvare i numeri
const randomNumbers = [];      
//3. generare 5 numeri casuali (che non si ripetono)


while (randomNumbers.length !== 5) {
    const number = Math.floor(Math.random() * 100)
    if (!randomNumbers.includes()) {
       randomNumbers.push(number) 
    }
}
console.log(randomNumbers);
numbersElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`

//Faccio partire un timer di 30 secondi.
//1. Imposto il set time out a 30 secondi
setTimeout(() => {
    numbersElement.innerHTML('')
    //Dopo 30 secondi l'utente deve inserire, uno alla volta,i numeri che ha visto precedentemente, tramite il prompt(). 
    //2. faccio un ciclo e chiedo all'utente di inserire un numero di quelli visti.
    const userAttempts = []
    for(let i = 0; i < 5; i++){
     const userNumber = Number(prompt('Inserisci uno dei numeri che hai visto prima'));
     console.log(userNumber);
     if (randomNumbers.includes(userNumber) && !userAttempts.includes(userNumber)) {
         userAttempts.push(userNumber)
        }
    }

    console.log(userAttempts);
    /* 
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    - array che contiene i numeri inseriti dall'utente (solo se combaciano con i numeri mostrati)
    - operatore logico
    */ 
    alert(`Hai indovinato ${userAttempts.length}/${randomNumbers.length} - I numeri indovinati sono ${userNumber}`)

}, 3000)

