import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import Navbar from "@/components/Navbar";

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
      description: "Latest iPhone with advanced camera system and A17 Pro chip"
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      price: 110000,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
      description: "Flagship Samsung phone with AI photography features"
    },
    {
      id: 3,
      title: "MacBook Pro",
      price: 280000,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description: "Premium laptop with M3 Max processor for professionals"
    },
    {
      id: 4,
      title: "iPad Air",
      price: 80000,
      image: "https://images.unsplash.com/photo-1648806030599-c963fd14a22f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Versatile tablet perfect for work and entertainment"
    },
    {
      id: 5,
      title: "Sony WH-1000XM5",
      price: 35000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "Industry-leading noise-cancelling wireless headphones"
    },
    {
      id: 6,
      title: "Google Pixel 8",
      price: 85000,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      description: "AI-powered smartphone with exceptional computational photography"
    },
    {
      id: 7,
      title: "Apple Watch Series 9",
      price: 45000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Advanced fitness and health tracking smartwatch"
    },
    {
      id: 8,
      title: "OnePlus 12",
      price: 65000,
      image: "https://images.unsplash.com/photo-1600721502738-84bd123c8a99?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "High-performance Android phone with fast charging"
    },
    {
      id: 9,
      title: "AirPods Pro 2",
      price: 29000,
      image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Premium wireless earbuds with adaptive audio"
    },
    {
      id: 10,
      title: "Dell XPS 13",
      price: 150000,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      description: "Compact ultrabook with stunning InfinityEdge display"
    },
    {
      id: 11,
      title: "Kindle Paperwhite",
      price: 18000,
      image: "https://images.unsplash.com/photo-1504598561342-6b76820ef3e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "E-reader with waterproof design and warm light"
    },
    {
      id: 12,
      title: "DJI Mini 4 Pro",
      price: 95000,
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31",
      description: "Compact drone with 4K camera and 34-min flight time"
    },
    {
      id: 13,
      title: "Oculus Quest 3",
      price: 55000,
      image: "https://images.unsplash.com/photo-1698051149619-06ea4df4787c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Advanced VR headset for immersive gaming experience"
    },
    {
      id: 14,
      title: "GoPro Hero 12",
      price: 48000,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      description: "Rugged action camera with 5.3K video recording"
    },
    {
      id: 15,
      title: "Samsung 4K Smart TV",
      price: 75000,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description: "65-inch Smart TV with stunning picture quality and app support"
    },
    {
      id: 16,
      title: "Microsoft Surface Pro 9",
      price: 135000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      description: "2-in-1 tablet laptop with touchscreen and stylus support"
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
      return products;
    }
  });
  const handleProductClick = (id: number) => {
    alert(`Product ${id} clicked`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            onProductClick={handleProductClick} //Here we are passing the function reference, not executing it.
          />
        ))}
      </div>
    </>
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
