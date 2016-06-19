/**
 * Created by cote on 19/06/16.
 */
var e = document.getElementById('myP');
e.innerHTML = '';
function aff(n) {
    e = document.getElementById('myP');
    e.innerHTML += n + ' ';
    // console.log(elem);
}

function test(n) {

    if (isNaN(n) || n < 0 || n > 9) {
        return 'Not a number in range [0-9]';
    }
    else
        return n * 2;
}


var n;
while (
    n = prompt('Enter a number in range [0-9]')
    ) {
    aff(n + ': ' + test(n) + '<hr>');

}

aff('<hr>Ok');
