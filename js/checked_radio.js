var myAffP = document.getElementById('myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}

/*
 <a href="#" onclick="alert('Vous avez cliqué !'); return true;">Cliquez-moi !</a>
 */

function check() {
    aff();
    var inputs = document.querySelectorAll('input[type=radio]:checked');
    for (var i = 0, c = inputs.length; i < c; i++) {
        aff('La case cochée est la n°' + inputs[i].value);
    }
}


// console.log(myBtn);

aff('');

console.log('FIni');
