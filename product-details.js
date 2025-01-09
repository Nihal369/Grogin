function setNavLinkActive(element) {
    let links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    element.classList.add('active');
}

function setDecRevActive(event, element) {
    event.preventDefault();

    let links1 = document.querySelectorAll('.dec-rev .nav-link1');
    links1.forEach(link => link.classList.remove('active'));

    element.classList.add('active');
}


// For product_details.html
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        fetchProductDetails(productId);
    } else {
        console.error("Product ID is missing in the URL!");
    }
});



// Product Data Array
const products = [
    {
        id: 1,
        name: "Yellow Potatoes Whole Fresh, 5lb Bag",
        name1: "Yellow Potatoes Whole Fresh, 5lb Bag",
        discount: "75%",
        price: "$0.50",
        originalPrice: "$1.99",
        // rating: 4.5,
        // reviews: 120,
        // stock: "In Stock",
        // details: "Freshly picked strawberries from organic farms.",
        image: "images/potatoes.jpg",
        imageSub: "images/potatoes.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "3:00",
        code: "E7F8G9H0"
    },
    {
        id: 2,
        name: "Large Bagged Oranges",
        name1: "Large Bagged Oranges",
        discount: "50%",
        price: "$0.89",
        originalPrice: "$1.78",
        image: "images/orange.jpg",
        imageSub: "images/orange.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "F258G9T0"
    },
    {
        id: 3,
        name: "Strawberries – 1lb",
        name1: "Strawberries – 1lb",
        discount: "31%",
        price: "$1.50",
        originalPrice: "$2.15",
        image: "images/strawberries.jpg",
        imageSub: "images/strawberries.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "G473B5V1"
    },
    {
        id: 4,
        name: "Simple Kitchen FD Sliced Strawberries – 1.08lb",
        name1: "Simple Kitchen FD Sliced Strawberries – 1.08lb",
        discount: "13%",
        price: "$21.90",
        originalPrice: "$24.90",
        image: "images/simple-kitchen.jpg",
        imageSub: "images/simple-kitchen.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "J692C8M2"
    },
    {
        id: 5,
        name: "Peach – each",
        name1: "Peach – each",
        discount: "58%",
        price: "$0.75",
        originalPrice: "$1.75",
        image: "images/apple.jpg",
        imageSub: "images/apple.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "3:40",
        code: "K184X7N3"
    },
    {
        id: 6,
        name: "Marketside Fresh Organic Bananas, Bunch",
        name1: "Marketside Fresh Organic Bananas, Bunch",
        discount: "56%",
        price: "$0.89",
        originalPrice: "$1.99",
        image: "images/banana.jpg",
        imageSub: "images/banana.jpg",
        imageSub2: "images/banana2.jpg",
        imageSub3: "images/banana3.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "2",
        ratingDigit: "3:00",
        code: "D203P9W4"
    },
    {
        id: 7,
        name: "Large Garden Spinach & Herb Wrap Tortillas –…",
        name1: "Large Garden Spinach & Herb Wrap Tortillas –…",
        discount: "16%",
        price: "$27.90",
        originalPrice: "$32.90",
        image: "images/wraps.jpg",
        imageSub: "images/wraps.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "H569Y1Q5"
    },
    {
        id: 8,
        name: "Halloween Harvest Caramel Apple Soft Caramels –…",
        name1: "Halloween Harvest Caramel Apple Soft Caramels –…",
        discount: "10%",
        price: "$19.37",
        originalPrice: "$21.37",
        image: "images/caramel-apple.jpg",
        imageSub: "images/caramel-apple.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "3:00",
        code: "L308S2A6"
    },
    {
        id: 9,
        name: "Fresh Purple Eggplant",
        name1: "Fresh Purple Eggplant",
        discount: "26%",
        price: "$2.99",
        originalPrice: "$3.99",
        image: "images/brinjal.jpg",
        imageSub: "images/brinjal.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "M127R4F7"
    },
    {
        id: 10,
        name: "Fresh Pomegranate, Each",
        name1: "Fresh Pomegranate, Each",
        discount: "50%",
        price: "$1.50",
        originalPrice: "$2.99",
        image: "images/pomegranate.jpg",
        imageSub: "images/pomegranate.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "Z635T9U8"
    },
    {
        id: 11,
        name: "Fresh Lemon, Each",
        name1: "Fresh Lemon, Each",
        discount: "75%",
        price: "$0.50",
        originalPrice: "$1.99",
        image: "images/lemon.jpg",
        imageSub: "images/lemon.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "2",
        ratingDigit: "2:00",
        code: "V417L3E9"
    },
    {
        id: 12,
        name: "Fresh Cauliflower, Each",
        name1: "Fresh Cauliflower, Each",
        discount: "14%",
        price: "$12.79",
        originalPrice: "$14.79",
        image: "images/veg-1.jpg",
        imageSub: "images/veg-1.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "2",
        ratingDigit: "3:00",
        code: "S820K5P0"
    },
    {
        id: 13,
        name: "Fresh Broccoli Crowns, Each",
        name1: "Fresh Broccoli Crowns, Each",
        discount: "36%",
        price: "$11.54",
        originalPrice: "$17.88",
        image: "images/veg-2.jpg",
        imageSub: "images/veg-2.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "P549W1G1"
    },
    {
        id: 14,
        name: "Blackberries – 6oz",
        name1: "Blackberries – 6oz",
        discount: "41%",
        price: "$2.99",
        originalPrice: "$4.99",
        image: "images/berries.jpg",
        imageSub: "images/berries.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:00",
        code: "T692N7B2"
    },
    {
        id: 15,
        name: "30g Protein Shake – Salted Caramel – 11 fl oz-4pk",
        name1: "30g Protein Shake – Salted Caramel – 11 fl oz-4pk",
        discount: "8%",
        price: "$11.99",
        originalPrice: "$12.99",
        image: "images/quest.jpg",
        imageSub: "images/quest.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "4:50",
        code: "Q837V5D3"
    },
    {
        id: 16,
        name: "Fresh Granny Smith Apple, Each",
        name1: "Fresh Granny Smith Apple, Each",
        discount: "17%",
        price: "$15.99",
        originalPrice: "$9.88",
        image: "images/green-apple.jpg",
        imageSub: "images/green-apple.jpg",
        imageLeaf: "images/leaf-icon.svg",
        organic: "ORGANIC",
        imgZoom: "images/zoom.svg",
        ratingNo: "3",
        ratingDigit: "5:00",
        code: "R504C2Y4"
    },
];

