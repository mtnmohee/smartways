/* eslint-disable react/no-unescaped-entities */
import { Start, ArrowBack, PlayCircleRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function AerationSystem() {
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

      <div className="w-10/12 md:w-4/5 flex flex-col mx-auto my-10 ">
        <h3 className="text-2xl font-semibold ">
          <span>
            <Start className="text-4xl" />
          </span>{" "}
          Aeration System
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 mt-5 md:mt-0 ">
          <Image
            src="/products/aeration system/aeration.jpg"
            alt="Surface AERATION SYSTEMS"
            width={300}
            height={300}
            className="md:w-1/3"
          />
          <div className="md:w-2/3 bg-green-900 text-white px-2 md:px-10 pt-10 pb-16 rounded-xl text-justify">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl mb-4">
              <span>
                <PlayCircleRounded />
              </span>{" "}
              Surface AERATION SYSTEMS :
            </h3>
            <p>
              Surface aerators push water from under the water's surface up into
              the air, then the droplets fall back into the water, mixing in
              oxygen. The jets of water break the surface with varying degrees
              of force. There are many types of surface aeration devices,
              including floating aerators.
            </p>
            <br />
            <p>
              Surface aerators are available in both floating and fixed
              execution. Each of these aerators exists in high speed direct
              drive or low speed with gearbox execution.
            </p>
            <br />
            <p>
              Surface aeration, especially the high-speed aerators, have a high
              efficiency in real activated sludge conditions due to their
              favourable alpha factor, it is used mostly for the biological
              process of water purification and plant aeration.
            </p>
            <br />
            <p>
              This aeration system extracts water from the basin volume and
              utilizes air-water contact to transfer oxygen by means of a water
              spray on the surface. This is the ideal Aeration system for ponds
              and lakes.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full gap-6 mt-10 md:-mt-12 border-t-2 pt-5 border-gray-300 md:border-none ">
          <Image
            src="/products/aeration system/item 3.jpg"
            alt="DIFFUSED AERATION SYSTEMS"
            width={300}
            height={300}
            className="md:w-1/3"
          />
          <div className="md:w-2/3 bg-orange-700 text-white px-2 md:px-10 pt-10 pb-16 rounded-xl text-justify">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl mb-4">
              <span>
                <PlayCircleRounded />
              </span>{" "}
              DIFFUSED AERATION SYSTEMS :
            </h3>
            <p>
              Aeration forms a vital part of the wastewater treatment process,
              particularly the secondary treatment phase. It mixes wastewater
              with oxygen to allow aerobic bacteria to digest biosolid particles
              in the water. Aeration plays a particularly vital role in the
              activated sludge phase, during which bacteria feed on organic
              matter until flocs of matter and bacteria settle out and form
              sludge. The sludge recirculates, along with its bacteria, to
              enhance further breakdown of organic matter within the wastewater.
              Diffused wastewater aeration systems provide a crucial tool for
              this process. They pump small, less concentrated amounts of air
              into the liquid to provide a highly efficient aeration process.
            </p>
            <br />
            <p>HOW DOES A DIFFUSED AERATION SYSTEM WORK?</p>
            <br />
            <p>
              A diffused aeration system typically operates vertically. It sends
              up concentrations of bubbles from near the floor of a wastewater
              facility’s lagoon or tank. Typically, the system comprises onshore
              blowers, pipes and diffusers. Compressed air pumps through pipes
              and filters into the water through the diffusers, which create
              tiny bubbles. The bubbles displace and mix the water and create a
              spiral flow pattern, transferring oxygen into the water column as
              they rise to help bacteria do their work. Usually, the diffusers
              cover as much of the floor as possible while allowing some space
              for technicians to walk and do maintenance. This full coverage
              allows for an even distribution of oxygen. Plants can determine
              the number of diffusers and blowers necessary by considering the
              volume and type of sewage and the dimensions of the treatment
              tank. Diffused aeration systems come in two main types — fine
              bubble and coarse bubble. Fine bubble aerators provide enhanced
              aeration and efficiency, while coarse bubble aerators excel at
              mixing and increasing the level of dissolved oxygen. Each type of
              bubble aerator has specific airflow requirements, so plant
              operators must choose blowers and pipes accordingly.
            </p>
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

export default AerationSystem;
