/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100



// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
function LancerLeJeu()
{
var solution = Math.floor(Math.random() * 100) + 1;
var statut= 'perdu';
var nbrEssai = 1;
while (statut === 'perdu' && nbrEssai < 7)
	{
	var proposition = prompt('Entrez un nombre');	
	if(proposition == solution)
		{
		console.log('Bravo vous avez gagné');
		var statut = "victoire";
		
		}
	else if(proposition < solution)
		{
		console.log(proposition+ ' est trop petit');
		nbrEssai++;
		}
	else if(proposition > solution)
		{
		console.log(proposition+ ' est trop grand');
		nbrEssai++;
		}
	
	}
	
	if(statut == 'perdu')
	{
		console.log('Désolé mais vous avez perdu ... Il fallait trouver '+solution);
		console.log('Vous pouvez relancer une partie :-)');
	}
	
	else
	{
		console.log("Vous avez trouvé le chiffre Mystère en "+nbrEssai+ " essai(s)");	
		console.log('Vous pouvez relancer une partie :-)');
	}







console.log(solution);
	
}