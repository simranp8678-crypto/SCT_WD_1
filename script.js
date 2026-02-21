// Navbar scroll effect
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll to menu
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView();
}

// Contact form alert
function showMessage() {
    alert("Thank you for contacting Brew Haven Café! ☕");
}
