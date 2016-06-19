/**
 * Created by cote on 19/06/16.
 */
document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    document.getElementById('myAffP').innerHTML += n + ' ';
}

// On crée l'élément conteneur
var divTP1 = document.createElement('div');
divTP1.id = 'divTP1';
divTP1.className = 'bloc_gc7';

// On crée tous les nœuds textuels, pour plus de facilité
var textNodes = [
    document.createTextNode('Le '),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('organisme de standardisation'),
    document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '),
    document.createTextNode('World Wide Web'),
    document.createTextNode('.'),
    document.createTextNode('(Écrit par JS)')
];

// On crée les deux <strong> et les deux <a>
var w3cStrong1 = document.createElement('strong'),
    w3cStrong2 = document.createElement('strong');

var orgLink = document.createElement('a'),
    wwwLink = document.createElement('a');

w3cStrong1.appendChild(textNodes[1]);
w3cStrong2.appendChild(textNodes[3]);

var commentGC7 = document.createElement('p'),
    commentGC7i = document.createElement('i');
commentGC7i.appendChild(textNodes[9]);


orgLink.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
orgLink.title = 'Organisme de normalisation';
orgLink.appendChild(textNodes[5]);

wwwLink.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLink.title = 'World Wide Web';
wwwLink.appendChild(textNodes[7]);

// On insère le tout dans mainDiv
divTP1.appendChild(textNodes[0]);
divTP1.appendChild(w3cStrong1);
divTP1.appendChild(textNodes[2]);
divTP1.appendChild(w3cStrong2);
divTP1.appendChild(textNodes[4]);
divTP1.appendChild(orgLink);
divTP1.appendChild(textNodes[6]);
divTP1.appendChild(wwwLink);
divTP1.appendChild(textNodes[8]);
divTP1.appendChild(commentGC7);
commentGC7.appendChild(commentGC7i);


// On insère mainDiv dans le <body>
document.body.appendChild(divTP1);

// console.log(e);
// console.log(divTP1, 'Lien 2: ' + wwwLink.title);

// console.log(e.firstChild.data);
aff('<i>(Écrit dans le HTML)</i>');
// 15:00 - Médiathèque - Tabeltte Gaming
