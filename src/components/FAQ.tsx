import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "./Reveal"

const faqs = [
  {
    q: "Does the price of medication ever increase?",
    a: "No. Once you enroll in a plan, your monthly price is locked in for the duration of your plan. We believe in transparent, predictable pricing with no surprises.",
  },
  {
    q: "I'm already prescribed medication from another provider — can I start at a higher dosage?",
    a: "Yes. During your health intake, you can indicate your current dosage and medication history. A licensed physician will review your information and may adjust your starting dosage accordingly, based on clinical guidelines.",
  },
  {
    q: "How long does it take to receive my medication?",
    a: "After your prescription is approved (typically within 24–48 hours), your medication ships the same day. Total estimated delivery is 1–5 business days depending on your location.",
  },
  {
    q: "Is compounded GLP-1 medication safe?",
    a: "Compounded medications are prepared by licensed pharmacies in FDA-registered facilities. All Terna Health medications are reviewed and prescribed by licensed physicians and comply with applicable regulations. However, compounded medications are not FDA-approved.",
  },
  {
    q: "What if I don't qualify?",
    a: "If a Terna Health physician determines that GLP-1 medication is not right for you, you will be fully refunded for any unused portion of your plan. Your health and safety always come first.",
  },
  {
    q: "Can I cancel my plan?",
    a: "Yes, you can cancel at any time. If you cancel before your next shipment processes, you will not be charged for the following month. We make it easy to manage your plan through your member portal.",
  },
]

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-brand/10 text-brand font-semibold text-sm rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Have more questions? Email us at{" "}
            <a href="mailto:support@ternahealth.com" className="text-brand hover:underline">
              support@ternahealth.com
            </a>
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? "border-brand/30 bg-brand-bg" : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left"
                  >
                    <span
                      className={`font-semibold text-base ${isOpen ? "text-brand" : "text-gray-900"}`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 mt-0.5 transition-transform ${
                        isOpen ? "rotate-180 text-brand" : "text-gray-400"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
