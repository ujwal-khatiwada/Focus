import React from 'react';
import Servicesdisc from "./servicesdisc";

function Services() {
  return (
    <div>
      <section className="h-full pt-5 px-8">
        <div className="container mx-auto text-center">
          <h6 className="text-3xl font-bold text-blue-800 mb-6">
            Our Services
          </h6>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Servicesdisc />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
