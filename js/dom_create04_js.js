/**
 * Created by cote on 19/06/16.
 */
document.getElementById('myAffP').innerHTML = '';
function aff(n) {
    if (n) {
        document.getElementById('myAffP').innerHTML += n + ' ';
    }
}


// var mainDiv = document.createElement('div'),
//     container = document.getElementById('output');
// mainDiv.id = 'divTP2';
// mainDiv.className = 'bloc_gc7';


var container = document.getElementById('output'),
    mainDiv = document.createElement('div');
mainDiv.id = 'divTP4';
// mainDiv.className = 'block_gc7';


var textNodes = [
        document.createTextNode('Uploader une image'),
        document.createTextNode('Image à uploader : ')
    ],
    form = document.createElement('form'),
    fieldset = document.createElement('fieldset'),
    legend = document.createElement('legend'),
    center = document.createElement('div'),
    label = document.createElement('label'),
    input = document.createElement('input'),
    br = document.createElement('br'),
    submit = document.createElement('input');


form.enctype = 'multipart/form-data';
form.method = 'post';
form.action = 'upload.php';

center.setAttribute('style', 'text-align: center');

label.htmlFor = 'inputUpload';
label.appendChild(textNodes[1]);


input.type = 'file';
input.name = 'inputUpload';
input.id = 'inputUpload';


submit.setAttribute('type', 'submit');
submit.value = 'Envoyer';


legend.appendChild(textNodes[0]);

fieldset.appendChild(legend);
fieldset.appendChild(center);


center.appendChild(label);
center.appendChild(input);
center.appendChild(br);
center.appendChild(br.cloneNode(false)); // False = Sans les enfants
center.appendChild(submit);


form.appendChild(fieldset);
mainDiv.appendChild(form);
// mainDiv.appendChild(langages);

container.appendChild(mainDiv);


// console.log(e.firstChild.data);
// aff('<h1>TP3</h1>');
aff('');
// 15:00 - Médiathèque - Tabeltte Gaming
