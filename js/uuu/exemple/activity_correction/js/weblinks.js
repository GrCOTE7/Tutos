// List of links to show. Each link has:
// - a title
// - a URL
// - an author (the person who added it)

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

// Create a DOM object showing the link details
function createLinkElement(link) {
    var titleElement = document.createElement("a");
    titleElement.href = link.url;
    titleElement.style.color = "#428bca";
    titleElement.style.textDecoration = "none";
    titleElement.style.marginRight = "5px";
    titleElement.appendChild(document.createTextNode(link.title));

    var urlElement = document.createElement("span");
    urlElement.appendChild(document.createTextNode(link.url));

    // Title and URL line
    var titleElementLine = document.createElement("h4");
    titleElementLine.style.margin = "0px";
    titleElementLine.appendChild(titleElement);
    titleElementLine.appendChild(urlElement);

    // Author line
    var detailsElementLine = document.createElement("span");
    detailsElementLine.appendChild(document.createTextNode("Added by " + link.author));

    var linkElementDiv = document.createElement("div");
    linkElementDiv.classList.add("link");
    linkElementDiv.appendChild(titleElementLine);
    linkElementDiv.appendChild(detailsElementLine);

    return linkElementDiv;
}

var contentElement = document.getElementById("content");
// Add a DOM element for each link
linkList.forEach(function (link) {
    var linkElement = createLinkElement(link);
    contentElement.appendChild(linkElement);
});

// Add and return an input type DOM element
function createInputElement(placeholder, size) {
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.setAttribute("placeholder", placeholder);
    inputElement.setAttribute("size", size);
    inputElement.setAttribute("required", "true");
    return inputElement;
}

var addLinkElement = document.getElementById("addLink");
// Handle adding a new link
addLinkElement.addEventListener("click", function () {
    var authorElement = createInputElement("Your name", 20);
    var titleElement = createInputElement("Link title", 40);
    var urlElement = createInputElement("Link URL", 40);

    var addElement = document.createElement("input");
    addElement.type = "submit";
    addElement.value = "Add";

    var addElementForm = document.createElement("form");
    addElementForm.appendChild(authorElement);
    addElementForm.appendChild(titleElement);
    addElementForm.appendChild(urlElement);
    addElementForm.appendChild(addElement);

    var p = document.querySelector("p");
    // Replace button with form
    p.replaceChild(addElementForm, addLinkElement);

    // Add new link
    addElementForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Cancel form publication
        
        var url = urlElement.value;
        // If the URL doesn't start with "http://" nor with "https://"
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            // Prefix http://
            url = "http://" + url;
        }

        // Create object containing new link data
        var link = {
            title: titleElement.value,
            url: url,
            author: authorElement.value
        };

        var linkElement = createLinkElement(link);
        // Add the new link at the top of the list
        contentElement.insertBefore(linkElement, contentElement.firstChild);

        // Replace the form
        p.replaceChild(addLinkElement, addElementForm);

        // Create information message
        var infoElement = document.createElement("div");
        infoElement.classList.add("info");
        infoElement.textContent = "The link to \"" + link.title + "\" was successfully added";
        p.insertBefore(infoElement, addLinkElement);
        // Remove the message after two seconds
        setTimeout(function () {
            p.removeChild(infoElement);
        }, 2000);
    });
});
