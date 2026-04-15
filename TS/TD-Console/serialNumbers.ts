
/*

Dans cet exercice, vous allez créer une fonction qui va vérifier si un numéro de série est valide ou non.

Pour définir si un numéro de série est valide, il doit respecter plusieurs règles :

- Il est sous la forme XXXX-XXXX-XXXX-XXXX où les X sont des chiffres.
- Le 1e groupe de 4 chiffres est l'inverse du 3e groupes. (Par exemple si le premier groupe est 1234, le 3e sera 4321)
- Le 2e groupe de chiffres est composé des 4 dernier chiffres du 3e groupe multiplié par 7. (Si le 3e groupe est 5142, alors le 2e groupe sera 5994 car 5142*7 = 35 994)
- La somme des 4 groupes de chiffres donne forcément un multiple de 10000. ( Pour la carte 2806-2574-6082-8538, la somme donne 20 000 qui est bien un mutiple de 10 000)

Si toutes les règles sont valides, on renvoie la valeur 0 pour "Pas d'erreur". Sinon, on renvoie un code d'erreur correspondant à la première erreur rencontrée selon la charte : 

0 : Pas d'erreur, carte valide.
1 : Mauvais format.
2 : Le premier groupe n'est pas équivalent au 3ème inversé.
3 : Le groupe 2 n'est pas composé des 7 derniers chiffres de la multiplication du 3ème groupe par 7.
4 : La somme de tous les groupes n'est pas un multiple de 10 000.

Pour vous aider, voici quelques numéro de séries valides :

2806-2574-6082-8538
6730-2632-0376-0262
2223-2554-3222-2001
2415-5994-5142-6449
4212-4868-2124-8796
0441-0080-1440-8039
3210-0861-0123-5806

*/

import { split } from "./StringManipulation";
import { reverse } from "./StringManipulation";

/**
 * @param serialNumber Serial number format "XXXX-XXXX-XXXX-XXXX"
 * @returns 0 : No Error, 1 : Wrong Format, 2 : group 1 isn't group 3 reversed, 3 : group 2 isn't group 3 times 7, 4 : total sum isn't a multiple of 10000
 */
function has_error(serialNumber:string):number {
   let splitSN = split(serialNumber,"-");
   // 1
   for (let i = 0 ; i <= splitSN.length - 1 ; i++ ){
    if (splitSN[i].length != 4){
        return 1
    }else if (isNaN(Number(splitSN[i]))){
        return 1
    }  ;
   }
   // 2
    if ( reverse(splitSN[0]) != splitSN[2]){
    return 2
    }
    // 3
    if ( Number(splitSN[1]) != (Number(splitSN[2]) * 7) % 10000){
        return 3
    }
    // 4
let sum = 0 ;
for (let i = 0 ; i <= splitSN.length - 1 ; i++ ){
    sum += Number(splitSN[i])
}
if (sum % 10000 != 0){
    return 4
}

return 0
    throw new Error("Feature not implemented yet");
}


//Quelques exemples de numéro de série avec les résultats attendus :


// 0 :

console.log(has_error("2806-2574-6082-8538"));
console.log(has_error("6730-2632-0376-0262"));
console.log(has_error("2223-2554-3222-2001"));
console.log(has_error("2415-5994-5142-6449"));
console.log(has_error("4212-4868-2124-8796"));
console.log(has_error("0441-0080-1440-8039"));
console.log(has_error("3210-0861-0123-5806"));

// 1 :
console.log("has_error : 1");
console.log(has_error("2806-2574-6082-858"));
console.log(has_error("XXXX-XXXX-XXXX-XXXX"));

// 2 :
console.log("has_error : 2");
console.log(has_error("4221-4868-2124-8796"));
console.log(has_error("1122-1111-1212-1111"));

// 3 :
console.log("has_error : 3");
console.log(has_error("1122-1111-2211-1111"));
console.log(has_error("3879-1111-9783-1111"));

// 4 :
console.log("has_error : 4");
console.log(has_error("1122-5477-2211-1111"));
console.log(has_error("3879-8481-9783-1111"));
