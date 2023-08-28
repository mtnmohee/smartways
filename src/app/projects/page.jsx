"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";

function Projects() {
  const items = [
    {
      img: "/projects/1.jpg",
      desc: "project",
    },
    {
      img: "/projects/2.jpg",
      desc: "project",
    },
    {
      img: "/projects/3.jpg",
      desc: "project",
    },
    {
      img: "/projects/4.jpg",
      desc: "project",
    },
    {
      img: "/projects/5.jpg",
      desc: "project",
    },
    {
      img: "/projects/6.jpg",
      desc: "project",
    },
    {
      img: "/projects/7.jpg",
      desc: "project",
    },
    {
      img: "/projects/8.jpg",
      desc: "project",
    },
    {
      img: "/projects/9.jpg",
      desc: "project",
    },
    {
      img: "/projects/10.jpg",
      desc: "project",
    },
    {
      img: "/projects/11.jpg",
      desc: "project",
    },
    {
      img: "/projects/12.jpg",
      desc: "project",
    },
  ];
  return (
    <div className="w-screen">
      <Image
        src="/projects/project-banner1.jpg"
        alt="about us"
        width={1500}
        height={500}
        style={{
          objectFit: "cover",
        }}
      />

      <div className="w-4/5 flex flex-col items-center justify-center mx-auto my-10 text-center">
        <h3 className="text-2xl font-semibold mb-5">COMPLETED PROJECTS</h3>
        <p className="text-gray-700">
          Our success is driven by more than building some of the most advanced
          facilities for our corporate, institutional and government clientele.
          More of our clients are turning to us for our distinctive ability to
          implement innovative project management techniques and to serve as a
          reliable provider of knowledge driven solutions for their complex
          projects. Here are some of our completed works.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{ delay: 1000 }}
        spaceBetween={2}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="my-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.img}>
            <Image src={item.img} alt={item.desc} width={700} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
