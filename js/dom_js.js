// My Namespace
var grCote7 = {
    // Propiétés
    version: 0.01,
    auteur: 'Lionel COTE',
    lang: 'fr',


    init: function () { /* Initialisation */
        if (0) console.log(this.tools.trouve());
        // grCote7.aff(this.tools.isString('12'));
        grCote7.aff(this.tools.myRegEx());
        this.tools.test();
    },

    myBestFunction: function () {
        this.aff('Ma meilleure fonction !');
    },
    aff: function (n) {
        var myAffP = document.querySelector('#myAffP');
        if (typeof n === 'undefined') myAffP.innerHTML = '';
        else if (n) myAffP.innerHTML += n + ' ';
    },

    tools: { // sousNamespace
        init: function () {/* Initialisation */
            console.log('Mon tools is OK  !!!');
        },

        /**
         * @return {string}
         */
        UcFirst: function (c) {
            return c.charAt(0).toUpperCase() + c.slice(1, c.length);
        },
        trouve: function () {

            var r = this.UcFirst(grCote7.auteur);

            // Utilisation du tilde
            // grCote7.auteur = 'dudu POL';
            var rech = 'e',
                source = grCote7.auteur.toLowerCase(),
                rep = '"' + rech + '" est-il dans la chaîne "' + r + '" ?<br>\n';
            rech = rech.toLowerCase();
            // grCote7.aff('"' + rech + '" est bien contenu dans "' + this.UcFirst(grCote7.auteur) + '"');
            if (~source.indexOf(rech)) { // indexOf retourne -1 si pas trouvé et tilde fait +1 * -1 => 0
                var posFirst = source.indexOf(rech) + 1,
                    posLast = source.lastIndexOf(rech) + 1,
                    compl = (posFirst != posLast) ? ' et se retrouve en position ' + posLast : '';
                rep += '- Oui, en position ' + posFirst + compl;
            } else {
                rep += '- Non, "' + rech + '" n\'est pas contenu dans "' + this.UcFirst(grCote7.auteur) + '"';
            }
            return rep;

            /*
             document.addEventListener('keypress', function (e) {
             grCote7.aff(e.keyCode + ' (' + String.fromCharCode(e.keyCode) + ') ');
             }
             )
             */
        },
        isString: function isString(variable) {
            return typeof variable.valueOf() === 'string'; // Si le type de la valeur primitive est « string » alors on retourne « true »
        },
        myRegEx: function () {

            var r = /on/i;

            return (r.test(grCote7.auteur)) ? 'true' : 'false';
        },
        test: function () {
        }
    }
};

grCote7.init();

