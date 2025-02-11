// Tab Select feature
let activeTab = "description";

function tabSelect(tab) {
    document.getElementById(tab).classList.toggle("hidden");
    document.getElementById(tab + "-title").classList.toggle("border-b-4");
    document.getElementById(activeTab).classList.toggle("hidden");
    document
        .getElementById(activeTab + "-title")
        .classList.toggle("border-b-4");
    activeTab = tab;
}

// Search active
// document.getElementById("search").addEventListener("focus", () => {
//     document.getElementById("searchResults").classList.remove("hidden");
// });

// document.getElementById("search").addEventListener("blur", () => {
//     document.getElementById("searchResults").classList.add("hidden");
// });

// Slideover cart
function toggleSlideoverCart() {
    document.getElementById("slideoverCart").classList.toggle("hidden");
}

$(document).on("cart.requestComplete", function (event, cart) {
    $("#counter").html(cart.item_count);
    $("#cart-counter").html(cart.item_count + " items");
});

// Search AJAX

function predictiveSearch() {
    const predictiveSearchSection = document.querySelector("#searchResults");
    console.log(predictiveSearchSection);

    var query = document.getElementById("search").value.trim();

    var requestResponse;

    fetch(
        window.Shopify.routes.root +
            `search/suggest?q=${query}&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title,variants.sku&section_id=search-results`
    )
        .then((response) => {
            requestResponse = response;
            return response.text();
        })
        .then((text) => {
            if (!requestResponse.ok) {
                throw new Error(`${requestResponse.status}: ${text}`);
            }
            const resultsMarkup = new DOMParser()
                .parseFromString(text, "text/html")
                .querySelector("#searchResults").innerHTML;

            predictiveSearchSection.innerHTML = resultsMarkup;
        })
        .catch((error) => {
            console.error(error);
        });
}
