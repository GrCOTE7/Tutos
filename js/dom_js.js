document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    if (n) document.getElementById('myAffP').innerHTML += n + ' ';
}

/*
 <a href="#" onclick="alert('Vous avez cliqué !'); return true;">Cliquez-moi !</a>
 */


var container = document.getElementById('output'),
    myP = document.createElement('p'),
    lk = document.createElement('a');

var txt = document.createTextNode('My JS a fait ce lien nommé: '),
    lkTxt = document.createTextNode('Le Lien');

lk.href = '#';
lk.title = 'Title du Lien';
lk.target = '_blank';
lk.id = 'lk';

lk.appendChild(lkTxt);

myP.appendChild(txt);
myP.appendChild(lk);

container.appendChild(myP);

var elt = document.getElementById('clickme');
var myEvent = function (e) {
    e.target.innerHTML = "Vous m'avez cliqué !";
    console.log(e);
};

// Le false signale bouillement -Event sur l'elt en derniere position hierarchique DOM
elt.addEventListener('click', myEvent, false);
// elt.removeEventListener('click', myFunction);

aff('<h1>JS</h1>');

console.log('FIni');
