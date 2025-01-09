// Function to handle the active link color change
function setActive(element) {
    let links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    element.classList.add('active');
}


// Function for search the product
function searchItems() {
    const query = document.getElementById("search").value.toLowerCase();

    const products = document.getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].querySelector(".name-js").innerText.toLowerCase();

        if (productName.includes(query)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}



// Function for hide the banner when searching the product
const searchInput = document.getElementById('search');
    const banner = document.getElementById('banner');
    const result = document.getElementById('result');

    searchInput.addEventListener('input', function() {
        if (searchInput.value.trim() !== "") {
            banner.style.display = 'none';
            result.style.display = 'none';
        } else {
            banner.style.display = 'flex';
            result.style.display = 'flex';
        }
    });

function adjustProductListContainer() {
    const productList = document.querySelector('.product-list');
    const productCards = document.querySelectorAll('.product-card:visible'); // Only count visible products
    
    const productsPerRow = Math.floor(productList.offsetWidth / 202);
    const rows = Math.ceil(productCards.length / productsPerRow);
    const productsPerColumn = Math.floor(productList.offsetHeight / 353);
    const column = Math.ceil(productCards.length / productsPerColumn);
    
    const newHeight = rows * 353;
    productList.style.height = `${newHeight}px`;
    const newWidth = column * 202;
    productList.style.width = `${newWidth}px`;

}
    
adjustProductListContainer();
    

// Show and Hide filter section in responsive
const menuIcon = document.getElementById('menu-icon');
const main1 = document.getElementById('main1');

menuIcon.addEventListener('click', () => {
    main1.classList.toggle('active');
});



// Show and Hide search input when searching
const toggleButton = document.getElementById('search-btn');
const searchInput1 = document.getElementById('search');

toggleButton.addEventListener('click', () => {
  if (searchInput1.style.display === 'none' || searchInput1.style.display === '') {
    searchInput1.style.display = 'block';
  } else {
    searchInput1.style.display = 'none';
  }
});