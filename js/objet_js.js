var myAffP = document.getElementById('myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}

var f = {
    i: 'intru',
    f: 'sam',
    s: 'anne'
};

// Taper ds IDE foret + TAB
var o2T = function () {
    var n = 0, t = '<table>';
    for (var id in f) {
        n++;
        if (f.hasOwnProperty(id)) {
            t += '<tr><td>' + id + '</td>' +
                '<td>' + f[id] + '</td></tr>';
        }
    }
    t += '</table>';
    aff(n + ' items: ' + t);
};
o2T();


f.moi = 'lionel';
o2T();

delete f.i;
o2T();

// console.log(f.properties);

console.log('Fini');
