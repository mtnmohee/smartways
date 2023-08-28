/* eslint-disable react/no-unescaped-entities */
import ContactForm from "@/components/contactForm";
import {
  Email,
  Fax,
  LocalPhone,
  LocationOn,
  WatchLater,
} from "@mui/icons-material";
import React from "react";

function Contact() {
  return (
    <div className="w-full mb-20">
      <div className="bg-[url('/get-in-touch.jpg')] h-96 w-screen bg-cover bg-center">
        <div className="w-full h-full bg-sky-700 bg-opacity-40"></div>
      </div>

      <div className="w-11/12 md:w-3/4 mx-auto mt-10">
        <h3 className="text-xl md:text-3xl font-bold my-7 text-center">
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </h3>

        <ContactForm />
        <hr />

        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 bg-gray-300 mt-7 p-3  md:p-7 rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13813.35779782596!2d31.199664000000002!3d30.055803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413980003ea5%3A0x78494f0790198ded!2sSmart%20Ways!5e0!3m2!1sen!2seg!4v1691410029867!5m2!1sen!2seg"
            className="w-full h-56 lg:w-1/2 lg:h-52"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-gray-600 text-xs sm:text-4xl font-bold">
            <p className="text-sm">
              <LocationOn className="mr-2  " />
              31, El Higaz Street, El Mohandesseen, Giza, Egypt
            </p>
            <br />
            <p className="text-sm">
              <LocalPhone className="mr-2" />
              (+202) 33443351 - 33443350
            </p>
            <p className="text-sm">
              <Fax className="mr-2" />
              (+202) 33442204
            </p>
            <br />
            <p className="text-sm">
              <Email className="mr-2" />
              Mohamed.salah@smart-ways.com.eg
            </p>
            <p className="text-sm">
              <Email className="mr-2" />
              mahmoud.algibali@smart-ways.com.eg
            </p>
            <br />
            <p className="text-sm">
              <WatchLater className="mr-2" />
              Sunday - Thursday , (9am - 5pm)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
