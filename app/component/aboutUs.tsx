import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
          About Us
        </h2>

        <p className=" mx-auto w-4xl text-lg mb-6 text-center">
          Welcome to <span className="font-semibold">Focus Point Driving School</span>,
          your trusted partner in safe and confident driving. We’ve helped many students across Jhapa master the
          skills to become responsible drivers.
        </p>
        <br className="w-full flex" />
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Left Side – Mission & Values */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Over 8 years of trusted experience</li>
              <li>Certified, friendly, and multilingual instructors</li>
              <li>95% first-time pass rate</li>
              <li>Flexible scheduling to suit your lifestyle</li>
              <li>Modern vehicles with dual control systems</li>
              <li>Personalized lesson plans for every student</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
              Our Values
            </h3>
            <div className="flex flex-wrap gap-4">
              {["Safety", "Patience", "Inclusiveness", "Professionalism"].map(
                (value) => (
                  <span
                    key={value}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Side – Courses & CTA */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              What We Offer
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Beginner driving lessons</li>
              <li>Refresher courses for all ages</li>
              <li>Defensive driving training</li>
              <li>Manual & automatic car training</li>
              <li>Mock tests and exam preparation</li>
            </ul>

            <div className="mt-8">
              <p className="text-md mb-4">
                Join hundreds of students who trusted ProDrive Academy to start
                their driving journey.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Book Your First Lesson
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
