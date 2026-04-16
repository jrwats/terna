import { Check } from "lucide-react"
import { useState } from "react"

type Medication = "semaglutide" | "tirzepatide"

const basePrices: Record<Medication, Record<string, number>> = {
  semaglutide: { "3": 95, "6": 85, "12": 75 },
  tirzepatide: { "3": 145, "6": 135, "12": 125 },
}

const plans = [
  {
    months: "3",
    label: "3-Month Plan",
    supply: "3 Months Supply",
    popular: false,
    savings: null,
  },
  {
    months: "6",
    label: "6-Month Plan",
    supply: "6 Months Supply",
    popular: true,
    savings: "Save $60",
  },
  {
    months: "12",
    label: "12-Month Plan",
    supply: "12 Months Supply",
    popular: false,
    savings: "Save $240",
  },
]

const features = [
  "Compounded GLP-1 medication",
  "Free home delivery",
  "Licensed physician review",
  "Unlimited provider messaging",
  "Personalized dosage plan",
  "Vitamin B12 included",
  "On-demand prescription refills",
]

export const Plans = () => {
  const [med, setMed] = useState<Medication>("semaglutide")

  return (
    <section id="plans" className="py-20 bg-site-dark relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-brand/20 text-brand-light font-semibold text-sm rounded-full mb-4 border border-brand/20">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Lock in your rate today. All plans include free shipping, doctor
            review, and ongoing support.
          </p>
        </div>

        {/* Med toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-white/10 p-1 bg-white/5">
            {(["semaglutide", "tirzepatide"] as Medication[]).map((m) => (
              <button
                key={m}
                onClick={() => setMed(m)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all ${
                  med === m
                    ? "bg-brand text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price = basePrices[med][plan.months]
            return (
              <div
                key={plan.months}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.popular
                    ? "bg-brand ring-2 ring-brand-light"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-brand text-xs font-bold rounded-full shadow">
                    Most Popular
                  </span>
                )}

                {plan.savings && (
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit ${
                      plan.popular
                        ? "bg-white/20 text-white"
                        : "bg-brand/20 text-brand-light"
                    }`}
                  >
                    {plan.savings}
                  </span>
                )}

                <h3
                  className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-white"}`}
                >
                  {plan.label}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-gray-400"}`}
                >
                  {plan.supply}
                </p>

                <div className="mb-6">
                  <span
                    className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-white"}`}
                  >
                    ${price}
                  </span>
                  <span
                    className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-400"}`}
                  >
                    /mo
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-brand"}`}
                      />
                      <span
                        className={plan.popular ? "text-white/85" : "text-gray-300"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block text-center py-3 rounded-full font-bold text-sm transition-colors ${
                    plan.popular
                      ? "bg-white text-brand hover:bg-gray-100"
                      : "bg-brand hover:bg-brand-dark text-white"
                  }`}
                >
                  Start {plan.months}-Month Plan →
                </a>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          All plans auto-renew. Cancel anytime. Price does not increase after
          enrollment.
        </p>
      </div>
    </section>
  )
}
