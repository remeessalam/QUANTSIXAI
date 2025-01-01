import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { allServices, clientDetails, services } from "../../constants";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black py-[3rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col gap-3 items-start">
          <div className="flex items-center">
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              className="h-[4rem] object-contain"
            />
            <h1 className="font-semibold text-2xl">QUANTSIX AI</h1>
          </div>

          <p className="max-w-[25rem]">
            Follow us on our social media handles to keep up to date with our
            latest work and announcements.
          </p>
          <div className="flex mt-3 gap-5 items-center">
            <Link to={clientDetails.linkedin}>
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to={clientDetails.instagram}>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link to={clientDetails.facebook}>
              <GrFacebookOption className="text-2xl" />
            </Link>
          </div>
          {/* <p className="max-w-[25rem] mt-3">Address: {clientDetails.address}</p> */}
        </div>
        <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-7 md:gap-14">
          {/* <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Our Services</p>
            {services.map((item) => (
              <Link key={item.id} to={item.link} className="cursor-pointer">
                {item.name}
              </Link>
            ))}
          </div> */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link to="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-lg font-semibold">Contact Info</h5>
            {/* <hr /> */}
            <Link
              to={`tel:${clientDetails.phone}`}
              className="flex items-center gap-3 w-fit"
            >
              <FaPhoneAlt className="text-3xl" />

              <p className=" font-medium">{clientDetails.phone}</p>
            </Link>
            <Link
              to={`tel:${clientDetails.email}`}
              className="flex items-center gap-3 w-fit"
            >
              <MdEmail className="text-3xl" />
              <p className=" font-medium">{clientDetails.email}</p>
            </Link>
            <div className="flex gap-3  w-fit">
              <FaMapLocationDot className="text-3xl" />
              <p className=" font-medium max-w-[15rem]">
                {clientDetails.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
