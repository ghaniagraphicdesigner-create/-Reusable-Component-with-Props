import ProductCard from "./ProductCard";

function App() {
  return (
    <div>
      <h1>Our Products</h1>

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
