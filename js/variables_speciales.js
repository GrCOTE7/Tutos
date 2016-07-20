// var timerID = chronoStart();

grCote7.tools.chrono.start();

(function () {

    /**
     * Tableau de functions dans une variable
     */
    var operation = [];
    operation["add"] = function (x, y) {
        return x + y;
    };
    operation["soustr"] = function (x, y) {
        return x - y;
    };
    operation["mult"] = function (x, y) {
        return x * y;
    };
    operation["div"] = function (x, y) {
        return x / y;
    };
    operation["moy"] = function (x, y) {
        return (x + y) / 2;
    };

    var a = 10, b = 2, op = 'div';
    aff(operation[op](a, b), 2); // = operation.div(a,b)


    /**
     * Function avec un nombre variable d'arguments
     */
    function addition() {
        var nb = addition.arguments;
        var somme = 0;
        for (var i = 0; i < nb.length; i++)
            somme += nb[i];
        return somme;
    }

    aff(addition(5, 2, 3, 11), 2);


    function maxi(m) {
        var nb = maxi.arguments;   // on a donc m = nb[0]
        for (var i = 1; i < nb.length; i++)
            if (nb[i] > m)   // si l'argument est plus grand que le maximum...
                m = nb[i];   // ... alors c'est le maximum
        return m;
    }

    aff(maxi(2, 8, 4, 1, 9, 4));

})();

grCote7.tools.chrono.stop();
