import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <div className="w-4/5 mx-auto my-10 md:h-screen">
      <h2 className="text-center text-4xl font-bold mb-4">Our Services</h2>

      <div className="flex flex-col md:flex-row  w-full md:h-3/4">
        <div className="flex flex-col w-full md:w-1/3 text-center border-2 border-gray-300 md:h-full">
          <div className="flex justify-center bg-blue-700 h-1/2 ">
            <Image
              src="/services/mechanical-installation.png"
              width={200}
              height={200}
              alt="mechanical istallation"
            />
          </div>
          <div className="flex flex-col justify-center items-center my-auto py-4 md:py-0">
            <h3 className="text-2xl mb-3">Mechanical Installation</h3>
            <button className="mt-2 lg:mt-0 bg-blue-800 rounded-lg px-5 py-2 text-white">
              <Link href="/services">Learn More</Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-col-reverse w-full md:w-1/3 text-center border-2 border-gray-300 md:h-full">
          <div className="flex justify-center bg-green-700 h-1/2 ">
            <Image
              src="/services/vibration.png"
              width={200}
              height={200}
              alt="mechanical istallation"
            />
          </div>
          <div className="flex flex-col justify-center items-center my-auto py-4 md:py-0">
            <h3 className="text-2xl mb-3">Vibration analysis</h3>
            <button className="mt-2 lg:mt-0 bg-blue-800 rounded-lg px-5 py-2 text-white">
              <Link href="/services">Learn More</Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/3 text-center border-2 border-gray-300 md:h-full">
          <div className="flex justify-center bg-yellow-700 h-1/2 ">
            <Image
              src="/services/alignment.png"
              width={200}
              height={200}
              alt="mechanical istallation"
            />
          </div>
          <div className="flex flex-col justify-center items-center my-auto py-4 md:py-0">
            <h3 className="text-2xl mb-3">Shaft alignment</h3>
            <button className="mt-2 lg:mt-0 bg-blue-800 rounded-lg px-5 py-2 text-white">
              <Link href="/services">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
