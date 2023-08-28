import Image from "next/image";
import { AdsClick, RemoveRedEye, VolunteerActivism } from "@mui/icons-material";

function About() {
  return (
    <div className="w-screen">
      <Image
        src="/about-us.jpg"
        alt="about us"
        width={1500}
        height={500}
        style={{
          objectFit: "cover",
        }}
      />

      <div className="w-4/5 mx-auto my-10 flex md:flex-row flex-col justify-between items-center">
        <div className="mr-5">
          <h3 className="text-4xl text-red-700 mb-8 font-bold">WHO WE ARE</h3>
          <p className="text-justify">
            Swart Ways was established in 2003 by Eng. Mohsen Hamza and now
            acting as President and Managing Director. The company is mainly
            active in the field of Water, Waste Water and Irrigation Projects as
            a key supplier to most of the electromechanical equipment involved
            in such projects such as but not limited to; pumps, motors, valves,
            pipes, fittings, control devices, mechanical treatment equipment,
            standby diesel generating sets. Smart Ways is the sole agent &
            distributor for several international manufacturers for all kinds of
            Bearings, valves, fittings and ductile iron pipes used in water and
            waste water projects
          </p>
        </div>
        <Image
          alt="who we are"
          src="/who-we-are1.png"
          width={500}
          height={500}
        />
      </div>

      <hr />

      <div className="w-4/5 mx-auto my-10 flex xl:flex-row flex-col justify-between gap-3">
        <div className="xl:w-1/3 flex flex-col bg-sky-950 text-white items-center  px-10 pb-11 relative">
          <div className="bg-blue-700 rounded-full h-24 w-24 flex items-center justify-center absolute -top-12  ">
            <AdsClick className="text-5xl" />
          </div>
          <h3 className="text-3xl mt-20 mb-8">OUR MISSION</h3>
          <p className="text-justify">
            Smart Ways's mission is to serve its clients and society by
            providing advanced, accurate, and effective engineering solutions
            that improve its clients’ businesses and facilitate society’s access
            to competitive, safe, sustainable, and state-of-the-art services,
            equipment, and utilities.
          </p>
          <br />
          <p className="text-justify">
            Smart Ways should contribute to generating wealth and employment,
            acting as a benchmark due to its firm commitment to excellence in
            engineering and innovation, its dedication to serving its clients,
            the development of its professionals, its ethical principles, good
            corporate governance, social responsibility, quality, safety of its
            staff , and care for the environment.
          </p>
        </div>

        <div className="xl:w-1/3 flex flex-col bg-sky-950 text-white items-center  px-10 pb-11 relative">
          <div className="bg-blue-700 rounded-full h-24 w-24 flex items-center justify-center absolute -top-12  ">
            <RemoveRedEye className="text-5xl" />
          </div>
          <h3 className="text-3xl mt-20 mb-8">OUR VISSION</h3>
          <p className="text-justify">
            Smart Ways aspires to be a distinguished, international engineering
            group through our great people, providing our great service, and
            reaching to our great results.
          </p>
          <br />
          <p className="text-justify">
            Smart Ways will have a sufficient team of excellent professionals
            that allows it to be competitive, serve its clients with unique
            value, and remain in the state-of-the-art. In each of its areas of
            activity, it should be recognized by a capacity, specialty, or
            product in which it can present itself as a global leader
          </p>
          <br />
          <p className="text-justify">
            It will prioritize contributions that offer the greatest added value
            to its clients, while remaining close to the conception and
            management of its projects. It will support efforts in R&D that make
            it possible to maintain and decisively advance in the areas defined.
            It will distinguish itself through technological contributions,
            value analysis, and reliable and effective operations
          </p>
        </div>

        <div className="xl:w-1/3 flex flex-col bg-sky-950 text-white items-center  px-10 pb-11 relative">
          <div className="bg-blue-700 rounded-full h-24 w-24 flex items-center justify-center absolute -top-12  ">
            <VolunteerActivism className="text-5xl" />
          </div>
          <h3 className="text-3xl mt-20 mb-8">OUR VALUES</h3>
          <p className="text-justify">
            Smart Ways is committed to the following values, demanding the same
            of its staff, which must also be reflected in all its corporate
            policies, guidelines, and other internal procedures:
          </p>
          <br />
          <ul className="list-disc">
            <li>Ownership : Count on us and we will make it happen.</li>
            <li>
              Respect : We keep our promises - We treat each other like we want
              to be treated ourselves - We respect the environment where we work
            </li>
            <li>
              Integrity : If it is not right, we don’t do it- If it is not true,
              we don’t say it
            </li>
            <li>
              Winning through teamwork : We encourage individual ownership, but
              work as a team. We value the expertise, individuality and
              contribution of all colleagues, working in support of each other
              and readily sharing good practice, in pursuit of shared goals.
            </li>
            <li>
              Safety :Ensuring a safe and healthy environment for our employees,
              clients and the community.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
