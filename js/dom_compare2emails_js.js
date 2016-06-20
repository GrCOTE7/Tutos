var myAffP = document.getElementById('myAffP');
function aff(n) {
    if (typeof n === 'undefined') myAffP.innerHTML = '';
    else if (n) myAffP.innerHTML += n + ' ';
}


var email_1 = document.getElementById('email-1'),
    email_2 = document.getElementById('email-2');

if (email_1 && email_2) {
    email_1.onkeyup = email_2.onkeyup = email_1.onblur = email_2.onblur =
        function () {
            var value_1 = email_1.value,
                value_2 = email_2.value;
            // Si les deux champs contiennent quelque chose
            if (value_1 && value_2) {
                email_1.className = email_2.className =
                    (value_1 === value_2) ? "green" : "red";
            }
        }
}

/*
 <section class="block_gc7" id="output">
 <p class="center">
 <label>E-Mail : </label>
 <input id="email-1" placeholder="Entrez votre e-mail" type="text"
 value="grcote7@gmail.com1">
 </p>
 <p class="center">
 <label>Confirmez : </label>
 <input id="email-2" placeholder="Confirmez votre e-mail" type="text"
 value="grcote7@gmail.com2">
 </p>
 <p id='myAffP'></p>
 </section>
 */



// Ci-dessous version avec fonction nommée & addEventListener()
/*
 function compareEmails() {
 var email_1 = document.getElementById('email-1'),
 email_2 = document.getElementById('email-2');
 var value_1 = email_1.value,
 value_2 = email_2.value;

 if (value_1 && value_2) { // Si les deux champs contiennent quelque chose
 email_1.className = email_2.className = (value_1 === value_2) ? "green" : "red";
 }
 }

 var email_1 = document.getElementById('email-1'),
 email_2 = document.getElementById('email-2');

 if (email_1 && email_2) {
 email_1.onkeyup = email_2.onkeyup = email_1.onblur = email_2.onblur = compareEmails;
 }

 if (email_1 && email_2) {
 email_1.addEventListener("keyup", compareEmails, false);
 email_2.addEventListener("keyup", compareEmails, false);
 email_1.addEventListener("blur",  compareEmails, false);
 email_2.addEventListener("blur",  compareEmails, false);
 }
 */


console.log('Fini');
