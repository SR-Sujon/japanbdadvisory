import React from 'react';

const ServicesExpatManagement = () => {
  return (
    <section id="expat-management" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expat Management Services</h2>

        {/* 1. Visa & Work Permit Assistance */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Visa &amp; Work Permit Assistance</h3>
          <p className="mb-2">
            Navigating immigration regulations can be challenging. We ensure hassle-free visa processing, work permits, and renewals.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ <strong>Business &amp; Work Visa Processing</strong></li>
            <li>✔️ <strong>Work Permit &amp; Employment Authorization</strong></li>
            <li>✔️ <strong>Dependent &amp; Family Visa Support</strong></li>
            <li>✔️ <strong>Visa Extensions &amp; Renewals</strong></li>
          </ul>
        </div>

        {/* 2. Relocation & Settling-In Services */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Relocation &amp; Settling-In Services</h3>
          <p className="mb-2">
            We help expatriates transition seamlessly to their new home with tailored relocation support.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ Airport Pickup &amp; Transportation</li>
            <li>✔️ Short-Term &amp; Long-Term Accommodation</li>
            <li>✔️ Schooling &amp; Healthcare Assistance</li>
            <li>✔️ Local Orientation &amp; Cultural Training</li>
          </ul>
        </div>

        {/* 3. Payroll & Tax Compliance for Expats */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Payroll &amp; Tax Compliance for Expats</h3>
          <p className="mb-2">
            Ensuring compliance with Bangladesh’s tax and payroll regulations for foreign employees.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ Payroll Structuring &amp; Salary Disbursement</li>
            <li>✔️ Tax Registration &amp; Compliance</li>
          </ul>
        </div>

        {/* 4. Corporate & Legal Advisory */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Corporate &amp; Legal Advisory</h3>
          <p className="mb-2">
            We handle the legal complexities of employing foreign professionals in Bangladesh.
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ Business &amp; Work Regulations Compliance</li>
            <li>✔️ Labor Law &amp; Contract Assistance</li>
            <li>✔️ Residency &amp; Exit Procedures</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesExpatManagement;
