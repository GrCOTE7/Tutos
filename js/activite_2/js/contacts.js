/* Activité : gestion des contacts */

// TODO : complétez le programme

console.log('Bienvenue dans le gestionnaire de contacts !');
var Menu = {
    1: 'Lister les contacts',
    2: 'Ajouter un contact',
    3: 'Supprimer un contact',
    afficher: function () {
        for (var id in Menu) {
            if (this.hasOwnProperty(id)) {
                if (id >= 0 && id < this.nbChoix())
                    console.log(id + ' : ' + this[id]);
            }
        }
        console.log('0 : Quitter');
    },
    nbChoix: function () {
        var i = 0;
        for (var cde in Menu) {
            if (!cde.isNaN)
                i++;
        }
        return i;
    }
};

Menu.afficher();
console.log(' ');

var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    afficher: function () {
        return 'Nom : ' + this.nom + ', prénom : ' + this.prenom;
    }
};


// Initialisation de contacts et des premiers contacts
var amie1 = Object.create(Contact);
amie1.init('Carole', 'Lévisse');
var amie2 = Object.create(Contact);
amie2.init('Mélodie', 'Nelsonne');

// Ajout de ces 2 contacts dans l'Array
var contacts = [];
contacts.push(amie1);
contacts.push(amie2);
// Fin de l'initialisation des premiers contacts


contacts.lister = (function () {
    if (this.length) {

        if (this.length == 1) {
            console.log('Voici votre contact:');
        } else {
            console.log('Voici la liste de vos ' + this.length + ' contacts');
            // Méthode avec forEach
            // this.forEach(function (contact) {
            //     console.log(contact.afficher());
            // });
        }

        for (var i = 0, c = this.length; i < c; i++) {
            console.log((i + 1) + ' : ' + this[i].afficher());
        }
    }
    else {
        console.log('Vous n\'avez pas de contact');
    }
    console.log(' ');
    Menu.afficher();
    console.log(' ');
});


contacts.ajouter = function (prenom, nom) {
    if (nom.length && prenom.length) {
        var newContact = Object.create(Contact);
        newContact.init(prenom, nom);
        this.push(newContact);

        console.log(newContact.prenom + ' ' + newContact.nom + ' a été ajouté');
        console.log(' ');

    }
};

contacts.supprimer = function (numero) {
    if (numero > 0 && numero <= this.length) {
        this.splice(numero - 1, 1);
    }
};

function range(start, end, step, offset) {
    return Array.apply(null, [(Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1
    ]).map(function (_, i) {
        return start < end ? i * (step || 1) + start - (offset || 0) : (start - (i * (step || 1))) + (offset || 0)
    })
}

var choix;
// , choixMenuPossibles = range(0, Menu.nbChoix(), 1);

do {
    choix = prompt('Quel est votre choix ?');

    console.log('Votre choix: ' + choix + ' (' + Menu[choix] + ')');
    console.log(' ');


// Choix de l'action à exécuter
    switch (Number(choix)) {
        case 1: // Listing
            contacts.lister();
            break;
        case 2: // Ajout
            var prenom = nom = '', x = false;
            do {
                prenom = prompt('Prénom du nouveau contact ?');
                if (prenom === null)break;
            } while (prenom.length < 1);

            var nom;
            if (prenom) {
                do {
                    nom = prompt('Nom du nouveau contact ?');
                    if (nom === null)break;
                } while (nom.length < 1);
            }

            if (nom && prenom) {
                contacts.ajouter(prenom, nom);
            }

            break;
        case 3 : // Suppression
            var numero = '';
            do {
                numero = Number(prompt('Numéro à supprimer ?'));
                if (numero == null) break;
                if (numero == 77) break;
            } while (numero < 1 || numero > contacts.length || !numero);

            if (numero > 0 || numero <= contacts.length) {

                if (confirm('Vous confirmez la uppression du n° ' + numero + ' ?')) {
                    console.log('SUPPRESSION de la fiche n°' + numero);
                    console.log(' ');

                    contacts.supprimer(numero);

                }
            }
            break;
        default:
        // Sortie ou  Bad choix
    }

} while (choix != '0');

console.log('Opérations terminées');
