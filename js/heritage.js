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


function Vehicle(licensePlate, tankSize) {
    this.engineStarted = false; // Notre véhicule est-il démarré ?
    this.licensePlate = licensePlate; // La plaque d'immatriculation de notre véhicule.
    this.tankSize = tankSize; // La taille de notre réservoir en litres.
}


// Permet de démarrer notre véhicule.
Vehicle.prototype.start = function () {
    this.engineStarted = true;
};

// Permet de d'arrêter notre véhicule.
Vehicle.prototype.stop = function () {
    this.engineStarted = false;
};


function Car(licensePlate, tankSize, trunkSize) {
    // On appelle le constructeur de « Vehicle » par le biais de la méthode
    // call() afin qu'il affecte de nouvelles propriétés à « Car ».
    Vehicle.call(this, licensePlate, tankSize);

    // Une fois le constructeur parent appelé, l'initialisation de notre objet peut continuer.
    this.trunkOpened = false; // Notre coffre est-il ouvert ?
    this.trunkSize = trunkSize; // La taille de notre coffre en mètres cube.
}

// L'objet prototype de « Vehicle » doit être copié au sein du prototype
// de « Car » afin que ce dernier puisse bénéficier des mêmes méthodes.
Car.prototype = Object.create(Vehicle.prototype, {
    // Le prototype copié possède une référence vers son constructeur, actuellement
    // défini à « Vehicle », nous devons changer sa référence pour « Car »
    // tout en conservant sa particularité d'être une propriété non-énumerable.
    constructor: {
        value: Car,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

// Il est bien évidemment possible d'ajouter de nouvelles méthodes.
Car.prototype.openTrunk = function () {
    this.trunkOpened = true;
};

Car.prototype.closeTrunk = function () {
    this.trunkOpened = false;
};

var myCar = new Car('AA-555-AA', 70, 2.5);

console.log(myCar);


function Truck(licensePlate, tankSize, trailersNumber) {
    Vehicle.call(this, licensePlate, tankSize);

    this.trailersNumber = trailersNumber; // Le nombre de remorques attachées à notre camion.
}

Truck.prototype = Object.create(Vehicle.prototype, {
    constructor: {
        value: Truck,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Truck.prototype.addTrailer = function () {
    this.trailersNumber++;
};

Truck.prototype.removeTrailer = function () {
    this.trailersNumber--;
};
