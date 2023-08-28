import Image from "next/image";
import ProductTabs from "@/components/productTabs";

function Products() {
  return (
    <div className="w-screen">
      <div className="bg-[url('/products/products-banner.jpg')] h-96 w-screen bg-cover bg-center">
        <div className="w-full h-full bg-sky-700 bg-opacity-40"></div>
      </div>

      <div className="w-4/5 flex flex-col items-center justify-center mx-auto my-10 text-center">
        <h3 className="text-2xl font-semibold mb-5">WE'RE CUSTOMER FOCUSED</h3>
        <p className="text-gray-700">
          We believe our success is tied to that of our customers. So, our broad
          product portfolio is fueled by their ambitions.
        </p>
      </div>

      <ProductTabs />
    </div>
  );
}

export default Products;
