// components/product-description.tsx
import FadeRight from "@/components/motionEffect/FadeRight";
import React from "react";

interface Product {
  icon: string;
  title: string;
  img: string;
  description: string;
}

interface ProductDescriptionProps {
  product: Product | null;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  if (!product) {
    return <div>Select a product to see the details.</div>;
  }

  return (
    <div className="bg-white p-12 md:py-24 flex flex-col md:flex-row lg:flex-row justify-center items-start gap-8 shadow-2xl rounded-md">
      <img
        src={product.img}
        alt={product.title}
        className="w-81 h-81 object-cover"
      />
      <FadeRight>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold md:text-6xl md:font-black bg-blue-700 py-2 px-6">
            {product.title}
          </h2>
          <p className="mt-4 text-xl">{product.description}</p>
        </div>
      </FadeRight>
    </div>
  );
};

export default ProductDescription;
