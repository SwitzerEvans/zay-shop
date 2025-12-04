
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
    }, 6000);
