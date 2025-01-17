import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LandingForm = () => {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log("Form Submitted:", data);
  //   // Handle form submission logic here
  // };
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: "remeesreme4u@gmail.com",
      // to: clientDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="pt-[6rem]">
      {" "}
      <div data-aos="fade-left" className="wrapper">
        <p className=" heading  uppercase text-center mb-5">Let's connect</p>
        <div className="bg-gradient-to-b text-white from-[#5B3E9A] to-[#30284D] rounded-2xl  px-7 pb-[6rem]">
          <h2 className="text-3xl font-medium py-[3rem]">
            Connect With Our Team to Get Started!
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 mt-3"
          >
            <div className="grid lg:grid-cols-2 gap-3">
              <div className="">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full outline-none p-3 rounded-lg text-black"
                  autoComplete="off"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full outline-none p-3 rounded-lg text-black"
                  autoComplete="off"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
              <div className="">
                <label htmlFor="subject">Subject*</label>
                <input
                  type="text"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="w-full outline-none p-3 rounded-lg text-black"
                  autoComplete="off"
                  placeholder="Enter subject"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "phone number is required",
                  })}
                  className="w-full outline-none p-3 rounded-lg text-black"
                  autoComplete="off"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="">
              <label htmlFor="message">Message*</label>
              <textarea
                rows="4"
                {...register("message", { required: "Message is required" })}
                placeholder="Enter your message here"
                className="w-full outline-none p-3 rounded-lg text-black"
                autoComplete="off"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 bg-white max-w-[30rem] mx-auto text-[#433d99] px-5 py-3 rounded-full hover:bg-[#5B3E9A] hover:text-white hover:-translate-y-1 duration-300 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingForm;
