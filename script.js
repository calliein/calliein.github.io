// Function to create the new tab icon
function createNewTabIcon() {
    const newTabIcon = document.createElement("i");
    newTabIcon.className = "fa-solid fa-arrow-up-right-from-square fa-xs";
    newTabIcon.setAttribute("aria-label", "open in new tab/window");
    return newTabIcon;
}

// Function to append the new tab icon to a given link
function appendNewTabIconToLink(linkElement) {
    if (linkElement.target === "_blank") {
        const newTabIcon = createNewTabIcon();
        linkElement.appendChild(` ${newTabIcon}`);
    }
}

// Find all links and append the new tab icon to them
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

// Set up modals
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
for (const el of openEls) {
    el.addEventListener("click", function () {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}
const closeEls = document.querySelectorAll("[data-close]");
for (const el of closeEls) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}
document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});
document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});