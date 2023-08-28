import Image from "next/image";
import Link from "next/link";
import React from "react";

function Partners() {
  const brandData = [
    {
      img: "/partners/benshaw.gif",
      url: "https://benshaw.com/",
      desc: "benshaw",
    },
    {
      img: "/partners/csa.png",
      url: "https://www.csasrl.it/en",
      desc: "csa",
    },
    {
      img: "/partners/Erciyas.png",
      url: "https://erciyas.com/en/erciyas-steel-pipe/",
      desc: "Erciyas",
    },
    {
      img: "/partners/SKF.png",
      url: "https://www.skf.com/mena",
      desc: "SKF",
    },
    {
      img: "/partners/logo-aquaaura.png",
      url: "http://aquaaura.net/",
      desc: "aquaaura",
    },
    {
      img: "/partners/plarad.png",
      url: "https://www.plarad.de/en/",
      desc: "plarad",
    },
    {
      img: "/partners/Samsun-Makina-Sanayi.jpg",
      url: "https://www.samsunmakina.com.tr/",
      desc: "samsunmakina",
    },
    {
      img: "/partners/forza.png",
      url: "https://www.forza.es/en",
      desc: "forza",
    },
    {
      img: "/partners/kamps.png",
      url: "https://www.water-aerator.com/en/",
      desc: "kamps",
    },
  ];

  return (
    <div className="w-screen mb-20">
      <div className="bg-[url('/partners/banner.jpg')] h-96 w-screen bg-cover bg-center">
        <div className="w-full h-full bg-sky-700 bg-opacity-40"></div>
      </div>

      <h3 className="text-3xl font-bold my-7 text-center">Our Partners</h3>
      <div className="w-4/5 flex mx-auto items-center justify-between flex-wrap">
        {brandData.map((item, i) => (
          <div key={i} className=" grayscale hover:grayscale-0 hover:scale-125">
            <Link href={item.url} target="_blank">
              <Image src={item.img} alt={item.desc} width={300} height={100} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
