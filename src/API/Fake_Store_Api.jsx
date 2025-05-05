import React, { useEffect, useState } from 'react';

export default function Fake_Store_Api() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch API data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  // Add item to cart
  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* Header with Cart Icon */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Fake Store Products</h2>
        <div style={{ position: "relative", marginRight: "20px" }}>
          <span
            style={{ fontSize: "28px", cursor: "pointer" }}
            onClick={() => setShowCart(!showCart)}
          >
            🛒
          </span>
          {cartItems.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "3px 8px",
                fontSize: "12px",
              }}
            >
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
      </div>

      {/* Cart Popup with Total Price */}
      {showCart && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "30px",
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            zIndex: 1000,
            padding: "15px",
          }}
        >
          {/* Close Icon */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 style={{ margin: 0 }}>🛒 Your Cart</h4>
            <span
              style={{
                cursor: "pointer",
                fontSize: "18px",
                background: "#eee",
                borderRadius: "50%",
                padding: "0 8px",
              }}
              onClick={() => setShowCart(false)}
            >
              ❌
            </span>
          </div>

          <hr style={{ margin: "10px 0" }} />

          {cartItems.length === 0 ? (
            <p style={{ color: "#888" }}>Cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "10px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", objectFit: "contain", marginRight: "10px" }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <p style={{ margin: 0, fontSize: "14px" }}>{item.title.slice(0, 30)}...</p>
                    <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}

              {/* Total Price */}
              <div
                style={{
                  borderTop: "1px solid #ccc",
                  marginTop: "10px",
                  paddingTop: "10px",
                  textAlign: "right",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Total: ₹
                {cartItems
                  .reduce((acc, item) => acc + item.price * 85 * item.quantity, 0)
                  .toFixed(2)}
              </div>
            </>
          )}
        </div>
      )}

      {/* Search Bar */}
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      {/* Product Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h4>{product.title.slice(0, 40)}...</h4>
            <p>
              <strong>Price:</strong> ₹{(product.price * 85).toFixed(2)}
            </p>
            <p style={{ fontSize: "13px", color: "#555" }}>
              {product.description.slice(0, 80)}...
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* No Match Message */}
      {filteredProducts.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "40px", color: "#888" }}>
          No products found.
        </p>
      )}
    </div>
  );
}
