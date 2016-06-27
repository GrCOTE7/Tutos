/* 
Activité : gestion des contacts
*/

console.log("Bienvenue dans notre gestionnaire");

// créer un modele de contact

var contact = {

    init: function (nom, prenom) {

        this.nom = nom;

        this.prenom = prenom;

    },

    // afficher les contacts
     afficher: function () {

        var affichage = this.nom + " " + this.prenom;

        return affichage;

    }
};

//créer 2 nouveaux contacts
var contact1 = Object.create(contact);

contact1.init("Levisse", "Carole");

var contact2 = Object.create(contact);

contact2.init("Nesonne", "Mélodie");

//inserer les contacts dans le gestionnaire

var contacts = [];

contacts.push(contact1);

contacts.push(contact2);


//mettre en place une fonction pour lister les contacts
function listerContact() {
     contacts.forEach(function (contact) {

    console.log(contact.afficher());

});

};

    
// mettre en place une fonctiion pour ajouter un contact    
function ajouterContact() {
    var nouveauContact = Object.create(contact);
    contact.init(prompt("Saisir le nom du contact") , prompt("Saisir le prénom"));
    contacts.push(nouveauContact);
    console.log("le contact a été ajouté avec succes !")
};
// mettre en place une fonction pour quitter
function quitter() {
    console.log("Au revoir !");
}

//mettre en place la derniere fonction pour appeler les autres fonctions et interagir avec l'utilisateur
function saisirChoix() {
    console.log("Veuillez faire un choix");
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("3 : Quitter");
    var choix = Number(prompt("veuillez faire un choix"));
    if (choix === 1) {
    listerContact();
     saisirChoix();    
    } else if (choix === 2) {
    ajouterContact();
     saisirChoix();
    } else if (choix === 3) {
    quitter();
    } else {
        alert("choix incorrect !"); // message d'erreur si on saisit une valeur autre que les choix proposés
        saisirChoix();
    }
};

//execution de la fonction qui permet de faire un choix
saisirChoix();


   



