import React from "react";
import img1 from "../../assets/services-details/it1.jpg";
import img2 from "../../assets/services-details/it2.jpg";
const ItInfrastructures = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-contain rounded-3xl object-center"
        alt="IT Infrastructure Solutions"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          IT Infrastructure Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          IT infrastructure is the backbone of any organization’s technology
          ecosystem. From hardware to software, networking to storage, we
          provide scalable and reliable IT infrastructure solutions that power
          your business operations. Our services are designed to optimize
          performance, increase efficiency, and enhance security, ensuring a
          seamless technology environment.
          <br />
          <br />
          Whether you're setting up a new infrastructure, migrating to the
          cloud, or optimizing your existing systems, we offer end-to-end IT
          infrastructure solutions tailored to meet your business goals and
          support growth.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          From designing and deploying network infrastructure to setting up
          cloud environments, we offer comprehensive IT infrastructure services.
          Our solutions cover everything from server management, storage
          solutions, networking, and cloud computing to ensuring high
          availability, disaster recovery, and business continuity.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="IT Infrastructure Solutions"
        />
        <p data-aos="fade-up" className="description">
          A successful IT infrastructure solution starts with understanding your
          business needs and designing the right technology stack. Our team
          works closely with you to ensure your systems are aligned with your
          strategic objectives, from the initial planning phase to deployment
          and ongoing maintenance.
          <br />
          <br />
          We specialize in setting up server environments, storage systems,
          networking configurations, and cloud platforms such as AWS, Microsoft
          Azure, and Google Cloud. Our infrastructure solutions are designed to
          be scalable, reliable, and optimized for your operational
          requirements.
          <br />
          <br />
          We also focus on IT security and data protection, implementing
          firewalls, network security measures, and backup solutions to ensure
          the integrity and availability of your systems. With our robust
          security protocols, we help protect your infrastructure from potential
          cyber threats and data breaches.
          <br />
          <br />
          Post-deployment, we provide continuous support, monitoring, and
          optimization to ensure that your IT infrastructure remains up-to-date
          and performs at its best. From system updates to proactive problem
          resolution, we ensure your infrastructure remains reliable, secure,
          and efficient.
          <br />
          <br />
          With our expertise in IT infrastructure, we enable your business to
          achieve operational efficiency, reduce downtime, and scale your
          systems as your business grows.
        </p>
      </div>
    </div>
  );
};

export default ItInfrastructures;
