import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID || "service_y9bvo9b",
        process.env.YOUR_TEMPLATE_ID || "template_j82brsp",
        form.current,
        "Wc1IYWF3v-w1sU_fy"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex-grow bg-peach dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form
          className="flex flex-col h-screen text-center text-night"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Subject</label>
          <input className="shadow-sm bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-night-500 focus:border-night-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-night-500 dark:focus:border-night dark:shadow-sm-light" placeholder="write the subject to your email here" requiredtype="text" name="subject" />
          <label>Email</label>
          <input className="shadow-sm bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-night-500 focus:border-night-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-night-500 dark:focus:border-night dark:shadow-sm-light" placeholder="name@flowbite.com" required type="email" name="email" />
          <label>Message</label>
          <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray focus:ring-night-500 focus:border-night-500  dark:text-white dark:focus:ring-night-500 dark:focus:border-night-500" placeholder="more details on what you would like for me to do" name="message" />

          <button className="m-3 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-navy-700 hover:bg-night-800 focus:ring-4 focus:outline-none focus:ring-night dark:bg-night-600 dark:hover:bg-night-700 dark:focus:ring-night-800 hover:bg-gradient hover:text-navy" type="submit" value="Send"> Submit </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;