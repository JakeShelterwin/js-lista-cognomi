// DESCRIZIONE:
// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// dichiarazione variabili
var array, cognomeUtente, vecchioArrayNonOrdinato;

//riempio l'array di stringhe: i cognomi
array=["Weasley",
       "Granger",
       "Potter",
       "Malfoy",
       "Rosier",
       "Riddle",
       "Parvati",
       "Abbot"];

// The slice() method returns the selected elements in an array, as a new array object.
// mi copio l'array originario, serve slice() altrimenti il sort ordina anche questo
vecchioArrayNonOrdinato=array.slice();

// chiedo all'utente di inserire il suo cognome
cognomeUtente = prompt('Inserisci il tuo cognome (con lettera maiuscola)');

// inserisco il cognome dell'utente in fondo all'array dei cognomi
array.push(cognomeUtente);

// ordino l'array di cognomi con aggiunto quello dell'utente
array.sort();

// dico in quale posizione dell'array si trova il cognome dell'utente (qual è il suo indice)
// usando array.indexOf(cognomeUtente). Ci aggiungo 1 per renderlo umano
document.getElementById('cognome').innerHTML = 'Si lo sei! <br>'  + array + '<br> e compari in posizione ' + (array.indexOf(cognomeUtente)+1);

// stampo a console questi valori per vedere la correttezza del codice
console.log(array);
console.log("questo è l'array originale e non ordinato: " + vecchioArrayNonOrdinato);
console.log("cognome inserito dall'utente: " + cognomeUtente);
console.log("questa è l'indice che ha il cognome dell'utente nell'array ordinato: " + array.indexOf(cognomeUtente));
