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

function getNInLetter(n) {

    var u = n % 10,
        d = ((n - u) / 10) % 10,
        c = ((n - n % 100)) / 100;

    var unit = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'],
        seiz = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'],
        diza = ['vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'],
        centaine = 'cent';


    console.log('%s  - %s - %s', c, d, u);
    return n + ' en lettre : ';
}

// aff(getNInLetter(365));
// aff(getNInLetter(123));
aff(getNInLetter(159));

aff('<hr>Ok');
