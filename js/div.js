// var timerID = chronoStart();

grCote7.tools.chrono.start();

(function () {

    var s = 0,
        nb = 1e9; // 8
    for (var i = 0; i < nb; i++) {
        s += Math.random();
    }
    aff(nb + ' valeurs: ' + s / nb);

})();

grCote7.tools.chrono.stop();
