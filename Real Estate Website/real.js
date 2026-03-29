// Dark / Light Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
});

// Search by Location
const searchInput = document.querySelector(".search-box input");
const propertyCards = document.querySelectorAll(".property-card");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    propertyCards.forEach(card => {
        const location = card.dataset.location.toLowerCase();
        card.style.display = location.includes(query) ? "block" : "none";
    });
});

// Filter by Property Type & Max Price
const typeSelect = document.querySelector(".search-box select:nth-of-type(1)");
const priceSelect = document.querySelector(".search-box select:nth-of-type(2)");

function filterProperties(){
    const type = typeSelect.value.toLowerCase();
    const price = parseInt(priceSelect.value.replace(/[^0-9]/g,'')); 

    propertyCards.forEach(card => {
        const cardType = card.dataset.type.toLowerCase();
        const cardPrice = parseInt(card.dataset.price);

        let typeMatch = (type === "property type" || cardType === type);
        let priceMatch = (isNaN(price) || cardPrice <= price);

        card.style.display = (typeMatch && priceMatch) ? "block" : "none";
    });
}

typeSelect.addEventListener("change", filterProperties);
priceSelect.addEventListener("change", filterProperties);