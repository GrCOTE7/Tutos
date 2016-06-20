document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    if (n) document.getElementById('myAffP').innerHTML += n + ' ';
}

/*
 <a href="#" onclick="alert('Vous avez cliqué !'); return true;">Cliquez-moi !</a>
 */


var output, button;

var items = document.querySelectorAll('#output li'), text;

for (var i = 0, c = items.length; i < c; i++) {
    items[i].addEventListener('click', function () {
        if (text = prompt("Modifiez le texte", this.innerHTML)) {
            this.innerHTML = text;
        }
    }, true);
}


// console.log(myBtn);

aff('');

console.log('FIni');
