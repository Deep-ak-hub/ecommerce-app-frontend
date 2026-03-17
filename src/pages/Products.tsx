import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";

type ProductsProps = {
  search?: string;
};

export const Products = ({ search }: ProductsProps) => {
  const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 120000,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      price: 110000,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
    },
    {
      id: 3,
      title: "MacBook Pro",
      price: 280000,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
  ];

  useEffect(() => {
    // setSearch(search)
    console.log("search changed: ", search);
  }, [search]);

  const filteredProducts = products.filter((product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return products
    }
  });
  const handleProductClick = (id: number) => {
    alert(`Product ${id} clicked`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          onProductClick={handleProductClick} //Here we are passing the function reference, not executing it.
        />
      ))}
    </div>
  );
};

/* export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
 */
