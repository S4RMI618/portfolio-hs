import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 pb-6 border-sky-100 border-2 md:pr-20">
      <h1 className="text-center text-4xl font-bold text-indigo-800/90">
        Contact
      </h1>
      <form action="https://getform.io/f/09a831e0-ebd8-4371-b370-2953d178160e" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="text-sm uppercase py-2" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-indigo-400"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm uppercase py-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-indigo-400"
              type="text"
              name="phone"
              id="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm uppercase py-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-indigo-400"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm uppercase py-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-indigo-400"
            type="text"
            name="subject"
            id="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm uppercase py-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="border-2 rounded-lg p-3 border-indigo-400"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-indigo-800 text-gray-100 w-full mt-4 p-4 rounded-lg hover:scale-95 duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
