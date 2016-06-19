document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    if (n) document.getElementById('myAffP').innerHTML += n + ' ';
}

aff('<h1>JS</h1>');
