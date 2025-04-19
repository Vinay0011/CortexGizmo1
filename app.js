window.onload = function() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1tgy-c34BYJ3tfpqbcnBOOXqrpyq36v72PR21MacyD1Y/edit?usp=sharing',
      simpleSheet: true,
      callback: function(data) {
        displayProducts(data);
      }
    });
  };
  
  function displayProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product['Image Link 1']}" alt="${product['Product Name']}">
        <div class="content">
          <h2>${product['Product Name']}</h2>
          <p class="description">${product['Description']}</p>
          <p class="price">${product['Price']}</p>
          <a class="order-btn" href="${product['Order Link']}" target="_blank">Order Now</a>
        </div>
      `;
      container.appendChild(card);
    });
  }
  