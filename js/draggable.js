var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');

(function () { // On utilise une IIFE pour ne pas polluer l'espace global
    var storage = {}; // Contient l'objet de la div en cours de déplacement

    function init() { // La fonction d'initialisation
        var elements = document.querySelectorAll('.draggableBox'),
            elementsLength = elements.length;
        console.log(elementsLength + ' éléments draggable');

        for (var i = 0; i < elementsLength; i++) {

            elements[i].addEventListener('mousedown', function (e) { // Initialise le drag & drop
                var s = storage;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
            });

            elements[i].addEventListener('mouseup', function () { // Termine le drag & drop
                storage = {};
            });
        }

        document.addEventListener('mousemove', function (e) { // Permet le suivi du drag & drop
            var target = storage.target;

            if (target) {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
    }

    init(); // On initialise le code avec notre fonction toute prête.
})();

aff('Ok');

// <section class="block_gc7" id="output">
//     <p id='myAffP'></p>
//
//     <div class="draggableBox">1</div>
//     <div class="draggableBox">2</div>
//     <div class="draggableBox">3</div>
//
//
//     </section>

