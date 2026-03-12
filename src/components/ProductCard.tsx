type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};

export const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <>
      <div className="border rounded-lg p-4 shadow">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />

        <h2 className="mt-3 font-semibold text-lg">{title}</h2>

        <p className="text-blue-600 font-bold">
            Rs. {price}
        </p>
      </div>
    </>
  );
};
