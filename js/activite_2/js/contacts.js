/*
 Activité : gestion
 des
 contacts */

// TODO : complétez le programme
console.log('Bienvenue dans le gestionnaire de contacts !');
var Menu = {
    1: 'Lister les contacts',
    2: 'Ajouter un contact',
    3: 'Supprimer un contact',
    3: 'Supprimer un contact',
    afficher: function () {
        for (var id in Menu) {
            if (id >= 0 && id < 9)
                console.log(id + ' : ' + this[id]);
        }
        console.log('0 : Quitter');
        // console.log(this);

    },
    nbChoix: function () {
        var i = 0;
        for (var cde in Menu) {
            if (cde > 0 && cde < 9)
                i++;
        }
        return i;
    }
};

Menu.afficher();

var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    afficher: function () {
        return 'Nom : ' + this.nom + ', prénom : ' + this.prenom;
    }

};

// Initialisation des premiers contacts
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
    console.log('Voici la liste de tous vos contacts');
    // Méthode avec forEach
    // this.forEach(function (contact) {
    //     console.log(contact.afficher());
    // });

    for (var i = 0, c = this.length; i < c; i++) {
        console.log((i + 1) + ' : ' + this[i].afficher());
    }

    console.log(' ');
});


contacts.ajouter = function (prenom, nom) {
    if (nom.length && prenom.length) {
        var newContact = Object.create(Contact);
        newContact.init(prenom, nom);
        this.push(newContact);
    }
};

contacts.supprimer = function (numero) {
    if (numero > 0 && numero < this.length) {
        console.log(numero);
        this.splice(numero - 1, 1);
    }
};


// console.log(annuaire[0].nom);


// console.log(amie1.afficher());
// console.log(amie2.afficher());
// console.log(contacts);
contacts.lister();
contacts.ajouter('lionel', 'cote');
contacts.ajouter('pierre', 'dax');
contacts.lister();
contacts.supprimer(3);
contacts.lister();

function range(start, end, step, offset) {
    return Array.apply(null, Array((Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1)).map(function (_, i) {
        return start < end ? i * (step || 1) + start - (offset || 0) : (start - (i * (step || 1))) + (offset || 0)
    })
}

// var choix = prompt('Votre choix ( ' + range(1, Menu.nbChoix(), 1) + ' ou 0 ) ?');


var choix = 3
    , choixPossibles = range(0, Menu.nbChoix(), 1);

console.log(choixPossibles.indexOf(choix));

Menu.afficher();

switch (choix) {
    case 1:
        console.log('un');
        contacts.lister();
        break;
    case 2:
        console.log('Ajouterer un');
        contacts.ajouter('Dudu', 'popo');
        break;
    case 3:
        var numero = '';
        while (!numero) {
            var numero = Number(prompt('Numéro à supprimer ?'));
            console.log('ottttttttt ' + numero);
            if (confirm('suppr ' + numero + ' ?'))
                contacts.supprimer(numero);
            break;
        }
        break;
    default: // En principe, jamais executé
        console.log('Hein ?!?');
        console.log(' ');


}

contacts.lister();

// Menu.afficher();
// console.log(range(0, Menu.nbChoix(), 1));
