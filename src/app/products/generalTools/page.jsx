/* eslint-disable react/no-unescaped-entities */
import { Start, ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function GeneralTools() {
  const toolsData = [
    {
      img: "/products/general tools/item 1.png",
      desc: "Shaft Alignment Tool",
    },
    {
      img: "/products/general tools/item 2.jpg",
      desc: "Vibration Analyzer",
    },
    {
      img: "/products/general tools/item 3.png",
      desc: "Ulrasonic Leak Detector",
    },
    {
      img: "/products/general tools/item 4.png",
      desc: "Pre-cut Shims",
    },
    {
      img: "/products/general tools/item 5.png",
      desc: "QuickCollect Sensor",
    },
    {
      img: "/products/general tools/item 6.png",
      desc: "Induction Heaters",
    },
    {
      img: "/products/general tools/item 7.png",
      desc: "Hydraulic Pullers",
    },
    {
      img: "/products/general tools/item 8.png",
      desc: "Heating Rings",
    },
    {
      img: "/products/general tools/item 9.png",
      desc: "Bearing Fitting Tool",
    },
    {
      img: "/products/general tools/item 10.png",
      desc: "Heat & Oil Resistant Gloves",
    },
    {
      img: "/products/general tools/item 11.png",
      desc: "Electronic Stethoscope",
    },
    {
      img: "/products/general tools/item 12.png",
      desc: "Sound Pressure Meter",
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
          General Tools
        </h3>

        <div className="flex items-center justify-center flex-wrap  ">
          {toolsData.map((item, i) => (
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
          <h3 className="text-xl md:text-2xl font-semibold  ">
            <span>
              <ArrowBack className="text-xl lg:text-4xl font-semibold" />
            </span>{" "}
            Go back
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default GeneralTools;
