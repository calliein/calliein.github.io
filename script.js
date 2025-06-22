// Fetch blog data from XML & display in "About" tab
fetch('/blog.xml')
    .then(res => res.text())
    .then(xmlStr => (new DOMParser()).parseFromString(xmlStr, "text/xml"))
    .then(data => {
        const items = Array.from(data.querySelectorAll('item')).reverse();
        
        const blogContainer = document.getElementById('blog-container');
        const newsContainer = document.getElementById('news-container');
        
        items.forEach(item => {
            const types = Array.from(item.querySelectorAll('type')).map(t => t.textContent.trim().toLowerCase());
            const title = item.querySelector('title').textContent;
            const desc = item.querySelector('description').textContent;
            const pubDate = item.querySelector('pubDate').textContent;
            const date = new Date(pubDate);
            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            }).format(date);
            
            const div = document.createElement('div');
            div.classList.add('update');
            div.innerHTML = `
            <i class="fa-solid fa-thumbtack"></i> <h2>${title}</h2>
            <p class="tiny">${formattedDate}</p>
            <p>${desc}</p>
            `;
        
        if (types.includes('news')) {
            newsContainer.appendChild(div.cloneNode(true));
        }
        if (types.includes('blog')) {
            blogContainer.appendChild(div.cloneNode(true))
        }
    });
});

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