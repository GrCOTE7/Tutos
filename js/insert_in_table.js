var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');

var output = document.querySelector('#output table tbody tr').nextElementSibling,
    ffPM = document.createElement('td'),
    ffD = ffPM.cloneNode(ffPM),
    ffN = document.createElement('th'),
    ffTr = document.createElement('tr');
ffN.setAttribute('scope', 'row');
ffN.appendChild(document.createTextNode('Firefox'));
ffD.appendChild(document.createTextNode('Mozilla'));
ffPM.appendChild(document.createTextNode('27,8%'));
ffTr.appendChild(ffN);
ffTr.appendChild(ffD);
ffTr.appendChild(ffPM);
if (output)
    output.parentNode.insertBefore(ffTr, output);

console.log(output);
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
 

 <section class="block_gc7" id="output">

 <table>
 <thead>
 <tr>
 <th scope="col">Navigateurs</th>
 <th scope="col">Développeurs</th>
 <th scope="col">Parts de marché</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th scope="row">Internet Explorer</th>
 <td>Microsoft</td>
 <td>33,8%</td>
 </tr>
 <tr>
 <th scope="row">Chrome</th>
 <td>Google</td>
 <td>24,4%</td>
 </tr>
 <tr>
 <th scope="row">Safari</th>
 <td>Apple</td>
 <td>11,8%</td>
 </tr>
 </tbody>
 </table>


 <p id='myAffP'></p>

 </section>

 */
