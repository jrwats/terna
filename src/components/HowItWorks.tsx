import { ClipboardList, UserCheck, PackageCheck } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Complete Your Health Assessment",
    description:
      "Answer a quick health questionnaire online. Tell us about your goals, current health, and medical history. Your information is 100% private and HIPAA-compliant.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Doctor Reviews Your Plan",
    description:
      "A licensed physician in your state reviews your intake and creates a personalized treatment plan. If eligible, they issue your prescription within 48 hours.",
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Medication Delivered to Your Door",
    description:
      "Your medication ships directly from our FDA-registered pharmacy to your home — discreetly and for free. Ongoing support included with every plan.",
  },
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand/10 text-brand font-semibold text-sm rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Getting started with Terna Health is fast and easy — no in-person
            visits required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-brand-mid z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center bg-white"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-brand-bg border-2 border-brand-mid flex items-center justify-center shadow-lg">
                    <Icon size={36} className="text-brand" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                    {step.number.slice(1)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#plans"
            className="inline-flex items-center px-10 py-4 bg-brand hover:bg-brand-dark text-white font-bold text-base rounded-full transition-colors shadow-lg shadow-brand/25"
          >
            Start Your Assessment →
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Takes less than 5 minutes · No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}
