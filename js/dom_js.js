var myAffP = document.getElementById('myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}


var tps = 0;
setInterval(function () {
    tps++;
    console.log(' secondes depuis démarrage du script');
}, 1000);


console.log('Fini');
