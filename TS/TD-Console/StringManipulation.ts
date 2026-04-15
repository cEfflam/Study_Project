/*

Exercice sur les Manipulations de Strings

Dans cet exercice, l'objectif est de recréer plusieurs fonctions de manipulation de strings sans utiliser 
les fonctions natives JavaScript correspondantes. 

Fonctions à Implémenter :

- contains : Vérifie si un caractère donné est présent dans une chaîne en ignorant la casse.
- trim : Supprime les espaces en début et en fin d'une chaîne
- is_letter : Vérifie si une chaîne de caractère est composé d'une unique lettre
    (On peut récupérer le code ascii d'un caractère en utilisant expr.charCodeAt(0) )
- split : Divise une chaîne de caractères en un tableau de sous-chaînes en fonction d'un séparateur.
- join : Rassemble les éléments d'un tableau en une seule chaîne de caractères en les concaténant avec 
        un séparateur.
- replace : Remplace les occurrences d'une sous-chaîne dans une chaîne de caractères par une autre sous-chaîne.
- reverse : Inverse l'ordre des caractères dans une chaîne de caractères.

*/



export function contains(expr : string, char : string) : boolean{
    let exprLower : string = expr.toLowerCase();
    let charLower : string = char.toLowerCase(); 
    for ( let i = 0 ; i < exprLower.length ; i ++){
        if (exprLower[i] === charLower){
            return true 
        }
    }
    return false
    throw new Error("Feature not implemented yet");
}

export function containsWord(expr : string, word : string) : boolean{
    let exprTab = split(expr, " ");
    let wordLower : string = word.toLowerCase();
    for (let i = 0; i < exprTab.length; i++) {
        if (exprTab[i].toLowerCase() === wordLower) {
            return true;
        }
    }
    return false;
}

export function trim(expr : string) : string{
    let temp = "";
    let i = 0 ;
    let j = expr.length - 1 ;
    while (expr[i] === " "){
        i++;
    }
    while (expr[j] === " "){
        j--
    }
    for (let k = i ; k <= j ; k++){
        temp += expr[k];
    }
    return temp 
    throw new Error("Feature not implemented yet");
}


export function is_letter(char : string) : boolean{
   let charUper = char.toUpperCase();
    if ( charUper.charCodeAt(0) >= 65 && charUper.charCodeAt(0) <= 90 ){
        return true
    }
    return false
    throw new Error("Feature not implemented yet");
}


export function split(expr : string, splitter : string) : string[]{
      let temp = "" ;
    let tab = [];
    let j = 0;
    for (let i = 0 ; i < expr.length ;i++){
        if ( expr[i] === splitter){
            tab[j] = temp ;
            j++;
            temp = "";
        }else ( temp += expr[i] )

        if(i === expr.length - 1 ) { 
            tab[j] = temp ;
        }

    }
    return tab ;
    throw new Error("Feature not implemented yet");
}


export function join(exprs : string[], jointer : string) : string{
let temp : string = "";
let exprsToString = "";
for (let i = 0 ; i < exprs.length ; i++){
  exprsToString += exprs[i];
 if ( i != exprs.length - 1 ) {
     exprsToString += jointer;
     }
}
return exprsToString
throw new Error("Feature not implemented yet");
}


export function replace(expr : string, to_replace : string, replace_with : string) : string{
   let exprtab = split(expr," ");
   for (let i = 0 ; i < exprtab.length ; i ++ ){
    if ( exprtab[i] === to_replace){
        exprtab[i] = replace_with;
    }
   }
 let expr_replace = join(exprtab," ");
 return expr_replace
    throw new Error("Feature not implemented yet");
}

export function reverse(expr : string) : string{
    let temp = "";
    for (let i = expr.length - 1 ; i >= 0 ; i--){
        temp += expr[i];
    }
    return temp
    throw new Error("Feature not implemented yet");
}

// contains
console.log("contains");
console.log(contains("Banana","n")); // true
console.log(contains("Hello World","p")); // false
console.log(contains("Lorem ipsum","l")); // true

// trim
console.log("trim");
console.log(trim("     Hello World    ")); // "Hello World"
console.log(trim("Hello World    ")); // "Hello World"
console.log(trim("Hello      World")); // "Hello      World"

// is_letter
console.log("is_letter");
console.log(is_letter("A")); // true
console.log(is_letter("z")); // true
console.log(is_letter("(")); // false
console.log(is_letter("4")); // false


// split
console.log("split");
console.log(split("Hello World", " ")); // ["Hello", "World"]
console.log(split("apple,banana,cherry", ",")); // ["apple", "banana", "cherry"]
console.log(split("abcde", ",")); // ["abcde"]

//join
console.log("\n\njoin");
console.log(join(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
console.log(join(["apple", "banana", "cherry"], "")); // "applebananacherry"
console.log(join([], ", ")); // ""

//replace
console.log("\n\nreplace");
console.log(replace("Hello World", "World", "Universe")); // "Hello Universe"
console.log(replace("Hello World", "o", "a")); // "Hello World"
console.log(replace("Hello World", "World", "")); // "Hello "

//reverse
console.log("\n\nreverse");
console.log(reverse("Hello World")); // "dlroW olleH"
console.log(reverse("")); // ""
console.log(reverse("!@#$%^&*()")); // ")(*&^%$#@!"