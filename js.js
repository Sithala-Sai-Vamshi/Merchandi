const products = [
    {
        id: 1,
        image: 'images/Exodia 2023.jpeg',
        title: 'Exodia T-shirt 2023',
        price: '599/-'
    },
    {
        id: 2,
        image: 'images/Exodia 2022.jpeg',
        title: 'Exodia T-shirt 2022',
        price: '499/-'
    },
    {
        id: 3,
        image: 'images/TED.jpg',
        title: 'TEDx Talks Merch',
        price: '599/-'
    },
    {
        id: 4,
        image: 'images/Hoodie.jpg',
        title: 'IIT-Mandi Hoodie',
        price: '$499/-'
    },
    {
        id: 5,
        image: 'images/Tshirt.jpg',
        title: 'IIT-Mandi T-Shirt',
        price: '499/-'
    },
    {
        id: 6,
        image: 'images/microsoft.jpg',
        title: 'Microsoft T-Shirt',
        price: '399/-'
    },
    {
        id: 7,
        image: 'images/google.jpg',
        title: 'Google T-Shirt',
        price: '399/-'
    },
    {
        id: 8,
        image: 'images/G20.jpg',
        title: 'G20 Merch',
        price: '499/-'
    }
]

const productsContainer = document.getElementById('root')
productsContainer.innerHTML = products.map((product) => {
    const { image, title, price } = product;
    return `
        <div class="product">
            <div class="img-box">
                <img src="${image}" alt="${title}">
            </div>
            <div class="details">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
}).join('');
