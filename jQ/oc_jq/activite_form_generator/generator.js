/**
 * Created by cote on 05/08/16.
 */
$(function () {

    $(':button').on('click', function (e) {
        var btnAll = $('button');

        // Désactivation des 3 boutons
        // btnAll.unbind();

        // btnAll.each(function (index) {
        //     // console.log(this.textContent);
        // });

        var btnFct = {
            'Label': 'Texte du label',
            'Zone de texte': 'Id de la zone de texte',
            'Bouton': 'Texte du bouton'
        };

        $('#droite').append('<label><hr>' + btnFct[this.textContent] + '<input type="text" size="7" id="saisie" />' +
            '<button>Ok</button></label>');

        var newLabel = e.target.innerText;
        console.log(newLabel);

        $(':button:last').on('click', function (e) {


            var newValue = e.target.previousSibling.value;
            console.log(newValue);

            switch (newLabel) {
                case 'Label':
                    $('#gauche').append('<span>' + newValue + '</span>');
                    console.log('lelabel');
                    break;

                case 'Zone de texte':
                    $('#gauche').append('<input type="text" id="' + newValue + '"><br>');
                    console.log('lazone');
                    break;

                case 'Bouton':
                    $('#gauche').append('<button>' + newValue + '</button><br>');
                    console.log('lebouton');
                    break;

                default:
                    break;
            }

            $('#droite label').remove();

        });
    });


    // Génération du formulaire exemple
    // ( = Utilisation automatique du formulaire de droite...)


    // Pour Prénom
    // Le label
    $(':button:eq(0)').click();
    $('#saisie')[0].value = 'Prénom';
    $(':button:last').click();

    // Le champ input
    $(':button:eq(1)').click();
    $('#saisie')[0].value = 'prenom';
    $(':button:last').click();


    // Pour Nom
    // Le label
    $(':button:eq(0)').click();
    $('#saisie')[0].value = 'Nom';
    $(':button:last').click();

    // Le champ input
    $(':button:eq(1)').click();
    $('#saisie')[0].value = 'nom';
    $(':button:last').click();


    // Pour Age
    // Le label
    $(':button:eq(0)').click();
    $('#saisie')[0].value = 'Âge';
    $(':button:last').click();

    // Le champ input
    $(':button:eq(1)').click();
    $('#saisie')[0].value = 'age';
    $(':button:last').click();


    // Pour Bouton Valier
    // Le label
    $(':button:eq(2)').click();
    $('#saisie')[0].value = 'Valider';
    $(':button:last').click();


});
