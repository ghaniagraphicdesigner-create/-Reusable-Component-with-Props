function ProductCard({ title, price, category }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;
