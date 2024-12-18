import React from "react";
import PageBanner from "../components/Website/PageBanner";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.jpg";
import img2 from "../assets/aboutus-2.png";
import img3 from "../assets/aboutus-3.jpeg";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import ClientsLogoSlider from "../components/Website/ClientsLogoSlider";

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"} />
      <section className="py-[5rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 data-aos="fade-right" className="heading">
            Unlock the Future of T echnology with Quantsix AI!
          </h1>

          <p data-aos="fade-right" className="description mt-4">
            At Quantsix AI, we are dedicated to harnessing the power of data and
            artificial intelligence to drive innovation and growth for
            businesses across various industries. T o help organisation get up
            to speed, we’ve identified the six main subsets of AI as machine
            learning, deep learning, robotics, neural networks, natural language
            processing, and genetic algorithms. <br />
            <br /> Our mission is to empower organizations by transforming their
            data into actionable insights, optimizing processes, and enhancing
            decision-making capabilities. We'll also explore how to effortlessly
            deploy AI in your business with our no-code action plan.
          </p>
        </div>
        <img
          data-aos="fade-left"
          loading="lazy"
          src={img1}
          alt="about us"
          className="w-full rounded-lg h-[40vh] lg:h-full object-cover"
        />
      </section>

      <section className="wrapper">
        <h1 data-aos="fade-right" className="heading">
          Who Are We?
        </h1>
        <p data-aos="fade-right" className="description mt-4">
          We are a passionate team of visionaries and innovators dedicated to
          pushing the boundaries of technology. With diverse expertise in AI,
          machine learning, software development, and data science, we bring
          experience across multiple sectors. Our client-focused team
          prioritizes collaboration, ensuring we understand and meet the unique
          needs of each client.
        </p>
        <img
          data-aos="fade-right"
          loading="lazy"
          src={img2}
          alt="about us"
          className="w-full rounded-lg h-[40vh] sm:h-[70vh] object-cover mt-7"
        />
      </section>

      <section className="wrapper my-[5rem]">
        <div
          data-aos="fade-up"
          className="py-[5rem] px-4 rounded-md text-white bg-[#17012C8A] flex flex-col items-center gap-2 text-center"
        >
          <h1 className="heading">Be the First With Us</h1>
          <p className="description">
            There are many reasons to get down and start to get depressed about
            your situation.
          </p>
          <Link
            to="/contact-us"
            className="rounded-sm transition-all duration-300 hover:-translate-y-1 bg-[#734D88] hover:bg-[#734D88]/90 px-10 py-3 w-fit mt-5"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="pb-[5rem] wrapper text-center">
        <h1 data-aos="fade-up" className="heading">
          Innovative Alliances
        </h1>
        <div className="grid lg:grid-cols-2 gap-7 mt-7">
          <div data-aos="fade-right" className="">
            <h2 className="text-2xl font-semibold">
              "Brands We Collaborate With"
            </h2>
            <p className="description mt-4 text-start">
              At Quantsix AI, we understand that collaboration is key to
              unlocking innovation and driving success. We are proud to partner
              with industry-leading brands that share our commitment to
              excellence and innovation. Together, we leverage our combined
              expertise to deliver cutting-edge solutions that empower
              businesses and enhance user experiences.
            </p>
            <ul className="flex flex-col gap-2 list-disc text-start mt-5 ml-5 description">
              <li>
                <strong>Tailored Solutions:</strong> Custom strategies designed
                to address your specific challenges and objectives.
              </li>
              <li>
                <strong>Proven Success Stories:</strong> A portfolio of
                successful projects that demonstrate our ability to deliver
                impactful results.
              </li>
              <li>
                <strong>End-to-End Support:</strong> Comprehensive services from
                initial consultation to ongoing maintenance, ensuring your
                success at every stage.
              </li>
            </ul>
          </div>
          <img
            data-aos="fade-left"
            loading="lazy"
            src={img3}
            alt="about us"
            className="w-full rounded-lg h-[50vh] lg:h-full object-cover object-center mt-7"
          />
        </div>
      </section>
      <Testimonials />
      <ClientsLogoSlider />
      <Footer />
    </>
  );
};

export default AboutUs;
