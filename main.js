// * --------------------------Toggle icon navbar----------------------------* /

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


/*--------------------------Scroll section active link----------------------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
    /*--------------------------Sticky navbar----------------------------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*--------------------------remove toggle icon and  navbar----------------------------*/

    if (window.innerWidth <= 768) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

/*--------------------------scroll reveal----------------------------*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { orgin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*--------------------------typed js----------------------------*/

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Frontend developer', 'Data Analyst', 'Dancer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 900,
    loop: true,
});


document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close');

    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            popups[index].style.display = 'block';
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            popups[index].style.display = 'none';
        });
    });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('read-button').addEventListener('click', function () {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});