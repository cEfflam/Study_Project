
/*

Enter my Kingdom est un jeu qui consiste à faire deviner une règle secrète 
aux participants. Cette règle détermine si la personne a le droit ou non de
rentrer dans notre royaume.
La règle en question est la suivante : Si la personne énonce un mot commençant par
la même lettre que son prénom elle a le droit de rentrer, sinon non. Cependant si le
mot énoncé est le même que la tentative précédente, l'accès lui est également refusé.

On considère que si une personne parvient à rentrer dans le royaume 5 fois d'affilée
c'est qu'elle a compris la règle et a donc remporté le jeu et n'a plus besoin de
continuer à deviner des mots.

Le jeu se déroule donc en deux étapes :

- Premièrement on va demander de rentrer les noms de tous les participants.
- Ensuite on va demander à tour de rôle à chaque participant de deviner un mot et
    l'informer de si l'accès au royaume lui est autorisé ou non ce tour ci.

*/


import {question} from 'readline-sync';
import { containsWord } from "./StringManipulation";


function compare_name_word ( name : string , word : string) : boolean {
    let name_lowerCase = name.toLowerCase();
    let word_lowerCase =  word.toLowerCase();
    if (name_lowerCase[0] == word_lowerCase[0]){
        return true
    }
    return false
}

function try_enter (name : string , previousGuesses : string) : [boolean,string]{
    let guess: string = question ("Enter a password: ");
    guess = guess.toLowerCase();
    while ( guess.length < 1 || !(isNaN(Number(guess))) ) {
        console.log("Enter a correct word for play");
        guess = question ("Enter a password: ");
    }
    if(compare_name_word(name , guess ) && !(containsWord(previousGuesses,guess)) ){
        console.log("You enter the kingdom!");
        return [true , guess]
    }
    console.log(" ");
    console.log("You cannot pass");
    return [false , ""]
}

function ask_number_of_player () : string [][] {
    let player : string[][] = [];
    let p : number = 1;
    let number_participant: string = question ("Please enter the number of players: ");
    while (Number(number_participant) < 1 || isNaN(Number(number_participant))) {
        console.log("Enter a correct number for play");
        number_participant = question ("Please enter the number of players: ");
    }
    for (let i = 0; i < Number(number_participant); i ++){
        player.push([]);
        p = i + 1;
        let name = question(" Player " + p + " enter your name: " ) ;
        while ( name.length < 2 || !(isNaN(Number(name))) ) {
            console.log("Enter a correct Player name for play");
            name = question(" Player " + p + " enter your name: " ) ;
        }
        player[i].push(name);
        for (let j = 1; j < 3 ; j++) {
            player[i].push("");
        }  
    }
    return player
}

function display_combo (name : string , expr : string ) {
    let display_combo : string = "";
    for (let i = 0 ; i < Number(expr) ; i++){
        display_combo += "X";
    }
    for (let j = display_combo.length ; j < 5 ; j++){
        display_combo += "-";
    }
    console.log(name + " your current combo is: [" + display_combo + "]");
}



// Pour une lisibilité du code je tien à expliqer que 
// player[i][0] = "Name" 
// player[i][1] = "Liste des last guesses"
// player[i][2] = "combo_actuel"
// et mon text en anglais car la console afficher mal les accents 
function enterMyKingdom(){
    let player : string [][] = [];
    player = ask_number_of_player();
    console.log(" ");
    let winner = "";
    let round = 1 ;
    let result: [boolean, string] = [false , ""];
    while (winner.length < 1 ) {
        (console.log("----------ROUND " + round + " !----------" ));
        for (let i = 0 ; i < player.length ; i++){
            console.log(" ");
            console.log(" ");
            console.log("It is the turn of: " + player[i][0].toUpperCase());
            console.log(" ");
            display_combo(player[i][0] , player[i][2]);
            result = try_enter(player[i][0] , player[i][1]);
            if (result[0] == true ){
                player[i][1] += " " + result[1];
                let temp = Number(player[i][2]) ;
                temp++;
                player[i][2] = temp.toString();
            }else if(result[0] == false){
                player[i][2] = "0";
            }
            if ( Number(player[i][2]) == 5){
                winner = player[i][0];
            }
        }   
        console.log(" ");
        console.log(" ");
        round ++ 
    }
    (console.log("----------THE WINNER IS " + winner + " WELL PLAYED !----------" ));
}




enterMyKingdom();






