/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
    navToggle = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');

// Menu Show 
// Validate if constant exist 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden 
// Validate if constant exist 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link , we remove the show menu clicked
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServicesId, TemplateId, #form, publicKey
    emailjs.sendForm('service_xvsixg6','template_cfx47di','#contact-form','E4V3YmRbBLnz-Bpu5')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout (() => {
            contactMessage.textContent =''
        },5000)

        // Clear input fields
        contactForm.reset()

    }, () => {
        // Show error message
        contactMessage.textContent ='Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Get all the images that you want to change based on the theme
const imagesToChange = document.querySelectorAll('[id^="image"]');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const selectedImages = JSON.parse(localStorage.getItem('selected-images')) || {}; 

/* Explication : 
    - JSON permet de récupérer les données stockées 
    - les données stockées dans 'Local Storage ' sont généralement stockées sous forme de chaine de car 
    - donc => JSON.parse, est utilisé pour convertir cette chaine en un Objet javaScript
    - || {} : C'est une valeur par défaut ou de secours 
*/ 

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Function to set the source of an individual image
const setImageSource = (image, src) => {
    image.src = src;
    };

    // We validate if the user previously chose a topic
    if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

    // Change the images based on the saved image paths
    imagesToChange.forEach(image => {
        const imageId = image.id;
        if (selectedImages[imageId]) {
        setImageSource(image, selectedImages[imageId]);
        }
    });
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

    // Change the image sources based on the theme
    const isDarkMode = document.body.classList.contains(darkTheme);
    imagesToChange.forEach(image => {
        const imageId = image.id;
        if (isDarkMode) {
        // Change the image source to the dark mode image
        setImageSource(image, '../images/checkmark-dark.png'); 
        selectedImages[imageId] = '../images/checkmark-dark.png';
        } else {
        // Change the image source to the light mode image
        setImageSource(image, '../images/checkmark.png'); 
        selectedImages[imageId] = '../images/checkmark.png';
        }
    });

    // Save the updated selectedImages object in local storage
    localStorage.setItem('selected-images', JSON.stringify(selectedImages)); // Store as JSON data
    });

    /* Explication : 
    - JSON.stringify : fais l'opération inverse , elle permet de convertir l'objet Java Scrip en chaine de car au Format JSON
    - Le format JSON est couramment utilisé pour représenter des données structurées de manière lisible par les machines.
    
    */ 



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animation repeat 
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' });
sr.reveal(`.home__name, .home__info, .about__container
            .section__title-1, .about__info, 
            .contact__social, .contact__data`, { origin: 'left' });
sr.reveal(`.services__card, .projects__card`, {interval : 100});


/* ================= Typing animation ================== */
const text = document.querySelector(".typing")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer"
    },0);
    setTimeout(() => {
        text.textContent = "Designer"
    },4000);
    setTimeout(() => {
        text.textContent = "CV Maker"
    },8000);

    setTimeout(() => {
        text.textContent = "Presentation Maker"
    },12000);
    setTimeout(() => {
        text.textContent = "Freelancer"
    },16000);
    
}
textLoad();
setInterval(textLoad, 20000)


// Setting Box 

// Check if there is local storage color option 
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {

    document.documentElement.style.setProperty('--first-color',mainColor);

    // check for active class

    // remove active class from all colors li
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        // add active class on el with data-color
        if(element.dataset.color == mainColor) {
            // add active class
            element.classList.add("active");
        }
    });

}

// toggle spin class On icon 
document.querySelector(".style-switcher-toggler .fa-cog").onclick = function() {
    
    this.classList.toggle("fa-spin");
    
    document.querySelector(".style-switcher").classList.toggle("open");
}

// Switch Colors in settings-Box
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {
    // click on Every li 
    li.addEventListener("click", (e) => {

        // set colors on root 
        document.documentElement.style.setProperty('--first-color',e.target.dataset.color);
        
        // set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);
        

    });
});

// End Setting Box 

// Start Scroll progress
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height)*100}%`
})






// Pop Up

document.addEventListener("DOMContentLoaded", function () {
    const noteButton1 = document.getElementById("project-01");
    const popup1 = document.getElementById("popup-1");
    const visitSiteButton1 = document.getElementById("visit-site-button-1");
    const closePopupButton1 = document.getElementById("close-popup-button-1");

    function openPopup() {
        popup1.style.display = "block";
    }

    noteButton1.addEventListener("click", function (event) {
        event.preventDefault();
        openPopup();
        // Set the specific site URL for the first button
        visitSiteButton1.addEventListener("click", function () {
            window.open("https://amircharef.github.io/PLANTEZ_Project/");
        });
    });

    closePopupButton1.addEventListener("click", function () {
        popup1.style.display = "none";
    });

    popup1.addEventListener("click", function (event) {
        if (event.target === popup1) {
            popup1.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const noteButton2 = document.getElementById("project-02");
    const popup2 = document.getElementById("popup-2");
    const visitSiteButton2 = document.getElementById("visit-site-button-2");
    const closePopupButton2 = document.getElementById("close-popup-button-2");

    function openPopup() {
        popup2.style.display = "block";
    }

    noteButton2.addEventListener("click", function (event) {
        event.preventDefault();
        openPopup();
        // Set the specific site URL for the first button
        visitSiteButton2.addEventListener("click", function () {
            window.open("https://amircharef.github.io/PLANTEZ_Dashboard/");
        });
    });

    closePopupButton2.addEventListener("click", function () {
        popup2.style.display = "none";
    });

    popup2.addEventListener("click", function (event) {
        if (event.target === popup2) {
            popup2.style.display = "none";
        }
    });
});

// Cursor 
const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")

window.addEventListener("mousemove", function(e)  {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate ({
        left : `${posX}px`,
        top : `${posY}px`
    }, {duration : 500, fill : "forwards"})
})