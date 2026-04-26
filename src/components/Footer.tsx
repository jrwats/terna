import ternaLogo from "../assets/terna_health.png"
import { Reveal } from "./Reveal"

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* CTA band */}
      <div className="bg-site-dark py-12">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Start your weight loss journey today.
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Join thousands of Americans losing weight with Terna Health's
            doctor-reviewed GLP-1 programs.
          </p>
          <a
            href="#plans"
            className="inline-flex items-center px-8 py-3.5 bg-brand-light text-gray-900 font-bold rounded-full hover:bg-brand-mid transition-colors shadow-lg"
          >
            Start Losing Weight Now →
          </a>
        </Reveal>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <Reveal direction="left" className="lg:col-span-1">
            <img
              src={ternaLogo}
              alt="Terna Health"
              className="h-8 w-auto mb-4 brightness-200"
            />
            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              Terna Health provides premium GLP-1 weight loss treatment via
              telehealth. Licensed providers. Real results.
            </p>
            <p className="text-xs text-gray-600">
              support@ternahealth.com
              <br />
              (888) 996-0000
            </p>
          </Reveal>

          {[
            {
              heading: "Program",
              links: ["How It Works", "Semaglutide", "Tirzepatide", "Pricing Plans", "Member Portal"],
            },
            {
              heading: "Support",
              links: ["FAQ", "Contact Us", "Patient Portal", "Refill Request", "Provider Network"],
            },
            {
              heading: "Legal",
              links: ["Privacy Policy", "Terms & Conditions", "HIPAA Notice", "California Privacy Rights", "Telehealth Consent"],
            },
          ].map((col, i) => (
            <Reveal key={col.heading} delay={i * 80}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-xs text-gray-600 leading-relaxed mb-4 max-w-4xl">
            <strong className="text-gray-500">Important Disclaimer:</strong>{" "}
            Terna Health medications are compounded medications. They are not
            FDA-approved, but are produced in FDA-registered facilities by
            licensed compounding pharmacies. Telehealth services are provided by
            licensed medical professionals. Results vary by individual. These
            statements have not been evaluated by the Food and Drug
            Administration.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © 2025 Terna Health, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">HIPAA Compliant</span>
              <span className="w-px h-4 bg-gray-700" />
              <span className="text-xs text-gray-600">FDA-Registered Pharmacy</span>
              <span className="w-px h-4 bg-gray-700" />
              <span className="text-xs text-gray-600">Licensed Physicians</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
