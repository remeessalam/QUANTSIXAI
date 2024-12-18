import React from "react";
import img1 from "../../assets/services-details/dev1.jpg";
import img2 from "../../assets/services-details/dev2.jpg";
const DevOps = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-contain rounded-3xl object-center"
        alt="DevOps"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          DevOps
        </h2>
        <p data-aos="fade-up" className="description">
          DevOps bridges the gap between development and operations, enabling
          teams to deliver high-quality software faster and more reliably. By
          combining automation, collaboration, and continuous integration
          practices, we help organizations streamline workflows and achieve
          greater efficiency.
          <br />
          <br />
          Whether you're looking to accelerate software delivery, enhance system
          reliability, or improve scalability, our DevOps solutions empower you
          to adapt to the dynamic needs of your business while ensuring seamless
          operations.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          From setting up CI/CD pipelines to automating infrastructure
          management, our comprehensive DevOps services cater to diverse
          business requirements. We focus on optimizing workflows, reducing
          time-to-market, and ensuring robust application performance.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="DevOps"
        />
        <p data-aos="fade-up" className="description">
          A successful DevOps implementation starts with the right strategy. Our
          team collaborates with you to assess your current processes, identify
          bottlenecks, and design a customized roadmap. From configuration
          management to container orchestration, we ensure your system is agile
          and scalable.
          <br />
          <br />
          We specialize in tools like Docker, Kubernetes, Jenkins, Terraform,
          and AWS, delivering cloud-native solutions that enhance system
          reliability and security. Our expertise spans across microservices,
          serverless architectures, and hybrid cloud infrastructures.
          <br />
          <br />
          Monitoring and logging are critical components of our DevOps approach.
          We implement real-time monitoring solutions to track system
          performance, detect issues, and optimize resources proactively,
          ensuring minimal downtime.
          <br />
          <br />
          Post-deployment, we provide continuous support and optimization to
          adapt to evolving requirements. From infrastructure scaling to
          performance tuning, we help your business stay agile and competitive.
          <br />
          <br />
          With our DevOps expertise, we enable organizations to foster a culture
          of collaboration, innovation, and continuous improvement, ensuring
          software delivery at its best.
        </p>
      </div>
    </div>
  );
};

export default DevOps;
