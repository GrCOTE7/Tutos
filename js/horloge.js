function monHorloge() {
    var monH = document.getElementById('monHorloge');
    var date = new Date(),
        j = date.getDate(),
        M = date.getMonth(),
        Y = date.getFullYear(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        dateComplete = j + '/' + M + '/' + Y + ' - ' + H + ':' + m + ':' + s;
    monH.innerHTML = dateComplete;
    window.setTimeout(monHorloge, 1000);
}
monHorloge();
/**
 * Created by cote on 24/06/16.
 */
