/* Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari */
const arraynum=[1,2,3,4,5]
let sum=0
for (let i = 0; i < arraynum.length; i++) {
        if (i%2==1) {
            sum=sum+arraynum[i]
        }
        
}
console.log(sum)