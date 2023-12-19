import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();
  const sendMail = async (e) => {
    e.preventDefault();
    const userId = "SjOJfdMi2HM4StNPq";
    const serviceId = "service_uvdtfna";
    const templateId = "template_09fn0r4";
    const accessToken = "2bkpCcfDElw20Exl_nEzd";

  

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then(() => {
        toast.success("Successfully Sent!");
        reset();
      })
      .catch((error) => toast.error("Error sending message"));
  };

  return (
    <>
      <Toaster />
      <h2 className="text-center text-4xl underline font-bold mt-10  mb-3 sm:pb-5">
        Contact Us
      </h2>
      <form
        ref={form}
        className="mt-8 mx-5 mb-16 border border-black p-4 lg:p-8 max-w-5xl lg:mx-auto rounded-lg"
        onSubmit={sendMail}
      >
        <label
          htmlFor="name"
          className="block text-base text-black font-semibold"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          {...register("name", { required: true })}
          placeholder="Full Name"
          autoComplete="name"
          aria-invalid={errors?.name ? "true" : "false"}
          className={`block w-full bg-opacity-50 text-black mt-1 p-2 rounded-md border-black border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-8 ${errors?.name ? "border-red-500" : ""
            }`}
        />
        {errors?.name && (
          <span className="text-red-500">This field is required</span>
        )}

        <label
          htmlFor="email"
          className="block text-base text-black font-semibold"
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
          autoComplete="email"
          aria-invalid={errors?.email ? "true" : "false"}
          className={`block w-full bg-opacity-50 text-black mt-1 p-2 rounded-md border-black border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-8 ${errors?.email ? "border-red-500" : ""
            }`}
        />
        {errors?.email && (
          <span className="text-red-500">This field is required</span>
        )}

        <label
          htmlFor="phone"
          className="block text-base text-black font-semibold"
        >
          Phone Number
        </label>

        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="Your Email"
          {...register("phone", { required: true })}
          autoComplete="phone"
          aria-invalid={errors?.phone ? "true" : "false"}
          className={`block w-full bg-opacity-50 text-black mt-1 p-2 rounded-md border-black border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-8 ${errors?.phone ? "border-red-500" : ""
            }`}
        />
        {errors?.phone && (
          <span className="text-red-500">This field is required</span>
        )}

        <label
          htmlFor="message"
          className="block text-base text-black font-semibold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          {...register("message", { required: true })}
          placeholder="Enter your message here"
          rows="4"
          className="block w-full bg-opacity-50 text-black mt-1 p-2 rounded-md border-black border-2 shadow-sm mb-8 focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
        {errors?.message && (
          <span className="text-red-500">This field is required</span>
        )}
        <button
          type="submit"
          value="send"
          className="focus:outline-none text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-800 flex justify-center items-center mx-auto dark:hover:bg-green-900 dark:focus:ring-green-900"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactPage;
