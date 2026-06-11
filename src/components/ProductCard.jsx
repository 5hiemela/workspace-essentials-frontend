function ProductCard() {
  const productName = "Premium Coffee Beans";
  const price = 14.99;

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "200px" }}>
      <h3>{productName}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;