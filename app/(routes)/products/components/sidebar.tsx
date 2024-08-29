'use client'
import React, { useState } from "react";
import ProductDescription from "./product-description";

interface Product {
  icon: string;
  title: string;
  img: string;
  description: string;
}

const products: Product[] = [
  {
    icon: "🚚",
    title: "Logistics",
    img: "/img/products/logistics.jpg",
    description:
      "Our comprehensive logistics services ensure your goods are transported safely and efficiently across the globe. From warehousing to final delivery, we handle every aspect with precision and care, tailored to meet the specific needs of your business.",
  },
  {
    icon: "🏗️",
    title: "Construction",
    img: "/img/products/construction.jpg",
    description:
      "We offer end-to-end construction services that cover everything from initial design to final build. Our expert team is dedicated to delivering high-quality projects on time and within budget, whether you're building commercial properties, residential homes, or large-scale infrastructure.",
  },
  {
    icon: "🚜",
    title: "Agriculture",
    img: "/img/products/agriculture.jpg",
    description:
      "Our agriculture services are designed to support farmers and agribusinesses with innovative solutions for crop management, soil health, and sustainable farming practices. We provide tools and expertise that help maximize yield and profitability while ensuring environmental stewardship.",
  },
  {
    icon: "🚛",
    title: "Transport",
    img: "/img/products/transport.jpg",
    description:
      "We provide reliable and efficient transport services, ensuring your goods are delivered on time, every time. Our fleet is equipped to handle a wide range of cargo, and we offer tailored solutions that meet the unique demands of your supply chain.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    img: "/img/products/manufacturing.jpg",
    description:
      "Our manufacturing services combine advanced technology with skilled craftsmanship to produce high-quality products. We offer a full range of manufacturing capabilities, from prototyping to mass production, tailored to meet the specific needs of your business.",
  },
  {
    icon: "🚗",
    title: "Automobile",
    img: "/img/products/automobile.jpg",
    description:
      "Our automobile services encompass everything from vehicle manufacturing to maintenance and repair. We leverage cutting-edge technology and industry expertise to deliver vehicles that are reliable, efficient, and built to last, with a focus on customer satisfaction.",
  },
];


const Sidebar: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="flex flex-col w-full md:flex-row lg-flex-row ">
      <div className="sidebar flex flex-col gap-2">
        {products.map((product, index) => (
          <div
            key={index}
            className={`px-10 py-6 cursor-pointer ${
              selectedProduct?.title === product.title
                ? "bg-gray-200 border-r-4 border-orange-500"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedProduct(product)}>
            <div className="flex items-center gap-2">
              <span>{product.icon}</span>
              <span className="font-bold">{product.title}</span>
            </div>
          </div>
        ))}
      </div>
      <ProductDescription product={selectedProduct} />
    </div>
  );
};

export default Sidebar;
