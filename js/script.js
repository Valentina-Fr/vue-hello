console.log("Vue test", Vue);

Vue.config.devtools = true;

/* 
Inizializzare Vue e stampare a schermo un messaggio 
all’interno di un h1, utilizzando le properietà di Vue 
presenti in data.

Bonus
Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue. 
*/

const root = new Vue ({
    el: "#root",
    data: {
        message: "Hello Vue!",
    }
});