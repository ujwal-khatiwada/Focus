import React from "react";

const ContactDetail = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-blue-600 to-blue-650 rounded-xl mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5 text-white">
        <form action="https://formspree.io/f/xgvzawng"
          method="POST">
          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            <div className="relative w-full min-w-[200px] h-12 mb-3 md:mb-0">
              <input
                placeholder="eg. UJWAL"
                className="peer rounded w-full h-full bg-transparent text-white font-sans font-normal outline-none transition-all border-b border-blue-200 placeholder-shown:border-blue-200 text-sm px-px pt-5 pb-2 focus:border-blue-300"
                name="first-name"
              />
             <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate
                peer-placeholder-shown:text-gray-300
                leading-tight peer-focus:leading-tight
                peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-300
                transition-all -top-2.5 text-sm
                peer-focus:text-white
                after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 after:border-b-2
                after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300"
            >
              First Name
            </label>

            </div>
            <div className="relative w-full min-w-[200px] h-12">
              <input
                placeholder="eg. KHATIWADA"
                className="peer rounded w-full h-full bg-transparent text-white font-sans font-normal outline-none transition-all border-b border-blue-200 placeholder-shown:border-blue-200 text-sm px-px pt-5 pb-2 focus:border-blue-300"
                name="last-name"
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-300 transition-all -top-2.5 text-sm peer-focus:text-blue-100 after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="relative w-full min-w-[200px] h-12 mb-8">
            <input
              placeholder="eg. ujwalkhatiwada@gmail.com"
              className="peer rounded w-full h-full bg-transparent text-white font-sans font-normal outline-none transition-all border-b border-blue-200 placeholder-shown:border-blue-200 text-sm px-px pt-5 pb-2 focus:border-blue-300"
              name="email"
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-300 transition-all -top-2.5 text-sm peer-focus:text-blue-100 after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Email
            </label>
          </div>

          <p className="block antialiased font-sans font-normal text-blue-100 text-sm mb-2">
            What are you interested in?
          </p>
          <div className="-ml-3 mb-14 flex gap-6 flex-wrap">
            {["Car", "Bike", "Scooty", "Other"].map((label, index) => (
              <div className="inline-flex items-center" key={label}>
                <label
                  className="relative flex items-center cursor-pointer p-3 rounded-full"
                  htmlFor={`interest-${index}`}
                >
                  <input
                    className="peer relative appearance-none w-5 h-5 border rounded-full border-blue-300 cursor-pointer transition-all checked:border-blue-100 checked:bg-blue-100"
                    id={`interest-${index}`}
                    type="radio"
                    name="type"
                  />
                  <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  className="text-blue-100 font-light select-none cursor-pointer mt-px ml-2"
                  htmlFor={`interest-${index}`}
                >
                  {label}
                </label>
              </div>
            ))}
          </div>

          <div className="relative w-full min-w-[200px] mb-8">
            <textarea
              name="message"
              className="peer rounded w-full min-h-[100px] bg-transparent text-white font-sans font-normal outline-none resize-y transition-all border-b border-blue-200 placeholder-shown:border-blue-200 text-sm px-px pt-5 pb-2 focus:border-blue-300"
              placeholder=" "
            ></textarea>
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-300 transition-all -top-2.5 text-sm peer-focus:text-blue-100 after:content-[' '] after:block after:w-full after:absolute after:-bottom-1 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Your Message
            </label>
          </div>

          <div className="w-full flex justify-end">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-blue-600 text-white shadow-md shadow-blue-900/50 hover:shadow-[5px_5px_20px_5px_rgb(37,99,235)] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full md:w-fit"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDetail;
