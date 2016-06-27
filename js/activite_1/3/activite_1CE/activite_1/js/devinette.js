/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

var nombreCache = 52 ;
var nombreDonne = 0 ;
var i = 0 ;

while (nombreDonne !== nombreCache && i <= 10) {
    nombreDonne = Number(prompt("Entrez un chiffre compris entre 1 et 100"));
    
    if (nombreDonne < nombreCache) {
        console.log("le nombre à trouver est plus grand");
    }
    else if (nombreDonne > nombreCache){
        console.log("le nombre à trouver est plus petit")
    } 
    i++;
    
}

if (i<=10) {
    console.log("bravo la solution était bien " + nombreCache + "\n vous avez trouvé en " + i-1 + " essai(s) : GAGNE"  );
}
else {
    console.log("vous avez atteint le nombre maximal d'essais : PERDU")
}


// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme