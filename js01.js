/**
 * Created by cote on 18/06/16.
 */
console.log('Go !');

var e = document.getElementById('myP');
e.innerHTML = '';
function aff(n, e) {
    if (typeof e === 'undefined') e = document.getElementById('myP');
    e.innerHTML += n + ' ';
    // console.log(elem);
}


/*
 var n = 0;
 while (n < 10) {
 aff(n, e);
 n++;
 }
 */

// aff('<hr>', e);

/*
 while (i < 10) {
 i++;
 // aff(i + ' ', e);
 }
 */

// aff('<hr>', e);

// code isolé
/*
 (function () {
 var ohai = 'Hello world !';
 aff(ohai, e);
 })();
 */

/*
 function askNumber() {
 var number;
 do {
 number = parseInt(prompt('Donne un nombre !'));
 } while (isNaN(number));
 return number;
 }
 aff(askNumber(), e);
 */

/*
 var cousinsString = 'Pauline Guillaume Clarisse',
 cousinsArray = cousinsString.split(' '),
 cousinsString_2 = cousinsArray.join('-');
 aff(cousinsArray['length'], e);
 alert(cousinsString);
 alert(cousinsArray);
 alert(cousinsString_2);
 */



/*
 var family = {
 self: 'Sébastien',
 sister: 'Laurence',
 brother: 'Ludovic',
 cousin_1: 'Pauline',
 cousin_2: 'Guillaume'
 };

 for (var id in family) {
 aff(family[id], e);
 }
 aff('<hr>', e);
 aff(family.brother, e);
 aff('<hr>', e);
 */
/*
 var prenoms = 'Pauline Guillaume Clarisse';
 aff(prenoms, e);
 aff('<hr>', e);
 var prenomsArray = prenoms.split(' ');
 aff(prenomsArray, e);
 */


/*
 var nicks = [],
 nick;

 while (true) {
 nick = prompt('Entrez un prénom :');

 if (nick) {
 nicks.push(nick); // Ajoute le nouveau prénom ainsi qu'une espace juste après
 } else {
 break; // On quitte la boucle
 }
 }
 aff(nicks.length, e);
 if (nicks.length)
 aff(nicks.join(' '), e); // Affiche les prénoms à la suite

 sayHello();
 */

/*
 var array = ['a', 0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

 for (var i = 0, c = array.length; i < c; i++) {
 alert(array[i]);
 aff(array[i]);
 }
 */

/*
 var rep = '';
 while (!rep) {
 rep = prompt('Quoi ?');
 }
 alert(rep);
 */

/*
 var family = {
 pere: 'Jean',
 mere: 'Andrée',
 frere: 'Sam',
 soeur: 'Anne'
 };

 for (var id in family) {
 aff(id + ' : ' + family[id] + '<br>');
 }
 */

/*
 // On crée un objet basique.
 var helloObject = {
 english: 'Hello',
 french: 'Bonjour',
 spanish: 'Hola'
 };

 // Et on l'affiche.
 console.log(helloObject);


 // Tant qu'à faire, on affiche aussi un tableau.
 var helloArray = ['Hello', 'Bonjour', 'Hola'];
 console.log(helloArray);

 */

/*
 // On déclare une variable contenant un texte quelconque.
 (function () {
 var myVar = 0;

 // Toutes les secondes, on affiche le contenu de cette variable dans la console.
 setInterval(function () {
 e.innerHTML = '';
 aff(myVar++);
 }, 1000);
 })();

 */
// On utilise ci-dessous une IIFE, on déclare donc une fonction anonyme que l'on exécute immédiatement.
(function anonymousWasHere() {
    console.log('Hi!');
})();

aff('<hr>Ok');
console.log('%cFini.', "color:yellow; background:blue; font-size: 12pt");

