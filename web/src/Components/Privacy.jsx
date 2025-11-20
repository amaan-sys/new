import { useEffect, useState } from "react";

export default function PrivacyContent() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-sec]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.getAttribute("data-sec");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-serif flex justify-center py-16 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT MAIN CONTENT */}
        <div className="md:col-span-3 space-y-10">
          <h1 className="text-4xl font-bold text-red-600">Privacy Policy</h1>

          <p className="text-gray-700 max-w-2xl leading-relaxed">
            This Privacy Policy outlines how <span className="font-semibold text-red-600">Giovanni’s Landscaping</span> 
            collects, uses, and protects personal information when you visit our website or use our services.
          </p>

          {/* START SECTIONS */}
          <Section id="who" title="1. Who We Are">
            Giovanni’s Landscaping provides residential and commercial landscape
            care services. We value your trust, and your privacy is extremely
            important to us.
          </Section>

          <Section id="collect" title="2. Information We Collect">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Your contact details (name, phone number, email).</li>
              <li>Address and location details for service visits.</li>
              <li>Photos and project notes for service improvement.</li>
              <li>Cookies and analytics data for website performance.</li>
            </ul>
          </Section>

          <Section id="use" title="3. How We Use Your Information">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>To provide landscaping and outdoor maintenance services.</li>
              <li>To create accurate estimates or respond to inquiries.</li>
              <li>To analyze website usage and improve customer experience.</li>
            </ul>
          </Section>

          <Section id="legal" title="4. Legal Basis">
            We process personal data based on consent, legitimate business
            interests, or contractual obligations.
          </Section>

          <Section id="cookies" title="5. Cookies & Tracking">
            We use cookies to enhance website functionality, track performance,
            and understand how visitors interact with our content.
          </Section>

          <Section id="share" title="6. Sharing Your Information">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>With trusted contractors assisting in service delivery.</li>
              <li>With payment processors (if applicable).</li>
              <li>With legal authorities when required by law.</li>
            </ul>
          </Section>

          <Section id="security" title="7. Data Security">
            We utilize secure internal systems and protocols to protect your
            information from unauthorized access or misuse.
          </Section>

          <Section id="retention" title="8. Data Retention">
            Personal data is stored only for as long as necessary for business
            operations or legal compliance. You may request deletion anytime.
          </Section>

          <Section id="children" title="9. Children's Privacy">
            We do not knowingly collect information from children under age 13.
          </Section>

          <Section id="international" title="10. International Transfers">
            In rare cases, your information may be processed outside your region,
            following strict legal protections.
          </Section>

          <Section id="rights" title="11. Your Rights">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Right to access your personal data</li>
              <li>Right to request changes</li>
              <li>Right to delete your data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </Section>

          <Section id="links" title="12. External Links">
            Our website may contain links to third-party sites, and we are not
            responsible for their privacy practices.
          </Section>

          <Section id="changes" title="13. Policy Updates">
            We may update this policy periodically. Any changes will be posted on
            this page with the updated date.
          </Section>

          <Section id="contact" title="14. Contact Us">
            For privacy concerns or requests, contact us at : 
           <a href="mailto:giovannis@giovannislandscaping.net" className="text-red-600 font-semibold"> giovannis@giovannislandscaping.net</a>
          </Section>

          <Section id="accept" title="15. Acceptance of Policy">
            By using our website, you acknowledge and accept the terms described
            in this Privacy Policy.
          </Section>
        </div>

        {/* RIGHT-SIDE NAVIGATION — ATHENA STYLE */}
        <div className="hidden md:block">
          <div className="sticky top-24 border border-red-100 rounded-2xl p-5 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-red-600 mb-4">On this page</h3>

            <nav className="space-y-3 text-gray-700 text-sm">
              {tocLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block transition ${
                    active === item.id
                      ? "text-red-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} data-sec={id} className="space-y-3 scroll-mt-32">
      <h2 className="text-xl font-bold text-red-700">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </section>
  );
}

const tocLinks = [
  { id: "who", title: "Who We Are" },
  { id: "collect", title: "Information We Collect" },
  { id: "use", title: "How We Use Your Info" },
  { id: "legal", title: "Legal Basis" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "share", title: "Sharing Information" },
  { id: "security", title: "Data Security" },
  { id: "retention", title: "Data Retention" },
  { id: "children", title: "Children's Privacy" },
  { id: "international", title: "International Transfers" },
  { id: "rights", title: "Your Rights" },
  { id: "links", title: "External Links" },
  { id: "changes", title: "Policy Updates" },
  { id: "contact", title: "Contact Us" },
  { id: "accept", title: "Acceptance" },
];
