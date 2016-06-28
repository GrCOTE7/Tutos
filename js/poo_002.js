// https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-objets-5

// My Namespace
var grCote7 = {
    // Propiétés
    version: 0.01,
    lang: 'fr',


    init: function () { /* Initialisation */
    },

    myBestFunction: function () {
        aff('Ma meilleure fonction !');
    },

    myAff: {
        aff: function aff(n) {

            var myAffP = document.querySelector('#myAffP');
            if (typeof n === 'undefined') myAffP.innerHTML = '';
            else if (n) myAffP.innerHTML += n + ' ';
            // this.myBestFunction();
        },
        myBestFunction: function () {
            grCote7.myBestFunction();
        }
    },

    myTools: { // sousNamespace
        init: function () {/* Initialisation */
            console.log('Mon tools is OK  !!!');
        }

    }
};

grCote7.myAff.aff('Affichage depuis ma aff() dans mon Namespace<hr>');
grCote7.myTools.init();

var myAffP = document.querySelector('#myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}
// aff('<br/><br/>');


// Définition de l'objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

    this.addFriend = function (nick, age, sex, parent, work, friends) {
        this.friends.push(new Person(nick, age, sex, parent, work, friends));
    };
}

// On crée des variables qui vont contenir une instance de l'objet Person :
var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
var lau = new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []);

aff(seb.nick); // Affiche : « Sébastien »
aff(seb instanceof Person);
aff('<br>');
aff(lau.nick); // Affiche : « Laurence »

var myArray = [
    new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []),
    new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []),
    new Person('Ludovic', 9, 'm', 'frère', 'Etudiant', []),
    new Person('Pauline', 16, 'f', 'cousine', 'Etudiante', []),
    new Person('Guillaume', 16, 'm', 'cousin', 'Dessinateur', []),
];


seb.addFriend('Lionel', 51, 'copain', 'sans', []);
seb.addFriend('Marco', 45, 'copain', 'sans', []);
console.log(seb.friends);

// alert(seb);


if (!Object.prototype.debug) {
    // Créons la méthode
    Object.prototype.debug = function () {
        var text = 'Object {\n';
        for (var i in this) {
            // Ci-dessous pour ignorer les méthodes
            if ((i !== 'debug') && ( i !== 'addFriend')) {
                text += '    [' + i + '] => ' + this[i] + '\n';
            }
        }
        console.log(text + '}');
        // aff(text + '}');
    }
}

var myObject = {};
for (var i in myObject) {
    // alert(i); // ==> Affiche debug (héritée), ,notre méthode ajoutée à Object par renvoi de prototypae de débug
}
aff('<br>');


// aff(seb.debug());
// console.log(seb);
grCote7.myBestFunction();
grCote7.myAff.myBestFunction();

// aff(seb);
console.log(seb);

