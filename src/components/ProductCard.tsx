import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  isFavourite?: boolean;
  description: string;
  onProductClick: (id: number) => void;
};

export const ProductCard = ({
  id,
  title,
  price,
  image,
  description,
  isFavourite = false,
  onProductClick,
}: ProductCardProps) => {
  const [isFav, setIsFav] = useState(isFavourite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFav(!isFav);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Buying product ${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added product ${id} to cart`);
  };

  return (
    <>
      <div
        onClick={() => onProductClick(id)}
        className="border flex flex-col justify-between rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer transform hover:scale-105"
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 focus:outline-none transition cursor-pointer hover:scale-110 bg-white/60 backdrop-blur-sm p-1.5 rounded-full"
          >
            <HeartIcon
              className={`size-5 ${isFav ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </button>
        </div>

        <h2 className="mt-3 font-semibold text-lg">{title}</h2>

        <p className="text-gray-600 text-sm line-clamp-2 mt-1">{description}</p>

        <div className="flex items-center justify-between mt-3 mb-4">
          <p className="text-primary font-bold text-sm sm:text-base">
            Rs. {price}
          </p>
        </div>

        <div className="flex gap-2 w-full">
          <button
            onClick={handleBuyNow}
            className="flex-1 py-2 px-2 sm:py-2 sm:px-3 bg-primary text-primary-foreground rounded-md font-semibold text-xs sm:text-sm transition duration-300 cursor-pointer hover:brightness-110 hover:shadow-md"
          >
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2 px-2 sm:py-2 sm:px-3 rounded-md bg-vibrant-start text-vibrant-foreground font-semibold text-xs sm:text-sm transition duration-300 cursor-pointer hover:brightness-110 hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
