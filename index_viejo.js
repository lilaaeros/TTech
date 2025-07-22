// aca esta todo lo del index.js

const [,, method, resource, ...args] = process.argv;

const API_URL = 'https://fakestoreapi.com';

async function main() {
  try {
    // si es GET a todos los productos
    if (method === 'GET' && resource === 'products') {
      const res = await fetch(`${API_URL}/products`);
      const data = await res.json();
      console.log(data);
    }

    // si es GET a un producto específico
    else if (method === 'GET' && resource.startsWith('products/')) {
      const productId = resource.split('/')[1];
      const res = await fetch(`${API_URL}/products/${productId}`);
      const data = await res.json();
      console.log(data);
    }

    // si es POST para crear producto
    else if (method === 'POST' && resource === 'products') {
      const [title, price, category] = args;
      const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          category
        })
      });
      const data = await res.json();
      console.log('Producto creado:', data);
    }

    // si es DELETE a un producto
    else if (method === 'DELETE' && resource.startsWith('products/')) {
      const productId = resource.split('/')[1];
      const res = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      console.log('Producto eliminado:', data);
    }

    else {
      console.log('Comando no válido.');
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();