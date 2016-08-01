// List of links to show. Each link has:
// - a title
// - a URL
// - an author (the person who added it)


/**
 * A set of tools used in this exercice for OpenClassroom
 *
 * @type {{
 *          ucFirst: tools.ucFirst,
 *          getFormattedString: tools.getFormattedString,
 *          isCorrect: {author: tools.isCorrect.author,
 *                     title: tools.isCorrect.title,
 *                     url: tools.isCorrect.url},
 *          notif: tools.notif
 *        }}
 */
var tools = {

    /**
     * Set initial of string in capital
     *
     * @param c
     *
     * @returns {string}
     */
    ucFirst: function (c) {
        return c.charAt(0).toUpperCase() + c.slice(1, c.length).toLowerCase();
    },

    /**
     * Set all initials in capitals in a string
     *
     * @param str         : String to convert
     * @param [isLastName]: Set toUpperCase on the last word
     *
     * @returns formatted string
     */
    getFormattedString: function (str, isLastName) {

        if (isLastName == undefined) isLastName = false;

        var strArr = str.split(/[\s,;.-]/);

        strArr.forEach(function (word, index) {
            strArr[index] = tools.ucFirst(word);
        });
        if (isLastName) strArr[strArr.length - 1] = strArr[strArr.length - 1].toUpperCase();

        var completeStr = '';
        strArr.forEach(function (word) {
            if (word.length > 0) completeStr += word + ' ';
        });

        // We profit to remove undesirate spaces at begin and end of the string with trim()
        return completeStr.trim();

    },

    // Rules for each field
    isCorrect: {

        author: function (author) {
            if (author.length > 0) {
                return true;
            }
            else {
                tools.message = 'Please at least 1 letter as author...';
                return false;
            }
        },

        title: function (title) {
            if (title.length > 0) {
                return true;
            }
            else {
                tools.message = 'Please at least 1 letter as title...';
                return false;
            }
        },

        url: function (url) {
            if (/^https?:\/\/?[\da-z\.-]+\.[a-z\.]{2,6}[\/\w \.-]*\/?$/.test(url))
                return true;
            else {
                tools.message = 'Please check the URL...';
                return false;
            }
        }

    },

    /**
     * Verify if link is already in the data list
     */
    linkAlreadyExist: function (newLk) {

        for (var i = 0, c = linkList.length; i < c; i++) {
            if (linkList[i].title == newLk.title && linkList[i].url == newLk.url && linkList[i].author == newLk.author) {
                console.log('dbl trouvé');
                this.message = 'Link already registered... Then not added again !';
                tools.notif('error');
                return true;
                break;
            }
        }
        return false;
    },


    /**
     * Display message (In tools.message)
     *(Function cas be easy upgraded for others styles)
     *
     * @param [notifType] Default : info (blue)
     *                      error : red
     */
    notif: function (notifType) {

        if (notifType == undefined) notifType = 'info';

        // Here you can add others styles for i.e.: alert, success, etc...
        var colorNotif = {
            info: ["#00f", "#cdf8ff"],
            error: ["#f00", "#f7c7c7"]
        };

        var notifBox = document.getElementById('notif');
        notifBox.innerHTML = tools.message;
        notifBox.style.color = colorNotif[notifType][0];
        notifBox.style.backgroundColor = colorNotif[notifType][1];
        notifBox.style.display = "block";

        var notif = setTimeout(function () {
            notifBox.style.display = "none";
            notifBox.innerHTML = "";
        }, 2000);

    }

};

// Initials links
var linkList = [
    {
        title: "Kottke",
        url: "http://kottke.org",
        author: "brett.suggs"
    },
    {
        title: "National Geographic",
        url: "http://www.nationalgeographic.com",
        author: "jessica"
    },
    {
        title: "American Museum of Natural History",
        url: "http://www.amnh.org",
        author: "aurora.nicole"
    }
];

// Add block of a link in the dom
function createLinkElement(link) {
    var linktitle = document.createElement("a");
    linktitle.href = link.url;
    linktitle.style.color = "#428bca";
    linktitle.style.textDecoration = "none";
    linktitle.style.marginRight = "5px";
    linktitle.appendChild(document.createTextNode(link.title));

    var linkUrl = document.createElement("span");
    linkUrl.appendChild(document.createTextNode(link.url));

    var titleLine = document.createElement("h4");
    titleLine.style.margin = "0px";
    titleLine.appendChild(linktitle);
    titleLine.appendChild(linkUrl);

    var detailsLine = document.createElement("span");
    detailsLine.appendChild(document.createTextNode("Added by " + link.author));

    var linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(titleLine);
    linkDiv.appendChild(detailsLine);

    return linkDiv;
}


var content = document.getElementById("content");

// Loop on each link to add it in screen
linkList.forEach(function (link) {
    var linkElement = createLinkElement(link);
    content.appendChild(linkElement);
});

// Core of the script to do work (Add a form,
// then add a link in the array and display it)
var btnGetForm = document.getElementById('addForm'),
    linkForm = document.getElementById('linkForm'),
    btnAddLink = document.getElementById('sendLink');

// First button action: Display the form
btnGetForm.addEventListener('click', function () {
    btnGetForm.style.display = "none";
    linkForm.style.display = "block";
});

// Second button action: Add the link to the linkList abd display it
// (And upgrade style of strings, verify if "http" exists, etc...)
linkForm.addEventListener('submit', function (e) {

    e.preventDefault(); // Cancel default behavior


    // Format strings and add "http://" in the url if necessary
    var titleF = tools.getFormattedString(title.value),
        authorF = tools.getFormattedString(author.value, true),
        urlF = (!/^http/i.test(url.value)) ? 'http://' + url.value.toLowerCase() : url.value.toLowerCase();

    if (tools.isCorrect.url(urlF) && tools.isCorrect.author(authorF) && tools.isCorrect.title(titleF)) {

        var newLk = {
            title: titleF,
            url: urlF,
            author: authorF
        };

        if (!tools.linkAlreadyExist(newLk)) { // Not 2 times a same link in the array...

            // Add the link
            linkList.unshift(newLk);

            tools.message = 'The link to <a href="' + urlF + '">' + titleF + '</a> was succesfully added.';

            // Display the new link at beginning of listing
            content.insertAdjacentHTML("afterBegin", '<div class="link">' + createLinkElement(linkList[0]).innerHTML + '</div>');

            // Display notification as success
            tools.notif();

            // Reset form and display as start
            title.value = author.value = url.value = '';
            btnGetForm.style.display = "block";
            linkForm.style.display = "none";
        }
    }
    else {
        // Display notification as error
        tools.notif('error');
    }

});

// For dev and tests
/*
 btnGetForm.click();

 btnAddLink.click();

 setTimeout(function () {
 btnAddLink.click();
 }, 3000);
 */
