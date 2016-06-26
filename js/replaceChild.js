var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');

var zozor = document.querySelector('#mascot');

if (zozor) {

    fig = document.createElement('figure'),
        img = document.createElement('img'),
        caption = document.createElement('figcaption');

    img.src = 'data/zozor-happy.png';
    img.alt = caption.innerHTML = 'Photo de zozor';

    fig.appendChild(img);
    fig.appendChild(caption);

    zozor.parentNode.replaceChild(fig, zozor);

}
// console.log(output.firstChild.nextSibling.innerHTML);
// console.log(output.lastChild.previousSibling.innerHTML);

/*
 Autre variante pour la fin
 (Intéressante si le tableau était + long, ou qu'il faille positionner + loin que rang 2)

 if (output) {
 trs = output.getElementsByTagName('tr');

 if (trs[2]) { // Le <tr> de Chrome
 trs[2].parentNode.insertBefore(trNew, trs[2]);
 }
 }
 */
