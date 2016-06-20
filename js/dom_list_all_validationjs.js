var myAffP = document.getElementById('myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}


var boxes = document.querySelectorAll("#output > ol > li > input[type='checkbox']"),
    btnCheck = document.getElementById('button-check'),
    btnUncheck = document.getElementById('button-uncheck');

function checkOrUncheckAll(status) {
    for (var i = 0, c = boxes.length; i < c; i++) {
        boxes[i].checked = status;
    }
}

if (btnCheck && btnUncheck) {
    btnCheck.addEventListener('click', function () {
        checkOrUncheckAll(true);
    }, false);
    btnUncheck.addEventListener('click', function () {
        checkOrUncheckAll(false);
        return false;
    }, false);
}


/*
 <section class="block_gc7" id="output">

 <p class="center">
 <button type="button" id="button-check">Cocher tout</button>
 <button type="button" id="button-uncheck">Décocher tout</button>
 </p>

 <ol class="left">
 <li>
 <input type="checkbox"> A propos d'un tuto
 </li>
 <li>
 <input type="checkbox"> merci
 </li>
 <li>
 <input type="checkbox"> Ca marche ?
 </li>
 <li>
 <input type="checkbox"> Corrections sur le tuto Ada
 </li>
 <li>
 <input type="checkbox"> tuto javascript
 </li>
 <li>
 <input type="checkbox"> Kassdédi tqvu
 </li>
 <li>
 <input type="checkbox"> Supprimer les balises &lt;br /&gt;</li>
 <li>
 <input type="checkbox"> Recrutement
 </li>
 <li>
 <input type="checkbox"> Question concernant le tuto Hammer 4
 </li>
 <li>
 <input type="checkbox"> impossibilité d'accès aux cours
 </li>
 </ol>


 <input type="text" id="stuffInput"/>
 <output id="stuffOutput"></output>
 <!--  <h1>JS</h1>-->
 <!--  <p id="myP">Ceci est un paragraphe !</p>-->
 <p id='myAffP'></p>

 </section>
 */


// console.log(target);
// aff(target);
// console.log(myBtn);

aff('');

console.log('Fini');
