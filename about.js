let slideIndex = 1; // Start from the first slide

// Function to show the slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Function to navigate through slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the first slide when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});
