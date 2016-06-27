/* 
 Activité : jeu de devinette
 */

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux
// vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essai = 0, nbEssaiIni = nbEssaiRestant = 6;
while (nbEssaiRestant) { // On peut jouer
    // Filtrage chiffre est bien un nombre et bien ds fourchette
    // (Non demandé dans l'ennoncé)
    while (essai < 1 || essai > 100 || isNaN(essai)) {
        essai =
            Number(prompt(
                'Veuillez saisir un chiffre entre 1 et 100 (inclus)'
                + '\n\n(Essai n°' + (nbEssaiIni + 1 - nbEssaiRestant) + '/' + nbEssaiIni + ' )')
            );
    }
    nbEssaiRestant--;
    if (essai == solution) {
        var nbCoups = (nbEssaiIni - nbEssaiRestant),
            plur = (nbCoups > 1) ? 's' : '';
        console.log(solution + '...? Gagné ! En ' + nbCoups + ' coup' + plur + ' !');
        break;
    }
    else {
        console.log(essai + ' est trop ' + (essai > solution ? 'grand' : 'petit'));
        essai = '';
    }
    if (!nbEssaiRestant) {
        console.log('Perdu ! La solution était ' + solution);
        break;
    }

}

