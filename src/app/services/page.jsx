import Image from "next/image";

function Services() {
  return (
    <div className="w-screen">
      <Image
        src="/services/services-banner.png"
        alt="about us"
        width={1500}
        height={500}
        style={{
          objectFit: "cover",
        }}
      />

      <div className="w-4/5 mx-auto my-10 flex md:flex-row flex-col justify-between items-center">
        <Image
          alt="who we are"
          src="/services/our services.jpg"
          width={500}
          height={500}
        />
        <div className="mr-5">
          <p className="text-justify">
            Our multi-disciplined engineering team understands the complex
            manufacturing and industrial problems our clients face. Our
            engineering services are built on years of experience and the
            expertise to identify and design the unique industrial engineering
            solutions that match our client’s needs.We possess state of the art
            technology and utilize these tools on a daily basis to solve our
            clients most difficult challenges.Smart Ways stands out as a leader
            amongst industrial engineering companies.
          </p>
        </div>
      </div>

      <hr />

      <h3 className="text-center mt-10 text-2xl">
        We offers a varity of services that gurantees a fault-free operation for
        our products
      </h3>

      <div className="w-4/5 mx-auto my-10 flex xl:flex-row flex-col justify-between ">
        <div className="xl:w-1/3 flex flex-col items-center p-4 border-2 border-gray-300">
          <Image
            src="/services/shaft-alignment.jpg"
            alt="shaft alignment"
            width={500}
            height={300}
          />
          <h3 className="text-3xl my-6 text-blue-800">Precision alignment</h3>
          <p className="text-justify">
            Our service engineers can determine the causes of misalignment in
            your machinery and perform an accurate shaft alignment to prevent
            future malfunctions. When conducting shaft alignment, we provide:
          </p>
          <br />
          <ul className="list-disc px-5">
            <li>Inspection of machine frames according to ISO IT5</li>
            <li>Measurement for potential parallel and angular misalignment</li>
            <li>Inspection and elimination of potential soft foot problems</li>
            <li>
              Shimming or chocking of machines with high precision, stainless
              steel machine shims or chocking solutions
            </li>
            <li>Turning of relevant machine components to correct positions</li>
          </ul>
          <br />
          <p className="text-justify">
            All our machine alignment services include a final report with
            measurement documentation.
          </p>
        </div>

        <div className="xl:w-1/3 flex flex-col items-center p-4  border-2 border-gray-300">
          <Image
            src="/services/vibration-analysis.jpg"
            alt="shaft alignment"
            width={500}
            height={300}
          />

          <h3 className="text-3xl my-6 text-blue-800">Vibration analysis</h3>
          <p className="text-justify">
            Single and Multi-channel analysis of rotating equipment vibrations
            provide extremely useful information about machine’s mechanical
            health condition and help making critical and timely maintenance
            decisions. Mechanical, electrical, structural, and operational
            faults are progressing can be accurately identified and their
            criticality determined.
          </p>

          <br />
          <p className="text-justify">
            The vibration data, downloaded to a PC, forms an invaluable database
            on which to base maintenance decisions. We use the fastest and most
            advanced analysers / data collectors available and provide clear
            reports with recommendations for action.
          </p>
        </div>

        <div className="xl:w-1/3 flex flex-col items-center  p-4  border-2 border-gray-300">
          <Image
            src="/services/installation1.jpg"
            alt="shaft alignment"
            width={500}
            height={300}
          />
          <h3 className="text-3xl my-6 text-blue-800">Installation</h3>
          <p className="text-justify">
            Every person in our team is trained to be an innovator and problem
            solver. When unexpected challenges arise, our installation craftsmen
            possess the professionalism and experience to adapt with quick,
            successful solutions. Our experience includes seamless contracting
            which integrates all building construction and relevant trades:
            electrical, plumbing, HVAC, fire protection, and rigging—whatever it
            takes to get the job done
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
