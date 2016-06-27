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

/*

 <section class="block_gc7" id="output">

 <span id="mascot"> </span>

 <p id='myAffP'></p>

 </section>
 */
