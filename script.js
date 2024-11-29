// Function to handle the active link color change
function setActive(element) {
    // Remove the active class from all links
    let links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    element.classList.add('active');
}


function searchItems() {
    // Get the search query from the input field
    const query = document.getElementById("search").value.toLowerCase();

    // Get all the product cards
    const products = document.getElementsByClassName("product-card");

    // Loop through each product card to check if it matches the search query
    for (let i = 0; i < products.length; i++) {
        // Get the product name using the class 'name-js' within each product card
        const productName = products[i].querySelector(".name-js").innerText.toLowerCase();

        // If the product name includes the search query, display the product card; otherwise, hide it
        if (productName.includes(query)) {
            products[i].style.display = "block"; // Show the product
        } else {
            products[i].style.display = "none";  // Hide the product
        }
    }
}




const searchInput = document.getElementById('search');
    const banner = document.getElementById('banner');
    const result = document.getElementById('result');
    // const productlist = document.getElementById('product-list');

    // Listen for input in the search field
    searchInput.addEventListener('input', function() {
        // Check if the search field is empty
        if (searchInput.value.trim() !== "") {
            // Hide the banner if there's text in the search field
            banner.style.display = 'none';
            result.style.display = 'none';
            // productlist.style.height = 'none';
        } else {
            // Show the banner again if the search field is empty
            banner.style.display = 'flex';
            result.style.display = 'flex';
            // productlist.style.height = 'none';
        }
    });

    function adjustProductListContainer() {
        const productList = document.querySelector('.product-list');
        const productCards = document.querySelectorAll('.product-card:visible'); // Only count visible products
        
        const productsPerRow = Math.floor(productList.offsetWidth / 202);
        const rows = Math.ceil(productCards.length / productsPerRow);
        const productsPerColumn = Math.floor(productList.offsetHeight / 353);
        const column = Math.ceil(productCards.length / productsPerColumn);
    
        const newHeight = rows * 353; // Multiply rows by card height
        productList.style.height = `${newHeight}px`;
        const newWidth = column * 202; // Multiply rows by card height
        productList.style.width = `${newWidth}px`;

    }
    
    // Call this function after search or whenever the displayed items change
    adjustProductListContainer();
    





