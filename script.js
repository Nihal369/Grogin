// Function to handle the active link color change
function setActive(element) {
    // Remove the active class from all links
    let links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    element.classList.add('active');
}
