"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

function CarouselCard() {
  var items = [
    {
      img: "/products/product 1.jpg",
      desc: "Pipes",
    },
    {
      img: "/products/product 2.jpg",
      desc: "General Tools",
    },
    {
      img: "/products/product 3.jpg",
      desc: "Bearings",
    },
    {
      img: "/products/product 4.jpg",
      desc: "Bolting Tools",
    },
    {
      img: "/products/product 5.jpg",
      desc: "Valves",
    },
  ];

  return (
    <div className=" mx-auto my-10  ">
      <h3 className="text-center text-4xl font-bold mb-4">Our Products</h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.img}>
            <Image src={item.img} alt={item.desc} width={700} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center my-5">
        <button className="mt-2 lg:mt-0 bg-blue-800 rounded-lg px-5 py-2 text-white ">
          <Link href="/services">Check It Out</Link>
        </button>
      </div>
    </div>
  );
}

export default CarouselCard;
