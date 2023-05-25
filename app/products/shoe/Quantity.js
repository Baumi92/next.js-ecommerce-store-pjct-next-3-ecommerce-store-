import { useState } from 'react';

export default function ShoePage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');

  const addProduct = () => {
    if (!name.trim()) {
      return; // Prevent adding a guest with empty fields
    }

    const newProduct = {
      id: Date.now(), // Generate a unique ID
      name: name.trim(),

      attending: false,
    };

    setProducts([...products, newProduct]);
    setName('');
  };
  // delete guest
  const deleteProduct = (id) => {
    setProducts(products.filter((products) => products.id !== id));
  };

  return (
    <main>
      <div>
        <div>
          <label htmlFor="name"> name:</label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <button onClick={addProduct}>Add Guest</button>
        <hr />
        <h2>Product:</h2>
        {products.map((products) => (
          <div key={`product-${products.id}`} data-test-id="guest">
            <span>{products.name}</span>
            <button
              aria-label={`Remove ${products.name}`}
              onClick={() => deleteProduct(products.id)}
            />
            Remove
          </div>
        ))}
      </div>
    </main>
  );
}
