import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#17012C] py-[2rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[4rem] object-contain"
          />
          <h1 className="font-semibold text-2xl">QUANTSIX AI</h1>
        </div>
        <div className="">
          <div className="flex mt-3 gap-5 justify-start">
            <Link>
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link>
              <GrFacebookOption className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;