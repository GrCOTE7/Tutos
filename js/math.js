grCote7.tools.chrono.start();

(function () {

    function arrondir(f, n) {

        var k = Math.pow(10, n),
            c = Math.round(f * k) / k;


        return f + ' (' + n + ' décimale' + (n > 1 ? 's' : '') + '): ' + c;
    }

    aff('Arrondir n (x décimales):', 1);
    aff(arrondir(3.14, 1), 1); // 3.1
    aff(arrondir(2.718, 2), 1); // 2.72
    aff(arrondir(1.234, 0), 2); // 1

    function randomInt(mini, maxi) {
        return Math.floor(mini + Math.random() * (maxi + 1 - mini));
    }

    // for (var i = 1; i < 100; i++)
    aff('Nbre compris entre 1 et 10 : ' + randomInt(1, 10), 1);

})();

grCote7.tools.chrono.stop();
