import { LocationOn, LocalPhone, Fax, WatchLater } from "@mui/icons-material";

function Footer() {
  return (
    <div className="w-screen bg-gray-800 h-17">
      <div className=" text-white py-5 px-5 md:px-10 md:py-10">
        <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between pb-10 border-b-2 border-gray-500">
          <div className="w-11/12 xl:w-1/3 ">
            <h3 className="text-2xl mb-2 font-medium">Smart Ways</h3>
            <p className="text-justify text-sm">
              Smart Ways, established in Egypt as a leading company in the field
              of electromechanical installations, supplies and forecasting work
              in various fields, has been operating for more than 20 years
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-medium">Contact us</h3>
            <div className="flex flex-col gap-1">
              <p className="text-sm">
                <LocationOn className="mr-2  " />
                31, El Higaz Street, El Mohandesseen, Giza, Egypt
              </p>
              <p className="text-sm">
                <LocalPhone className="mr-2" />
                (+202) 33443351 - 33443350
              </p>
              <p className="text-sm">
                <Fax className="mr-2" />
                (+202) 33442204
              </p>
              <p className="text-sm">
                <WatchLater className="mr-2" />
                Sunday - Thursday , (9am - 5pm)
              </p>
            </div>
          </div>

          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13813.35779782596!2d31.199664000000002!3d30.055803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413980003ea5%3A0x78494f0790198ded!2sSmart%20Ways!5e0!3m2!1sen!2seg!4v1691410029867!5m2!1sen!2seg"
              width="90%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-sm">Copyright © 2022 Smart Ways.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
