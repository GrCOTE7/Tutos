var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');


var emp1 = {
    nom: "Ochon",
    prenom: "Paul"
};
var emp2 = {
    nom: "Diossy",
    prenom: "Daisy"
};
var employes = [emp1, emp2];
console.log(employes[1].nom);


aff('');
