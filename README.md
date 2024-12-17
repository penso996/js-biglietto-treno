# js-biglietto-treno

<-- Esercizio -->

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


<-- Struttura logica -->

- Chiedere all'utente "km" da percorrere e "età".
- Calcolare il prezzo intero del biglietto: "km" * 0,21€
- Dopodiché calcolare lo sconto, se presente:
    20% per <18
    40% per >65
- Infine nell'output dichiarare il risultato nel formato 0,00€