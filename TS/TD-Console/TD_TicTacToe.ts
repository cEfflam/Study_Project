/*

Projet - Morpion

L'objectif est d'implémenter un jeu de morpion jouable dans le terminal, au tour par tour,
entre deux joueurs humains.

Le plateau est une grille 3x3. Les deux joueurs sont "X" et "O". Les cases vides sont
représentées par un espace " ". C'est toujours "X" qui commence.

À chaque tour, le jeu doit :
- Afficher le plateau dans l'état actuel.
- Demander au joueur actif d'entrer les coordonnées de la case où il veut jouer
- Refuser le coup et redemander si la case est déjà occupée.
- Vérifier si le joueur vient de gagner, auquel cas la partie s'arrête et on l'annonce.
- Vérifier si le plateau est plein sans gagnant, auquel cas on annonce un match nul.
- Sinon, passer la main à l'autre joueur.

Un joueur gagne s'il aligne 3 de ses pions : sur une ligne, une colonne, ou une diagonale.

Pour lire une entrée dans le terminal, vous pouvez utiliser la librairie readline-sync :

    import {question} from "readline-sync";

    let row : string = question("Tour de X - Ligne (0-2) : ");
    let col : string = question("Tour de X - Colonne (0-2) : ");

Exemple de déroulement d'une partie :

       |   |  
    ---+---+---
       |   |  
    ---+---+---
       |   |  
    
    Tour de X - Ligne (0-2) : 1
    Tour de X - Colonne (0-2) : 1
    
       |   |  
    ---+---+---
       | X |  
    ---+---+---
       |   |  
    
    Tour de O - Ligne (0-2) : 0
    Tour de O - Colonne (0-2) : 0
    
     O |   |  
    ---+---+---
       | X |  
    ---+---+---
       |   |  
    ...

*/

import { question } from "readline-sync";




function displayTab(array : string [][]): void{
   console.log(" ")
   for(let i = 0 ; i < array.length;i++){
         console.log(" "+ array[i][0] +" | " + array[i][1]  + " | "+ array[i][2])
         if (i != array.length - 1 ){
         console.log("---+---+---")   
         }  
   }
    console.log(" ")  
}  


function askforplay(number : number): string []{
   let position : string  [] = ["","",""];
    while( (isNaN(Number(position[0])) || isNaN(Number(position[1])) || Number(position[0]) < 0 || Number(position[0]) > 2 || Number(position[1]) < 0 || Number(position[1]) > 2)  ){
      if (number % 2 == 0 ) {
      position[2] = "X";
      position[0] = question("Tour de X - Ligne (0-2) : ");
      position[1] = question("Tour de X - Colonne (0-2) : ");
      } else {
      position[2] = "O";
      position[0] = question("Tour de O - Ligne (0-2) : ");
      position[1] = question("Tour de O - Colonne (0-2) : ");
      }
    }
   return position
}


function ValidationPos(array :string[][] , pos : string[]): boolean {
   let row : number= Number(pos[0]);
   let col : number= Number(pos[1]);
   if(array[row][col] == " " ){
      array[row][col] = pos[2];
      return true
   }  else {
   console.log("La case a déjà été jouée")
   return false
   }
}



function checkWin(array: string[][], player: string): boolean {

    for (let i = 0; i < 3; i++) {
        if (array[i][0] === player && array[i][1] === player && array[i][2] === player) {
            return true;
        }
    }

  for (let j = 0; j < 3; j++) {
        if (array[0][j] === player && array[1][j] === player && array[2][j] === player) {
            return true;
        }
    }
    let diag1 = true;
    let diag2 = true;
    for (let i = 0; i < 3; i++) {
        if (array[i][i] !== player) diag1 = false;
        if (array[i][2 - i] !== player) diag2 = false;
    }
      return diag1 || diag2;
}



function play_tictactoe(): void {
let array : string [][] =[[" "," "," "],[" "," "," "],[" "," "," "]]; 
 for (let tour = 0; tour < 9; tour++){
    displayTab(array);
    let pos = askforplay(tour);
    while( !(ValidationPos(array,pos))){
        pos = askforplay(tour);
        ValidationPos(array,pos);
    }
    if (checkWin(array, pos[2])) {
        displayTab(array);
        return console.log(pos[2] + " a gagné la partie!");
    }
 }
 displayTab(array);
 console.log("match nul!");
}


play_tictactoe();

let arrayTest : string [][] =[["O","X","X"],["O","O","O"],["O","O","O"]]; 
displayTab(arrayTest);
askforplay(1);
askforplay(6);
