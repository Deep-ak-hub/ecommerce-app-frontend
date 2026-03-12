import { ProductCard } from "../components/ProductCard";

export const Products = () => {
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

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};
