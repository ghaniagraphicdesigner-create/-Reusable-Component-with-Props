import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>

      {/* Task 2: Interactive Like Button */}
      <LikeButton />

      {/* Task 1: Reusable Product Cards */}
      <ProductCard
        title="Laptop"
        price="800"
        category="Electronics"
      />

      <ProductCard
        title="Running Shoes"
        price="120"
        category="Sports"
      />
    </div>
  );
}

export default App;
