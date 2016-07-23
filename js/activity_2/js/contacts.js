/*
 Activity: Contact manager by GrCOTE7 - OC 2016
 */

console.log('Welcome to your contacts manager!');


// Menu object
var contacts = [],
    withRemove = true,
    Menu = {
        1: 'List contacts',
        2: 'Add a contact',
        3: 'Remove a contact',
        view: function (withRemove) {
            if (withRemove == undefined) withRemove = true;

            for (var id in Menu) {
                if (id == 3 && withRemove == false) break;
                if (this.hasOwnProperty(id)) {
                    if (id >= 0 && id < this.nbChoice())
                        console.log(id + ' : ' + this[id]);
                }
            }
            console.log('0 : Quit');
        },
        nbChoice: function () {
            var i = 0;
            for (var cde in Menu) {
                if (!cde.isNaN)
                    i++;
            }
            return i;
        }
    };

Menu.view();
console.log(' ');

// Contact Object
var Contact = {
    init: function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    },
    view: function () {
        return 'FirstName : ' + this.firstName + ', last name : ' + this.lastName;
    }
};


// Init 2 initial contacts
var contact1 = Object.create(Contact);
contact1.init('John', 'SMITH');
var contact2 = Object.create(Contact);
contact2.init('Jane', 'DOE');

// Add the 2 initial contacts
contacts.push(contact1);
contacts.push(contact2);


contacts.lister = (function () {
    if (this.length) {

        if (this.length == 1) {
            console.log('Here is your only contact:');
        } else {
            console.log('Here\'s the list of your ' + this.length + ' contacts');
            // Method with forEach
            // this.forEach(function (contact) {
            //     console.log(contact.view());
            // });
        }

        for (var i = 0, c = this.length; i < c; i++) {
            console.log((i + 1) + ' : ' + this[i].view());
        }
    }
    else {
        console.log('You don\'t have any contact.');
    }
    console.log(' ');
    Menu.view(withRemove);
    console.log(' ');
});


contacts.add = function (firstName, lastName) {
    if (firstName.length && lastName.length) {
        var newContact = Object.create(Contact);
        newContact.init(firstName, lastName);
        this.push(newContact);

        console.log(newContact.firstName + ' ' + newContact.lastName + ' was added');
        console.log(' ');
    }
};

contacts.remove = function (id) {
    if (id > 0 && id <= this.length) {
        this.splice(id - 1, 1);
        // If no contact, remove choice Remove a contact in the menu
        if (!this.length) delete Menu[3];
    }
};

function range(start, end, step, offset) {
    return Array.apply(null, [(Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1
    ]).map(function (_, i) {
        return start < end ? i * (step || 1) + start - (offset || 0) : (start - (i * (step || 1))) + (offset || 0)
    })
}

var choice;
// , menuChoicePossibles = range(0, Menu.nbChoice(), 1);

do {
    choice = prompt('What\'s your choice ?');

    if (choice === null)
        choice = 'Cancelled';
    if (Menu[choice] == undefined) {
        Menu[choice] = 'Quit';
    }
    console.log('Your choice: ' + choice + ' (' + Menu[choice] + ')');
    console.log(' ');


// Action to execute
    switch (Number(choice)) {

        case 1: // Listing
            contacts.lister();
            break;

        case 2: // Add
            var firstName = lastName = '', x = false;
            do {
                firstName = prompt('New contact \'s first name ?');
                if (firstName === null) break;
            } while (firstName.length < 1);

            var lastName;
            if (firstName) {
                do {
                    lastName = prompt('New contact \'s last name ?');
                    if (lastName === null)break;
                } while (lastName.length < 1);
            }

            if (firstName && lastName) {
                // Formate Initiale UpperCase and Name all uppereCase
                contacts.add(firstName.charAt(0).toUpperCase() + firstName.slice(1, firstName.length).toLowerCase(), lastName.toUpperCase());
            }
            break;

        case 3 : // Remove
            var id = '',
                cLen = contacts.length;
            do {
                id = Number(prompt('Remove (#1' + (cLen == 1 ? '' : ' to #' + cLen) + ') ?'));
            } while (id < 0 || id > contacts.length);

            if (id > 0 && id <= contacts.length) {
                if (confirm('Really remove #' + id + ' ?')) {
                    console.log('#' + id + ' removed');
                    console.log(' ');
                    contacts.remove(id);
                }
                else {
                    console.log('Remove #' + id + ' cancelled');
                    console.log(' ');

                }
            }
            else {
                console.log('Remove cancelled');
                console.log(' ');

            }
            break;
        default:
        // Out or Bad choice
    }

} while (choice != '0' && choice !== 'Cancelled');

console.log('Application stopped.');
