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
