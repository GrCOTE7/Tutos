document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    if (n) document.getElementById('myAffP').innerHTML += n + ' ';
}

/*
 <a href="#" onclick="alert('Vous avez cliqué !'); return true;">Cliquez-moi !</a>
 */


var elt = document.querySelector('#output button');
var myEvent = function (e) {
    // e.returnValue = false;
    e.target.firstChild.data = "Vous m'avez cliqué !";
    console.log(e);
};

// Le false (default) signale bouillement -Event sur l'elt en derniere position hierarchique DOM
elt.addEventListener('click', myEvent, false);
// elt.removeEventListener('click', myFunction);

var container = document.getElementsByTagName('p');
var myBtn = elt.cloneNode(true);
container[0].appendChild(myBtn);


console.log(myBtn);

aff('<h1>JS</h1>');

console.log('FIni');
