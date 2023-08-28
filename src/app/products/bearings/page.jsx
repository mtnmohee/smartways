/* eslint-disable react/no-unescaped-entities */
import { Start, ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function Bearings() {
  const bearingData = [
    {
      img: "/products/bearings/DGBB.jpg",
      desc: "Deep Groove Ball Bearings",
    },
    {
      img: "/products/bearings/ACBB.jpg",
      desc: "Angular Contact Ball Bearings",
    },
    {
      img: "/products/bearings/Self alingning ball bearings.jpg",
      desc: "Self Alingning Ball Bearings",
    },
    {
      img: "/products/bearings/Cylindrical Roller-Bearing.jpg",
      desc: "Cylindrical Roller Bearing",
    },
    {
      img: "/products/bearings/insert bearing.jpg",
      desc: "Insert Bearing",
    },
    {
      img: "/products/bearings/Carb-Toroidal-Roller-Bearing.jpg",
      desc: "Carb Toroidal Roller Bearing",
    },
    {
      img: "/products/bearings/Cylindrical-Roller-Thrust-Bearings.jpg",
      desc: "Cylindrical Roller Thrust Bearings",
    },
    {
      img: "/products/bearings/needle roller bearings.jpg",
      desc: "Needle Roller Bearings",
    },
    {
      img: "/products/bearings/spherical-roller-bearing.jpg",
      desc: "Spherical Roller Bearing",
    },
    {
      img: "/products/bearings/tapered.jpg",
      desc: "Tapered",
    },
    {
      img: "/products/bearings/thrust-spherical-roller-bearing.jpg",
      desc: "Thrust Spherical Roller Bearing",
    },
    {
      img: "/products/bearings/thurst.jpg",
      desc: "Thrust Bearing",
    },
  ];
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

      <div className="w-4/5 flex flex-col mx-auto my-10 ">
        <h3 className="text-2xl font-semibold ">
          <span>
            <Start className="text-4xl" />
          </span>{" "}
          Bearings
        </h3>

        <div className="flex items-center justify-center flex-wrap  ">
          {bearingData.map((item, i) => (
            <div
              key={i}
              className="border-2 border-gray-300 p-2 m-3 w-60 h-60 flex flex-col items-center justify-center"
            >
              <Image src={item.img} alt={item.desc} width={200} height={200} />
              <h3 className="text-sm my-1 text-gray-500">{item.desc}</h3>
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="text-blue-800 hover:text-red-600 mt-7 md:w-1/5"
        >
          <h3 className="text-xl md:text-2xl font-semibold ">
            <span>
              <ArrowBack className="text-xl lg:text-4xl font-semibold" />
            </span>
            Go back
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Bearings;
