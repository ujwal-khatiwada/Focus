import React from 'react';

const ContactInfo = () => {
  return (
    <div className="md:w-2/5 w-full rounded-xl bg-gradient-to-b from-blue-600 to-blue-650 text-white md:p-16 p-6 mb-6 md:mb-0 shadow-lg shadow-blue-900/30">
      <h4 className="text-2xl font-semibold mb-4">Contact Information</h4>
      <p className="text-base text-blue-100 mb-10">
        Fill up the form and our team will get back to you within 24 hours.
      </p>

      <div className="flex gap-5 items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-200"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <a href="tel:9817963849" className="text-base hover:underline text-white">
          9764468567
        </a>
      </div>

      <div className="flex gap-5 items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-200"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 17.25V6.75zm2.592-.158a.75.75 0 00-1.184.907l8.25 5.625a.75.75 0 00.884 0l8.25-5.625a.75.75 0 10-.884-1.213L12 11.373 4.092 6.592z"
            clipRule="evenodd"
          />
        </svg>
        <a
          href="mailto:focuspointdrivingschool@gmail.com"
          className="text-base hover:underline text-white"
        >
          focuspointdrivingschool@gmail.com
        </a>
      </div>

      {/* Social Media Buttons */}
      <div className="flex items-center gap-5 mt-10">
        <a
          href="https://www.facebook.com/profile.php?id=61566661587410"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 transition shadow-lg shadow-blue-900/50 text-white flex items-center justify-center">
            <i className="fa-brands fa-facebook text-lg" aria-hidden="true"></i>
          </button>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 transition shadow-lg shadow-blue-900/50 text-white flex items-center justify-center">
            <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
          </button>
        </a>
        <a
          href="https://github.com/ujwal-khatiwada"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 transition shadow-lg shadow-blue-900/50 text-white flex items-center justify-center">
            <i className="fa-brands fa-github text-lg" aria-hidden="true"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
