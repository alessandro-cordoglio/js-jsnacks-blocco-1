/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const array=[]

for (let i = 0; i < 6; i++) {
    const num=prompt("Inserisci un numero")
    if (!(num % 2==0)) {
        array.push(num)
    }
}
console.log(array)