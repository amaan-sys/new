import React from "react";

export default function TermsContent() {
  return (
    <section id="terms" className="min-h-screen bg-white text-gray-800  font-serif py-30 px-2">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-8">
          Terms & Conditions
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Please read these Terms & Conditions carefully before using our
          website or services. By accessing or using Giovanni’s Landscaping’s
          services, you agree to these terms.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By using our website or booking any service, you acknowledge that you
          have read, understood, and agreed to these Terms & Conditions. If you
          do not agree, please do not use our services.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          2. Services Provided
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Giovanni’s Landscaping provides residential and commercial landscaping
          services, including lawn care, maintenance, cleanup, hardscaping, and
          other outdoor services as listed on our website. Service availability
          may vary by location and scheduling.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          3. Appointments & Scheduling
        </h2>
        <p className="text-gray-700 leading-relaxed">
          All appointments must be scheduled in advance. We reserve the right to
          reschedule or delay services in cases of weather conditions, safety
          issues, or unforeseen circumstances. If you need to reschedule, please
          notify us at least 24 hours in advance.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          4. Payments & Billing
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Payments are due at the time of service unless otherwise agreed. We
          accept cash, checks, and major electronic payment methods. Late
          payments may incur additional fees.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          5. Cancellations & Refunds
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Cancellations must be made at least 24 hours before the scheduled
          appointment. Refunds are only issued for services not performed or
          in cases where we fail to meet agreed service expectations.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          6. Liability & Damages
        </h2>
        <p className="text-gray-700 leading-relaxed">
          While we take great care with every property, Giovanni’s Landscaping
          is not responsible for pre-existing damage or issues caused by factors
          beyond our control. Clients are responsible for notifying us of any
          fragile items, underground piping, wiring, or hazards before service.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          7. Use of Website
        </h2>
        <p className="text-gray-700 leading-relaxed">
          All content on this website, including images, text, and design, is
          owned by Giovanni’s Landscaping. Unauthorized use, copying, or
          distribution is strictly prohibited.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          8. Changes to Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may update these Terms & Conditions at any time. Continued use of
          our services after changes are posted constitutes acceptance of the
          new terms.
        </p>

        {/* Last Line */}
        <p className="text-gray-600 mt-12 text-sm">
          If you have any questions regarding these Terms & Conditions, please
          contact us at: <a href="mailto:giovannis@giovannislandscaping.net" className="text-red-600 font-semibold">giovannis@giovannislandscaping.net</a>
        </p>

      </div>
    </section>
  );
}
