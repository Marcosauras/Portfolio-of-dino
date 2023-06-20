import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="flex flex-col h-screen text-center text-night" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Footer from "../components/Footer";

// function ContactMe() {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className="flex flex-col h-screen text-center">
//       <section className="flex-grow bg-peach dark:bg-gray-900">
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//             <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
//             <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to contact me, just put in your email, send me an email and I'll get back to you as quick as I can.</p>
//             <form action="#" className="space-y-8">
//                 <div>
//                     <label htmlfor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Your email</label>
//                     <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-night-500 focus:border-night-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-night-500 dark:focus:border-night dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
//                 </div>
//                 <div>
//                     <label htmlfor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Subject</label>
//                     <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray shadow-sm focus:ring-night focus:border-night dark:text-white dark:focus:ring-night dark:focus:border-night dark:shadow-sm-light" placeholder="Tell me the reason you are contacting me here" required/>
//                 </div>
//                 <div className="sm:col-span-2">
//                     <label htmlfor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
//                     <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray focus:ring-night-500 focus:border-night-500  dark:text-white dark:focus:ring-night-500 dark:focus:border-night-500" placeholder="more details on what you would like for me to do"></textarea>
//                 </div>
//                 <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-navy-700 sm:w-fit hover:bg-night-800 focus:ring-4 focus:outline-none focus:ring-night dark:bg-night-600 dark:hover:bg-night-700 dark:focus:ring-night-800 hover:bg-gradient hover:text-navy">Send message</button>
//             </form>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

export default ContactMe;
