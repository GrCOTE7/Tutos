/**
 * Created by cote on 19/06/16.
 */
var e = document.getElementById('myP');
e.innerHTML = '';
function aff(n) {
    e = document.getElementById('myP');
    e.innerHTML += n + ' ';
    // console.log(elem);
}

function num2Letters(n) {

    if (isNaN(n) || n < 0 || 999 < n) {
        return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
    }

    var u2L = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit',
            'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize',
            'dix-sept', 'dix-huit', 'dix-neuf'],
        d2L = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante',
            'soixante', 'quatre-vingt', 'quatre-vingt'];

    var u = n % 10,
        d = (n % 100 - u) / 10,
        c = (n % 1e3 - n % 100) / 100;


    var unites, dizaines, centaines;


    if (n === 0) {
        return 'zéro';
    } else {

        // Traitement des unités

        unites = (u === 1 && d > 0 && d !== 8 ? 'et-' : '') + u2L[u];

        // Traitement des dizaines

        if (d === 1 && u > 0) {
            dizaines = u2L[10 + u];
            unites = '';
        }
        else if (d === 7 || d === 9) {

            dizaines = d2L[d] + '-' + (d === 7 && u === 1 ? 'et-' : '')
                + u2L[10 + u];
            unites = '';

        } else {

            dizaines = d2L[d];

        }

        dizaines += (u === 0 && d === 8 ? 's' : '');

        // Traitement des centaines

        centaines = (c > 1 ? u2L[c] + '-' : '')
            + (c > 0 ? 'cent' : '')
            + (c > 1 && d == 0 && u == 0 ? 's' : '');


        console.log('c: %s  - d: %s - u: %s', c, d, u);
        console.log('%s  - %s - %s', centaines, dizaines, unites);
        // Retour de la solution
        return centaines + (centaines && dizaines ? '-' : '')
            + dizaines + (centaines && unites || dizaines && unites ? '-' : '')
            + unites;

    }
}


var userEntry;

while (userEntry =
    prompt('Indiquez le nombre à écrire en toutes lettres (entre 0 et 999) :')) {

    aff(userEntry + ': ' + num2Letters(parseInt(userEntry, 10)) + '<hr>');

}
/*
 for (i = 0; i <= 999; i++) {
 aff(i + ' : ' + num2Letters(i) + '<br>');
 }
 */

aff('<hr>Ok');
