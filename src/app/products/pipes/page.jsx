/* eslint-disable react/no-unescaped-entities */
import { Start, ArrowBack, PlayCircleRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function Pipes() {
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
          Pipes & Joints
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 mt-5 md:mt-0  ">
          <Image
            src="/products/pipeline system/ductile iron pipe.jpg"
            alt="ductile iron pipe"
            width={300}
            height={300}
            className="md:w-1/3"
          />
          <div className="md:w-2/3 bg-green-900 text-white px-2 md:px-10 pt-10 pb-16 rounded-xl text-justify">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl mb-4">
              <span>
                <PlayCircleRounded />
              </span>{" "}
              Ductile Iron Pipes :
            </h3>
            <p>
              Natural and/or manmade ground movements, is the main reason for
              water supply damages. Materials used in the production of pipes
              and fittings, have to be ductile, flexible and resistant to
              impacts in order to minimize the effect of these movements on
              networks.
            </p>
            <br />
            <p>
              Water distribution lines are high-cost investments. Therefore,
              features like life cycle cost, durability, low operation expenses,
              ease of assembling, maintenance and repair expenses ought to be
              considered as well as material unit price in the project designing
              and feasibility stages.
            </p>
            <br />
            <p>
              Ductile iron casting adds on tensile strength, impact resistance,
              and elongation abilities to the superior properties of metal
              casting which are high resistance to corrosion and abrasion, ease
              of machinability and fatigue strength.
            </p>
            <br />
            <p>PIPE OD Range : 80 mm - 3000 mm</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full gap-6 mt-10 md:-mt-12 border-t-2 pt-5 border-gray-300 md:border-none ">
          <Image
            src="/products/pipeline system/water-pipe.jpg"
            alt="water pipe"
            width={300}
            height={300}
            className="md:w-1/3"
          />
          <div className="md:w-2/3 bg-orange-700 text-white px-2 md:px-10 pt-10 pb-16 rounded-xl text-justify">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl mb-4">
              <span>
                <PlayCircleRounded />
              </span>{" "}
              Welded, Seamless & spiral (Steel / Stainless) pipes:
            </h3>
            <p>
              The water pipes we supply on a large scale serve reliably in local
              and international markets.
            </p>
            <br />
            <p>
              In addition to various insulation and coating possibilities for
              corrosion protection, we also offer a variety of pipe end
              connections such as welded round, cylindrical, spherical and
              e-joint.
            </p>
            <br />
            <p>
              The diameter of the pipes we produce is between 273 mm (10 inches)
              and 4064 mm (160 inches), and the maximum meat thickness we can
              use is 35 mm (1,377 inches).
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

export default Pipes;
