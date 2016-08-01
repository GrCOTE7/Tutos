var req = new XMLHttpRequest();

req.open('GET', 'candies.json');

req.onreadystatechange = function () {

    if (req.readyState === 4 && req.status === 200) {
        var candies = JSON.parse(req.responseText);

        var candyList = '<ul class="candies">';

        for (var i = 0, c = candies.length; i < c; i++) {

            if (candies[i].quantity > 0) {
                candyList += '<li class="item available">';
            } else {
                candyList += '<li class="item sold-out">';
            }

            candyList += candies[i].name + '<br>' + "Brand:<br />" + candies[i].brand;
            candyList += '<button class="btn btn-default">Buy</button>'
            candyList += '</li>';
        }

        candyList += '</ul>';
        document.getElementById('candyListing').innerHTML = candyList;
    }

};
req.send();
