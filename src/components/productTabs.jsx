"use client";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProductTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const itemsData = [
    {
      img: "/products/bearings/Bearings.jpg",
      desc: "Bearings",
      url: "/products/bearings",
    },
    {
      img: "/products/general tools/general-tools.jpg",
      desc: "general-tools",
      url: "/products/generalTools",
    },
    {
      img: "/products/pipeline system/pipeline.jpg",
      desc: "pipeline",
      url: "/products/pipes",
    },
    {
      img: "/products/valves/valves.jpg",
      desc: "valves",
      url: "/products/valves",
    },
    {
      img: "/products/aeration system/aeration.jpg",
      desc: "aeration",
      url: "/products/aerationSystem",
    },
    {
      img: "/products/bolting/bolting.jpg",
      desc: "bolting",
      url: "/products/boltingTools",
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-11/12 md:w-4/5 mx-auto my-10 flex flex-col md:flex-row h-96 ">
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        className="border-gray-100 w-full md:w-1/4 mr-10 "
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab label="Bearings" />
        <Tab label="General Tools" />
        <Tab label="Pipes & Joints" />
        <Tab label="Valves" />
        <Tab label="Aeration Systems" />
        <Tab label="Bolting Tools" />
      </Tabs>

      <div className="md:w-2/3 ">
        {itemsData.map((item, i) => (
          <div key={i} className="relative ">
            {selectedTab === i && (
              <>
                <Image
                  alt={item.desc}
                  src={item.img}
                  width={620}
                  height={300}
                  objectFit="cover"
                />
                <button className="left-0 mt-4  bg-blue-800 rounded-lg px-5 py-2 text-white ">
                  <Link href={item.url}>Find Out More</Link>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTabs;
