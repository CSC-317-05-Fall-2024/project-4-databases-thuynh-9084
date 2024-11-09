/* This file should contain any DOM manipulation
needed to populate the header, nav, and footer elements
*/

// This renders the header, nav bar, and the footer to the DOM
function render_shared_headers(){

    const header = document.getElementById('header');
    const nav = document.getElementById('nav_bar_dom');
    const footer = document.getElementById('footer');

    //Creates the header HTML into the document.
    header.innerHTML = `
        <div>
            <img src="https://picsum.photos/1424/285" alt="San Francisco">
            <div class="header-text">
                San Francisco
            </div>
        </div>`;

    //Creates an array of navigation bar links and the path of it.
    const navLinks = [
        { href: '/', text: 'Home' },
        { href: '/attractions', text: 'Attractions' },
        { href: '/restaurants', text: 'Restaurants' },
        { href: '/restaurant_form', text: 'Restaurant Form' }
    ];

    const divContainer = document.createElement('div');
    divContainer.classList.add('nav');
    
    //Iterates through the array. Creates the href and text in order to put in the navigation bar
    for(let i = 0; i < navLinks.length; i++) {
        const createAnchor = document.createElement('a');
        createAnchor.href = navLinks[i].href;
        createAnchor.textContent = navLinks[i].text;
        divContainer.append(createAnchor);
    }
    nav.appendChild(divContainer);

    //Creates the footer HTML into the document.    
    footer.innerHTML = '<span>Contact info: thuynh@sfsu.edu</span>';
        
}

render_shared_headers();