// Get product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find the product details by ID
const product = products.find(p => p.id === productId);

// Map data to the details page
if (product) {
    document.querySelector('.product-image').src = product.image;
    document.querySelector('.sub-img').src = product.imageSub || product.image;
    document.querySelector('.sub-img2').src = product.imageSub2;
    document.querySelector('.sub-img3').src = product.imageSub3;
    document.querySelector('.leaf').src = product.imageLeaf;
    document.querySelector('.zoom').src = product.imgZoom;
    document.querySelector('.product-name').textContent = product.name;
    document.querySelector('.product-name1').textContent = product.name1;
    document.querySelector('.product-price').textContent = product.price;
    document.querySelector('.product-discount').textContent = product.discount;
    document.querySelector('.org').textContent = product.organic;
    document.querySelector('.original-price').textContent = product.originalPrice;
    document.querySelector('.rating-digit').textContent = product.ratingDigit || "N/A";
    document.querySelector('.rating-no').textContent = product.ratingNo || "0";
    document.querySelector('.code').textContent = product.code;
    
    const hiddenOrganicIds = new Set([1,2, 3, 5, 8]);
    if (hiddenOrganicIds.has(product.id)) {
        const pctOrg = document.querySelector('.organic');
        if (pctOrg) {
            pctOrg.style.display = 'none';
        }
    }

    const hiddenSubImg1 = new Set([1,2,3,4,5,7,8,9,10,11,12,13,14,15,16]);
    if (hiddenSubImg1.has(product.id)) {
        const subImg = document.querySelector('.active-sub-img-1');
        if (subImg) {
            subImg.style.display = 'none';
        }
    }
    
    const hiddenSubImg2 = new Set([1,2,3,4,5,7,8,9,10,11,12,13,14,15,16]);
    if (hiddenSubImg2.has(product.id)) {
        const subImg = document.querySelector('.active-sub-img-2');
        if (subImg) {
            subImg.style.display = 'none';
        }
    }


} else {
    // Handle case where product isn't found
    document.querySelector('.details-container').innerHTML = "Product not found.";
}





function changeValue(delta) {
    const input = document.getElementById('number');
    const currentValue = parseInt(input.value) || 0;
    input.value = currentValue + delta;
  }



  function renderSuggestedProducts() {
    // Exclude the current product from suggestions
    const suggestions = products.filter(p => p.id !== productId);

    // Shuffle and select the first 6 products
    const shuffledSuggestions = suggestions.sort(() => 0.5 - Math.random()).slice(0, 6);

    // Get the suggested products container
    const suggestedContainer = document.querySelector('.suggested-container');

    // Generate HTML for suggested products using your product-card structure
    const suggestedHTML = shuffledSuggestions.map(product => `
        <div class="product-card">
            <a href="product_details.html?id=${product.id}">
                <img class="veg" src="${product.image}" alt="${product.name}">
            </a>
            <div class="pct">
                <span>${product.discount}</span>
                <a href="">
                    <img src="images/heart-icon.svg" alt="heart" class="heart">
                </a>
            </div>
            <a href="" class="color">
                <div class="orange"></div>
                <div class="white"></div>
            </a>
            <div class="content">
                <h3 class="p-name">${product.name}</h3>
                <div class="star">
                    <div class="star-rating">
                        <div class="filled-stars" style="width: 73%;"></div>
                    </div>
                    <h6>${product.ratingNo || 0}</h6>
                </div>
                <div class="price">
                    <h3>${product.price}</h3>
                    <h4>${product.originalPrice}</h4>
                </div>
                <div class="stock">
                    <a href="" class="cart">
                        <img src="images/cart-white.svg" alt="cart">
                    </a>
                    <h4>${product.stock || "IN STOCK"}</h4>
                </div>
            </div>
        </div>
    `).join('');

    // Inject the generated HTML into the container
    suggestedContainer.innerHTML = suggestedHTML;
}

// Call the function after page load
if (product) {
    renderSuggestedProducts();
}





