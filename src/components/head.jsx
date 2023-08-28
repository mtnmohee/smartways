"use client";
import { useEffect, useState } from "react";

const Head = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/slide/slide1.jpg",
    "/slide/slide2.jpg",
    "/slide/slide3.jpg",
    "/slide/slide4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen relative h-96 -z-10 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="w-full h-full bg-slate-700 bg-opacity-70 flex justify-center items-center text-white text-2xl text-center md:text-4xl px-5 ">
            When you need experience, we have it covered
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Head;
