import React from "react";
import vid from "../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import img from "../assets/landing-banner-img.png";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ page }) => {
  const { pathname } = useLocation();
  return (
    <div id="banner" className="h-screen banner relative">
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper h-full flex flex-col items-start justify-center ml-0">
          {pathname === "/" ? (
            <>
              <h1
                data-aos="fade-right"
                className="heading text-white max-w-[50rem]"
              >
                Ready to Turn Your Vision into Reality with Cutting-Edge
                Solutions?
              </h1>
              <p className="description text-white mt-2 max-w-[40rem]">
                Partner with Us to Deliver End-to-End Technology Services
                Designed to Empower Your Success.
              </p>
            </>
          ) : (
            <>
              <h1
                data-aos="fade-right"
                className="heading text-white max-w-[50rem]"
              >
                Transform Your Ideas into Innovative Digital Solutions
              </h1>
              <p className="description text-white mt-2 max-w-[40rem]">
                Collaborate with Us to Build Tailored Technology Services That
                Drive Growth and Success.
              </p>
            </>
          )}

          <div
            data-aos="fade-right"
            className="pt-[1rem] sm:pt-[3rem] flex gap-5 justify-start w-full"
          >
            <Link
              to="/contact-us"
              className="primary-btn flex items-center gap-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
