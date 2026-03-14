type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  onProductClick: (id: number) => void;
};

export const ProductCard = ({id, title, price, image, onProductClick}: ProductCardProps) => {
  return (
    <>
      <div
        onClick={() => onProductClick(id)}
        className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer transform hover:scale-95"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />

        <h2 className="mt-3 font-semibold text-lg">{title}</h2>

        <p className="text-blue-600 font-bold">Rs. {price}</p>
      </div>
    </>
  );
};
