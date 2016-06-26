var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');

// var output = document.getElementById('output');
var list = document.getElementById('zozor-books'), li6 = list.lastChild.previousSibling;


var newLi6Text = document.createTextNode('Zozor à Pôle-Emploi'),
    newLi8Text = document.createTextNode('Zozor fait fortune');

var newLi6 = document.createElement('li'),
    newLi8 = newLi6.cloneNode(newLi6);

newLi6.appendChild(newLi6Text);

li6.parentNode.insertBefore(newLi6, li6);


newLi8.appendChild(newLi8Text);
list.appendChild(newLi8);


console.log(li6.innerHTML);

// console.log('Fini');

/*
 <ol id="zozor-books">
 <li>Zozor à la ferme</li>
 <li>Zozor à l'école</li>
 <li>Zozor en vacances</li>
 <li>Zozor en classes de neige</li>
 <li>Zozor le syndicaliste</li>
 <li>Zozor en grève</li>
 </ol>
 */
