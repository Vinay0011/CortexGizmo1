window.onload = function () {
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1tgy-c34BYJ3tfpqbcnBOOXqrpyq36v72PR21MacyD1Y/edit?usp=sharing',
    callback: showData,
    simpleSheet: true
  });
};

function showData(data) {
  console.log(data); // Data check karne ke liye
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.Image1}" alt="${product.Name}">
      </div>
      <div class="product-info">
        <h2>${product.Name}</h2>
        <p><strong>Price:</strong> ₹${product.Price}</p>
        <p>${product.Description}</p>
        <a class="order-button" href="https://wa.me/919285539561?text=I'm%20interested%20in%20${encodeURIComponent(product.Name)}" target="_blank">Order Now</a>
      </div>
    `;

    container.appendChild(card);
  });
}

  
