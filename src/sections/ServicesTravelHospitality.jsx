import React from 'react';

const ServicesTravelHospitality = () => {
  return (
    <section id="travel-hospitality" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Travel & Hospitality Services</h2>

        {/* 1. Visa & Immigration */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Visa &amp; Immigration</h3>
          <ul className="list-none pl-4 space-y-1 mb-4">
            <li>✔️ <strong>Visa Assistance</strong>: Document checklist, form filling, scheduling, and status tracking.</li>
            <li>✔️ <strong>On-Arrival Support</strong>: Immigration guidance, airport meet-and-greet, SIM setup, 24/7 support.</li>
            <li>✔️ <strong>Hotel Booking</strong>: Tailored to budget and preferences.</li>
            <li>✔️ <strong>Transportation Services</strong>: Airport transfers, car rentals, public transport, itinerary guidance.</li>
            <li>✔️ <strong>Itinerary Overview</strong>: Flight schedules, hotel details, transport planning.</li>
            <li>✔️ <strong>Post-Travel Support</strong>: Feedback, visa renewals, future trip help.</li>
          </ul>
        </div>

        {/* 2. Tour Guiding */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Tour Guiding</h3>
          <ul className="list-none pl-4 space-y-1">
            <li>✔️ <strong>Dhaka City Tours (Half/Full-Day)</strong>: Cultural sites, landmarks, business hubs.</li>
            <li>✔️ <strong>Evening Tours</strong>: Local cuisine and entertainment in a safe setting.</li>
            <li>✔️ <strong>Customized Tours</strong>: Based on personal interests like architecture, history, shopping.</li>
          </ul>
        </div>

        {/* 3. Rent-a-Car */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Rent-a-Car</h3>
          <p className="mb-2">
            Various vehicle types available (compact to SUVs), focusing on comfort and convenience.
          </p>
        </div>

        {/* 4. Hotel Booking */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Hotel Booking</h3>
          <p className="mb-2">
            Comfortable, well-located hotels aligned with client needs and preferences.
          </p>
        </div>

        {/* 5. Airport Transfers */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. Airport Transfers</h3>
          <p>
            Reliable and smooth transfers for arrivals and departures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesTravelHospitality;