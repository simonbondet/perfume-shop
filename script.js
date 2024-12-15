// Sample data for perfumes with images
const perfumes = [
    { name: "Choco Musk", price: 500, image: "images/choco-musk.jpg" },
    { name: "Silver", price: 500, image: "images/silver.jpg" },
    { name: "Soft", price: 500, image: "images/soft.jpg" },
    { name: "Sabaya", price: 500, image: "images/sabaya.jpg" },
    { name: "Grape Raspberry", price: 500, image: "images/grape-raspberry.jpg" },
    { name: "Fantastic", price: 500, image: "images/fantastic.jpg" },
    { name: "Men", price: 500, image: "images/men.jpg" },
    { name: "Lord", price: 500, image: "images/lord.jpg" },
    { name: "Distance", price: 500, image: "images/distance.jpg" },
    { name: "Hawaii Zaharat", price: 500, image: "images/hawaii-zaharat.jpg" }
];

// Function to display perfumes
function displayPerfumes() {
    const productList = document.getElementById('product-list');
    perfumes.forEach(perfume => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${perfume.image}" alt="${perfume.name}">
            <h3>${perfume.name}</h3>
            <p>Price: Ksh. ${perfume.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Call the function to display perfumes on page load
displayPerfumes();