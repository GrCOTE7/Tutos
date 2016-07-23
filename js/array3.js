grCote7.tools.chrono.start();

(function () {

    // Cloner un array
    function clone(o) {
        var out, v, key;
        out = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            out[key] = (typeof v === "object") ? copy(v) : v;
        }
        return out;
    }


    var t = new Array("toto", "bob", "homer"), tt = clone(t);
    t.sort();


    console.log(' t: ' + t);
    console.log('tt: ' + tt);
    console.log("t.join('-'): " + t.join('-'));
    console.log("t.concat(tt): " + t.concat(tt));
    console.log(' t: ' + t);
    console.log("t.reverse(): " + t.reverse());
    console.log(' t: ' + t);
    t.reverse(t);
    console.log('t.slice(2, 3): ' + t.slice(2, 3));
    console.log(' t: ' + t);


    var t = new Array();
    for (var i = 0; i < 10; i++)
        t[i] = i; // contient 0,1,2,3,4,5,6,7,8,9
    var t1 = t.slice(2); // contient 2,3,4,5,6,7,8,9
    var t2 = t.slice(2, 8); // contient 2,3,4,5,6,7
    var t3 = t.slice(-6, -2); // contient 4,5,6,7
    var t4 = t.slice(2, -2); // contient 2,3,4,5,6,7

    console.log('t.slice(): ' + t1, t2, t3, t4);


// t contient toujours 0,1,2,3,4,5,6,7,8,9

})();

grCote7.tools.chrono.stop();
