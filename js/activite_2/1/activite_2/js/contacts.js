/* 
Activité : gestion des contacts
*/

var nav; //variable permettant la navigation

var contacts = []; // tableau des contacts

//Prototype d'un contact
var Contact = {
    nom: "",
    prenom: "",
    // Méthode de création de personnage par l'utilisateur
    init: function () {
        console.log("Bienvenue dans l'ajout de contact!");
        this.nom = prompt("Saisissez le nom du contact");
        this.prenom = prompt("Saisissez le prenom du contact");
    },
    //Méthode de création de personnage en interne dans le programme
    new: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
};

//Affichage du menu 
function menu() {
    console.log("Accueil");
    console.log("Tapez le chiffre correspondant au menu auquel vous voulez accéder");
    console.log("1. Afficher la liste des contacts");
    console.log("2. Ajouter un contact");
    console.log("0 . Quitter");
}

//Initialisation de l'application avec les données minimales

var contact1 = Object.create(Contact);
contact1.new("Lévisse", "Carole");
contacts.push(contact1);

var contact2 = Object.create(Contact);
contact2.new("Nelsonne", "Mélodie");
contacts.push(contact2);


//Démarrage de l'application 
menu(); // Affichage du menu
nav = Number(prompt("Que voulez-vous faire?")); // On recueille le choix de l'utilisateur 
//Tant qu'il ne choisit pas 0 pour quitter
while (nav !== 0) { 
    
    //Si il choisit 1 : On parcourt chaque contact du tableau et on affiche son nom et prénom
    if (nav === 1) {
        contacts.forEach(function (contact) {
            console.log("Nom : " + contact.nom + ", prénom: " + contact.prenom);
        });
    // S'il choisit 2 : on crée un nouveau contact et on lance la méthode de création par l'utilisateur
    } else if (nav === 2) {
        var temp = Object.create(Contact);
        temp.init();
        contacts.push(temp);
    }
    //On recueille à nouveau le choix de l'utilisateur pour boucler
    nav = Number(prompt("Que voulez-vous faire?"));
}

console.log("Au revoir !");
// Fin de l'application.