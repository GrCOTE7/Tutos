/**
 * Created by cote on 19/06/16.
 */
document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    if (n) {
        console.log('ok');
        document.getElementById('myAffP').innerHTML += n + ' ';
    }
}


// var mainDiv = document.createElement('div'),
//     container = document.getElementById('output');
// mainDiv.id = 'divTP2';
// mainDiv.className = 'bloc_gc7';


var container = document.getElementById('output'),
    mainDiv = document.createElement('div');
mainDiv.id = 'divTP3';
mainDiv.className = 'block_gc7 minimal';

var languages = [{
    t: 'JavaScript',
    d: 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'
}, {
    t: 'JScript',
    d: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
}, {
    t: 'ActionScript',
    d: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'
}, {
    t: 'EX4',
    d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
}];

var pLangages = document.createElement('p'),
    pLangagesText = document.createTextNode('Langages basés sur ECMAScript :');
pLangages.appendChild(pLangagesText);


// On crée la liste, et on boucle pour ajouter chaque item
var defList = document.createElement('dl'),
    defTerm, defTermText,
    defDefn, defDefnText;

for (var i = 0, c = languages.length; i < c; i++) {
    defTerm = document.createElement('dt');
    defDefn = document.createElement('dd');

    defTermText = document.createTextNode(languages[i].t);
    defDefnText = document.createTextNode(languages[i].d);

    defTerm.appendChild(defTermText);
    defDefn.appendChild(defDefnText);

    defList.appendChild(defTerm);
    defList.appendChild(defDefn);
}


mainDiv.appendChild(pLangages);
mainDiv.appendChild(defList);

container.appendChild(mainDiv);


// console.log(e.firstChild.data);
// aff('<h1>TP3</h1>');
aff('');
// 15:00 - Médiathèque - Tabeltte Gaming
