var Film = {
    // Initialise le film
    init: function (title, year) {
        this.title = title;
        this.year = year;
    },
    // Renvoie la description du film
    describe: function () {
        var description = this.title + " (" + this.year + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Jurassic Park", 1993);

var film2 = Object.create(Film);
film2.init("Titanic", 1997);

var film3 = Object.create(Film);
film3.init("Toy Story", 1995);

console.log(film2);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.describe());
});
