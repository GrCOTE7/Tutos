/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var userNumber, result, triesLeft, maxTries;
maxTries = 6;
triesLeft = maxTries;

while( triesLeft > 0 ) {
	triesLeft --;

	userNumber = Number( prompt("Entrez un nombre entre 1 et 100 :") );
	result = String( userNumber + " est " );

	if( userNumber < solution && userNumber >= 1 ){
		result += "trop petit. Il vous reste "+ triesLeft +" essai(s) !";
	} else if ( userNumber > solution && userNumber <= 100  ) {
		result += "trop grand. Il vous reste "+ triesLeft +" essai(s) !";
	} else if ( userNumber === solution ) {
		result += "le bon nombre. Vous avez gagné en "+ ( maxTries - triesLeft ) +" essai(s)";
		triesLeft = 0;
	} else {
		result += "invalide. Il vous reste "+ triesLeft +" essai(s) !";
	}

	console.log( result );
}

console.log( "La solution était "+ solution +".\nMerci d'avoir joué. (F5 pour recommencer)" );