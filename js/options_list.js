var myAffP = document.getElementById('myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}

/*
 <a href="#" onclick="alert('Vous avez cliqué !'); return true;">Cliquez-moi !</a>
 */
var list = document.getElementById('list');
console.log(list.options[0].firstChild.data, list.options[1].firstChild.data, list.options[2].firstChild.data);

list.addEventListener('change', function () {
    aff();
    console.log(list.options[list.selectedIndex]);
    console.log(list.options[list.selectedIndex].firstChild.data);
    aff('Votre sexe: ' + list.options[list.selectedIndex].innerHTML);
});

// console.log(myBtn);

aff('');

console.log('Fini');
