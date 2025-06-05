import React from "react";
import ContactDetail from "./contactdetail";
import ContactInfo from "./contactinfo";

function Contact() {
  return (
    <div className="container mx-auto w-screen px-4">
      <div className="relative flex flex-col bg-blue-800 backdrop-blur-md text-white shadow-lg rounded-xl border border-blue-600">
        <div className="w-full p-6 flex flex-col md:flex-row md:gap-10">
          {/* Contact Info Panel */}
          <ContactInfo />

          {/* Form Panel */}
          <div className="md:w-2/3 w-full">
            <ContactDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
