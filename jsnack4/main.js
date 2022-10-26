//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const lista=["Fabio", "Gabio", "Habio", "Jabio", "Kabio"]
const user_name=prompt("Inserisci il tuo nome")
let pass= false

for (let i = 0; i < lista.length; i++) {
    if (user_name===lista[i]) {
        pass=true;
        break
    }
}
if (pass) {
    alert("Puoi partecipare")
}else{
   alert("Sei stato cacciato")
}