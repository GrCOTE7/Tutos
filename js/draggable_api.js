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
        e.dataTransfer.setDragImage(dragImg, 100, 100);
        console.log('(' + e.x + ',' + e.y + ')');
    });

    elt.addEventListener('dragend', function () {
        // console.log('End !');
    });

    dragImg.className = 'rounded';
    // elt.appendChild(dragImg);

    // aff(dragImg);

    var dropZone = document.querySelector('#dropZone')

    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault(); // Annule l'interdiction de drop
        // console.log(e);
    });

    dropZone.addEventListener('drop', function (e) {
        e.preventDefault(); // Cette méthode est toujours nécessaire pour éviter une éventuelle redirection inattendue
        dropZone.style.borderStyle = 'solid';
        console.log(e);
        aff(e.dataTransfer.getData('text/plain'), 1);

        var files = e.dataTransfer.files,
            filesLen = files.length,
            filenames = "";

        for (var i = 0; i < filesLen; i++) {
            filenames += '\n' + files[i].name;
        }

        alert(files.length + ' fichier(s) :\n' + filenames);
    });

    dropZone.addEventListener('dragenter', function () {
        dropZone.style.borderStyle = 'dashed';
    });

    dropZone.addEventListener('dragleave', function () {
        dropZone.style.borderStyle = 'solid';
    });

// Cet événement détecte n'importe quel drag & drop qui se termine, autant le mettre sur « document » :
    document.addEventListener('dragend', function () {
        aff("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas si c'est un succès ou non.", 1);
    });
})();

