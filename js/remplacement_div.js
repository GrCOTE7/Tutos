var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');

var output = document.getElementById('output'),
    citation = output.firstChild.textContent,
    auteur = output.firstElementChild;

output.firstChild.textContent = '';
output.removeChild(auteur);

document.getElementsByTagName('body')[0].removeChild(output);

var excontent = output.innerHTML;


var coucou = document.createTextNode(citation + "\n"),
    myB = document.createElement('blocquote'),
    output = document.createElement('section');

output.setAttribute('id', 'output');
output.className = 'block_gc7';

document.getElementsByTagName('body')[0].appendChild(output);
myB.appendChild(coucou);
myB.appendChild(auteur);
output.appendChild(myB);

var ajout = document.createElement('div');
ajout.innerHTML = excontent;
output.appendChild(ajout);

// output.appendChild(excontent);

// output.firstChild = '<blocquote>' + citation;
// output.firstElementChild = auteur + '</blocquote>';


// console.log(content);
// console.log(citation);
console.log(auteur);


console.log('Fini');
