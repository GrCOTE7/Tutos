/**
 * Created by cote on 19/06/16.
 */
document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    document.getElementById('myAffP').innerHTML += n + ' ';
}


// var mainDiv = document.createElement('div'),
//     container = document.getElementById('output');
// mainDiv.id = 'divTP2';
// mainDiv.className = 'bloc_gc7';


var container = document.getElementById('output'),
    mainDiv = document.createElement('div');
console.log(container);
mainDiv.id = 'divTP2';
mainDiv.className = 'bloc_gc7';


var textNodes = [
    document.createTextNode('Langages basés sur ECMAScript :'),
    document.createTextNode('JavaScript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];

var pLangages = document.createElement('p');
pLangages.appendChild(textNodes[0]);


var langages = document.createElement('ul');
for (var i = 1, c = textNodes.length; i < c; i++) {
    langages.appendChild(document.createElement('li')).appendChild(textNodes[i]);
}


mainDiv.appendChild(pLangages);
mainDiv.appendChild(langages);

container.appendChild(mainDiv);


// console.log(e.firstChild.data);
aff('<h1>TP2</h1>');
// 15:00 - Médiathèque - Tabeltte Gaming
