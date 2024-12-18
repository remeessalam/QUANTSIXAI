import React from "react";
import img1 from "../../assets/services-details/cyber1.jpg";
import img2 from "../../assets/services-details/cyber2.jpg";
const CyberSecurity = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-contain rounded-3xl object-center"
        alt="Cybersecurity"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Cybersecurity
        </h2>
        <p data-aos="fade-up" className="description">
          Cybersecurity is the foundation of trust and protection in today’s
          digital world. As businesses increasingly rely on digital systems,
          securing your data, networks, and systems from cyber threats is more
          critical than ever. Our cybersecurity solutions provide comprehensive
          protection to safeguard your organization’s sensitive information and
          ensure business continuity.
          <br />
          <br />
          Whether you are defending against cyberattacks, ensuring data privacy,
          or securing cloud environments, our cybersecurity solutions deliver
          the tools and expertise you need to mitigate risks, enhance your
          defense mechanisms, and stay resilient in the face of evolving cyber
          threats.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          From endpoint protection to advanced threat detection and incident
          response, we offer comprehensive cybersecurity services. Our solutions
          span across network security, data encryption, penetration testing,
          compliance management, and more to protect your business from a wide
          range of cyber threats.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="Cybersecurity"
        />
        <p data-aos="fade-up" className="description">
          A successful cybersecurity strategy begins with identifying
          vulnerabilities and understanding your organization's digital assets.
          Our team collaborates with you to build a tailored security plan that
          aligns with your business needs. From network security and firewall
          management to securing applications and databases, we ensure that
          every layer of your infrastructure is protected.
          <br />
          <br />
          We specialize in a range of cybersecurity technologies such as
          firewalls, intrusion detection systems (IDS), encryption protocols,
          and cloud security platforms. Our experts also ensure that your
          systems are fortified against the latest threats like ransomware,
          phishing, and advanced persistent threats (APTs).
          <br />
          <br />
          Data protection and compliance are central to our cybersecurity
          efforts. We help your organization meet industry standards, including
          GDPR, HIPAA, and PCI-DSS, ensuring that your data is always secure and
          compliant with regulatory requirements. Our testing and validation
          processes ensure that your defenses are robust and up-to-date.
          <br />
          <br />
          Post-deployment, we provide continuous monitoring, incident response,
          and ongoing risk management. Our team ensures that your cybersecurity
          infrastructure evolves with emerging threats, and we offer real-time
          support in case of security breaches or vulnerabilities.
          <br />
          <br />
          With our expertise in cybersecurity, we help your business protect its
          critical assets, maintain customer trust, and stay secure in an
          increasingly hostile cyber environment.
        </p>
      </div>
    </div>
  );
};

export default CyberSecurity;
