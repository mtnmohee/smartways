/* eslint-disable react/no-unescaped-entities */
import { Start, ArrowBack, PlayCircleRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function BoltingTools() {
  const torqueWrenchesData = [
    {
      img: "/products/bolting/Torque Wrenches/1.jpg",
      desc: "MX-EC / MSX",
    },
    {
      img: "/products/bolting/Torque Wrenches/2.jpg",
      desc: "FSX",
    },
    {
      img: "/products/bolting/Torque Wrenches/3.jpg",
      desc: "K Series",
    },
    {
      img: "/products/bolting/Torque Wrenches/4.jpg",
      desc: "HPR",
    },
  ];

  const electricpowerData = [
    {
      img: "/products/bolting/Electric power packs/1.jpg",
      desc: "XB power packs",
    },
    {
      img: "/products/bolting/Electric power packs/2.jpg",
      desc: "IQ power packs",
    },
    {
      img: "/products/bolting/Electric power packs/3.jpg",
      desc: "Dual power pack",
    },
    {
      img: "/products/bolting/Electric power packs/4.jpg",
      desc: "TAX power pack",
    },
  ];

  const accessoriesData = [
    {
      img: "/products/bolting/Accessories/1.jpg",
      desc: "Sockets and inserts",
    },
    {
      img: "/products/bolting/Accessories/2.jpg",
      desc: "Operating materials & lubricants",
    },
    {
      img: "/products/bolting/Accessories/3.jpg",
      desc: "Reaction arms",
    },
    {
      img: "/products/bolting/Accessories/4.jpg",
      desc: "Valve wheel driver for gate valves",
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
          Bolting Tools
        </h3>

        <div>
          <h3 className="flex items-center gap-3 mt-7">
            {" "}
            <span>
              <PlayCircleRounded />
            </span>
            Hydraulic Torque Wrenches
          </h3>
          <div className="flex items-center justify-center flex-wrap  ">
            {torqueWrenchesData.map((item, i) => (
              <div
                key={i}
                className="border-2 border-gray-300 p-2 m-3 w-60 h-60 flex flex-col items-center justify-center"
              >
                <Image
                  src={item.img}
                  alt={item.desc}
                  width={200}
                  height={200}
                />
                <h3 className="text-sm my-1 text-gray-500">{item.desc}</h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-3 mt-7">
            {" "}
            <span>
              <PlayCircleRounded />
            </span>
            Electric power packs
          </h3>
          <div className="flex items-center justify-center flex-wrap  ">
            {electricpowerData.map((item, i) => (
              <div
                key={i}
                className="border-2 border-gray-300 p-2 m-3 w-60 h-60 flex flex-col items-center justify-center"
              >
                <Image
                  src={item.img}
                  alt={item.desc}
                  width={200}
                  height={200}
                />
                <h3 className="text-sm my-1 text-gray-500">{item.desc}</h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-3 mt-7">
            {" "}
            <span>
              <PlayCircleRounded />
            </span>
            Accessories
          </h3>
          <div className="flex items-center justify-center flex-wrap  ">
            {accessoriesData.map((item, i) => (
              <div
                key={i}
                className="border-2 border-gray-300 p-2 m-3 w-60 h-60 flex flex-col items-center justify-center"
              >
                <Image
                  src={item.img}
                  alt={item.desc}
                  width={200}
                  height={200}
                />
                <h3 className="text-sm my-1 text-gray-500 text-center">
                  {item.desc}
                </h3>
              </div>
            ))}
          </div>
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

export default BoltingTools;
