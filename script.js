// Function to create the "open in new tab/window" icon
function createNewTabIcon() {
    const newTabIcon = document.createElement("i");
    newTabIcon.className = "fa-solid fa-arrow-up-right-from-square fa-xs";
    newTabIcon.setAttribute("aria-label", "open in new tab/window");
    return newTabIcon;
}

// Function to append the "open in new tab/window" icon to a given link
function appendNewTabIconToLink(linkElement) {
    if (linkElement.target === "_blank") {
        const newTabIcon = createNewTabIcon();
        linkElement.appendChild(newTabIcon);
    }
}

// Find all links and append the "open in new tab/window" icon to them
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    appendNewTabIconToLink(links[i]);
}

// Set up nav tabs
function openPage(evt, pageName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Start with "About" tab open
document.getElementById("defaultOpen").click();