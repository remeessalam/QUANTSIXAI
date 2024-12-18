import React, { useState } from "react";
import { allServices, services } from "../constants";
import { Link } from "react-router-dom";

const HomePageServicesList = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  // set active service
  const handleServiceSelect = (item) => {
    setSelectedService(item);
  };
  return (
    <section className="wrapper py-[2rem]">
      <h1 className="heading text-center mb-8">Explore Our Offering</h1>
      <div className="grid md:grid-cols-[38%_58%] gap-10 p-5 bg-primary/25 rounded-lg">
        <div className="w-full flex flex-col gap-10">
          <div
            data-aos="fade-up"
            className="bg-[#ECF8FF] p-4 lg:p-6 rounded-lg"
          >
            <h4 className="text-2xl font-medium">Our Services</h4>
            <div className="mt-5 flex flex-wrap md:flex-col gap-3">
              {services.map((item) => (
                <button
                  key={item.id}
                  className={`${
                    item.id === selectedService.id
                      ? "primary-btn text-white"
                      : "bg-white text-[#17012C]"
                  } flex items-center gap-2 justify-center rounded-full text-center px-5 py-3 transition-all duration-300 hover:-translate-y-1`}
                  onClick={() => handleServiceSelect(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-[2rem]">
            <img
              src={selectedService.img}
              alt={selectedService.name}
              className="rounded-2xl w-full h-[300px] sm:h-[500px] !object-cover"
            />
            <h4 data-aos="fade-up" className="text-3xl font-medium mt-5">
              {selectedService.name}
            </h4>
            <p
              data-aos="fade-up"
              className="mt-4 description whitespace-pre-line"
            >
              {selectedService.description}
            </p>
            <ul className="mt-4 list-disc pl-6">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="mt-2">
                  <strong>{feature.name}:</strong> {feature.description}
                </li>
              ))}
            </ul>
            <Link
              data-aos="fade-up"
              to={selectedService.link}
              className="secondary-btn w-fit mt-6"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServicesList;
