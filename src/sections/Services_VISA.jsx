import React from 'react';

const Services_VISA = () => {
  return (
    <section id="visa" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Visa Services</h2>

        {/* 1. Business & Work Visa Processing */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Business & Work Visa Processing</h3>
          <p className="mb-2">
            We assist foreign professionals, investors, and businesses in obtaining the right visa for Bangladesh.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ <strong>Business Visa</strong> – For foreign investors & business professionals</li>
            <li>✔️ <strong>Work Visa</strong> – For foreign employees in Bangladeshi companies</li>
          </ul>
        </div>

        {/* 2. SSW Visa (Specified Skilled Worker) */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            2. SSW Visa (Specified Skilled Worker Visa – Japan)
          </h3>
          <p className="mb-2">
            We support professionals seeking employment in Japan under the Specified Skilled Worker (SSW) visa program.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ Job Matching & Documentation Support</li>
            <li>✔️ SSW Visa Application & Processing</li>
            <li>✔️ Training & Language Support (if required)</li>
          </ul>
        </div>

        {/* 3. International Job Visa Assistance */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. International Job Visa Assistance</h3>
          <p className="mb-2">
            For individuals seeking job opportunities abroad, we provide visa support for different work categories.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ Job Visa Processing for Middle East, Europe, and Japan</li>
            <li>✔️ Legal Documentation & Employer Verification</li>
            <li>✔️ Work Permit & Employment Compliance</li>
          </ul>
        </div>

        {/* 4. Student Visa Processing */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Student Visa Processing</h3>
          <p className="mb-2">
            We assist students in securing student visas for higher education in Bangladesh and abroad.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ Student Visa Processing for Universities Worldwide</li>
            <li>✔️ Admission & Visa Documentation Assistance</li>
            <li>✔️ Scholarship & Financial Aid Guidance</li>
            <li>✔️ Multiple Entry Visa Processing</li>
            <li>✔️ Residence Permit & Long-Term Stay Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services_VISA;
