grCote7.tools.chrono.start();

(function () {

    var myRegex = /l/i,
        str = 'lionel';

    aff('l ds lionel: ' + myRegex.test(str));

})();

var arr = [1, 2, 3],
    o2T = function () { // foret + TAB ds IDE
        var n = 0, t = '<table>';
        for (var id in arr) {
            n++;
            if (arr.hasOwnProperty(id)) {
                t += '<tr><td>' + id + '</td>' +
                    '<td>' + arr[id] + '</td></tr>';
            }
        }
        t += '</table>';
        aff(n + ' items: ' + t);
    };
o2T();

grCote7.tools.chrono.stop();
