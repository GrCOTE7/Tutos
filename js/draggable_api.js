(function () {

    var elt = document.querySelector('#draggable');

    var dragImg = new Image(); // Il est conseillé de précharger l'image, sinon elle risque de ne pas s'afficher pendant le déplacement
    dragImg.width = 80;
    dragImg.height = 80;
    dragImg.src = '../imgs/avatar_none.png';
    // dragImage = changerImage(dragImg, '../imgs/avatar_none.png', 5, 5);

    elt.addEventListener('dragstart', function (e) {
        e.dataTransfer = undefined;
        e.dataTransfer.setData('text/plain', "Ce texte sera transmis à l'élément HTML de réception");
        e.dataTransfer.setDragImage(dragImg, 40, 40);
        console.log(e.x);
    });

    elt.addEventListener('dragend', function () {
        console.log('End !');
    });

    // img.addClass = 'draggable';
    elt.appendChild(dragImg);

    // aff(dragImg);

})();

