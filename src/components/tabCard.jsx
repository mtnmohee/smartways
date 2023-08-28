"use client";
import { Tab, Tabs } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function TabCard() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="w-4/5 mx-auto my-10 ">
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        className="border-gray-100 border-b-2"
      >
        <Tab label="Introduction" />
        <Tab label="Mission" />
        <Tab label="FAQs" />
      </Tabs>

      {selectedTab === 0 && (
        <div className="flex flex-col mt-10 justify-between lg:flex-row-reverse">
          <Image src="/tab1.jpg" width={400} height={400} alt="pipes" />
          <div className="lg:w-1/2 text-justify mt-2 lg:mt-0">
            <p>
              <strong> Smart Ways,</strong> established in Egypt as a leading
              company in the field of electromechanical installations, supplies
              and forecasting work in various fields, has been operating for
              more than 20 years . . .
            </p>
          </div>
        </div>
      )}

      {selectedTab === 1 && (
        <div className="flex flex-col mt-10 justify-between lg:flex-row-reverse">
          <Image src="/tab2.jpg" width={400} height={400} alt="pipes" />
          <div className="lg:w-1/2 text-justify mt-2 lg:mt-0">
            <p>
              <strong> Our mission</strong> is Achieving Triangle Quality
            </p>
            <ul className="py-3 list-disc pl-10">
              <li>Lower Costs</li>
              <li>Faster Time</li>
              <li>Higher Efficiency</li>
            </ul>
            <p>
              Using the latest advanced technology in our business areas We are
              all working to build a strong and prosperous future
            </p>
          </div>
        </div>
      )}

      {selectedTab === 2 && (
        <div className="flex flex-col mt-10 justify-between lg:flex-row-reverse">
          <Image src="/tab3.jpg" width={400} height={400} alt="pipes" />
          <div className="lg:w-1/2 text-justify mt-2 lg:mt-0">
            <p>
              <strong> Smart Ways,</strong> established in Egypt as a leading
              company in the field of electromechanical installations, supplies
              and forecasting work in various fields, has been operating for
              more than 20 years . . .
            </p>
          </div>
        </div>
      )}
      <button className="mt-2 lg:mt-0 bg-blue-800 rounded-lg px-5 py-2 text-white">
        <Link href="/about">See More</Link>
      </button>
    </div>
  );
}

export default TabCard;
