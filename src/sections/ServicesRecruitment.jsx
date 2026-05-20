import React from 'react';

const ServicesRecruitment = () => {
  return (
    <section id="recruitment-staffing" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recruitment & Staffing Solutions</h2>

        {/* 1. Recruitment Solutions */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Recruitment Solutions</h3>
          <p className="mb-2">
            We deliver high-quality hiring solutions tailored to your business needs, ensuring you get the right talent at the right time.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ <strong>Permanent Hiring (Mid to Leadership Roles)</strong></li>
            <li>✔️ <strong>Executive Search (Head of HR, Country Manager, Senior Leadership)</strong></li>
            <li>✔️ <strong>IT &amp; Technical Recruitment</strong></li>
            <li>✔️ <strong>Bulk Hiring for New Business Setup</strong></li>
          </ul>
          <p className="mt-2 italic text-gray-600">
            We specialize in supporting newly established foreign companies in Bangladesh.
          </p>
        </div>

        {/* 2. Contractual Staffing */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Contractual Staffing</h3>
          <p className="mb-2">
            We offer flexible staffing models to help you quickly adapt to changing business demands.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ <strong>Short-term &amp; Project-based Hiring</strong></li>
            <li>✔️ <strong>Contract-to-Hire Solutions</strong></li>
            <li>✔️ <strong>Fast Deployment (within agreed timeline)</strong></li>
            <li>✔️ <strong>Scalable Workforce Solutions</strong></li>
          </ul>
          <p className="mt-2 italic text-gray-600">
            Reduce hiring risk with flexible staffing models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesRecruitment;
