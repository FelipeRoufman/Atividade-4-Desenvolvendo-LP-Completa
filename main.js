document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const btns = document.querySelectorAll(".btn");
    let currentIndex = 0;

    const updateSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            btns[i].classList.toggle("active", i === index);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    };

    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });


    setInterval(nextSlide, 3000);

});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const serviceID = 'service_dhk177m';
    const templateID = 'template_19z3vcb';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Mensagem enviada com sucesso!');
        }, (err) => {
            alert('Erro ao enviar mensagem: ' + JSON.stringify(err));
        });
});



$(document).ready(function() {

    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


const sections = $('section');
const navItems = $('.nav-item');

$(window).on('scroll', function() {

    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();
    
    let activeSectionIndex = 0; // Corrigido o nome da variável
    
    if(scrollPosition <= 0){
        header.css('box-shadow', 'none');
    }else {
        header.css('box-shadow', '0 5px 15px rgba(0, 0, 0, 0.1)');
    }
    
    sections.each(function(i){
    
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop + section.outerHeight();
    
        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
            activeSectionIndex = i; // Usando a variável corrigida
            return false;
        }
    });

    navItems.removeClass('active');
    $(navItems[activeSetcionIndex]).addClass('active');
}); 


// la no guia do scroll reveal explica como usar os nomes direitinhos como usar esse negocio
ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#testimonial_chef', {

    origin: 'left',
    duration: 2000,
    distance: '20%'

})

ScrollReveal().reveal('.feedback', {

    origin: 'right',
    duration: 2000,
    distance: '20%'

})