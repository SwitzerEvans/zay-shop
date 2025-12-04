let mobileNav = document.querySelector('.mobile-nav');
let hamburger = document.querySelector('.js-hamburger');

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile-nav-show');
});

let serviceLists = document.querySelectorAll('.service-list');

serviceLists.forEach(serviceList => {
    let image = serviceList.querySelector('img'); // get the image inside
    let span = serviceList.querySelector('span'); // get the span inside

    // Hover in
    serviceList.addEventListener('mouseenter', function () {
        serviceList.style.backgroundColor = 'rgb(55, 194, 55)';
        image.style.filter = 'brightness(0) invert(1)'; // make the icon white
        span.style.color = 'white'
    });

    // Hover out
    serviceList.addEventListener('mouseleave', function () {
        serviceList.style.backgroundColor = '';
        image.style.filter = 'none'; // return icon to normal
        span.style.color = 'black';
    });
});




// slider for home page

    let slides = document.querySelectorAll(".heroslides");
    let index = 0;

    // Next button
    document.getElementById("next").addEventListener("click", function () {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    });

    // Prev button
    document.getElementById("prev").addEventListener("click", function () {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    });

    // Auto slide every 3 seconds
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
