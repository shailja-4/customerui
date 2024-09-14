

  document.addEventListener("DOMContentLoaded", () => {
   
    const url = new URLSearchParams(window.location.search);
    const productId = url.get('productId');
    
    if (productId) {
        const apiUrl = `https://fakestoreapi.com/products/${productId}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(product => {
                const productinfo = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <p><strong>Category:</strong> ${product.category}</p>
                `;
                document.getElementById('product').innerHTML = productinfo;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('product').innerHTML = '<p>Error.</p>';
            });
    } else {
        document.getElementById('product').innerHTML = '<p>No product ID provided.</p>';
    }
}); 