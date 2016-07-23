// var timerID = chronoStart();

// grCote7.tools.chrono.start();
function verifPseudo(champ) {
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

function verifMail(champ) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}
function verifAge(champ) {
    var age = parseInt(champ.value);
    if (isNaN(age) || age < 5 || age > 111) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}
function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}
function verifForm(f) {
    var pseudoOk = verifPseudo(f.pseudo);
    var mailOk = verifMail(f.email);
    var ageOk = verifAge(f.age);

    if (pseudoOk && mailOk && ageOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}


(function () {


})();

// grCote7.tools.chrono.stop();

/*
 // Code HTML du form
 <form action="page.php" onsubmit="return verifForm(this)">
 <p>
 Pseudo : <input type="text" name="pseudo" onblur="verifPseudo(this)"/><br/>
 E-mail : <input type="text" name="email" size="30" onblur="verifMail(this)"/><br/>
 Âge : <input type="text" name="age" size="5" onblur="verifAge(this)"/> ans<br/>
 <input type="submit" value="Valider"/>
 </p>
 </form>
 */
