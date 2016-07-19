(function monHorloge() {

    function a0(v) { // Fct ajout du 0 si <10
        return (v > 9 ? v : '0' + v);
    }

    var monH = document.getElementById('monHorloge');
    var date = new Date(),
        j = date.getDate(),
        M = date.getMonth(),
        Y = date.getFullYear(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),

        dateComplete = a0(H) + ':' + a0(m) + ':' + a0(s) + ' - ' + j + '/' + M + '/' + Y;
    monH.innerHTML = dateComplete;
    window.setTimeout(monHorloge, 1000);
})();

/**
 * Created by cote on 24/06/16.
 */
