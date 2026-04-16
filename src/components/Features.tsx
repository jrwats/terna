import {
  Stethoscope,
  Truck,
  ShieldCheck,
  BadgeDollarSign,
  HeartPulse,
  Zap,
  MessageCircle,
  RefreshCw,
} from "lucide-react"

const features = [
  {
    icon: Stethoscope,
    title: "Doctor-Reviewed Plans",
    description:
      "A licensed physician in your state reviews your health intake and creates a personalized treatment plan tailored to your goals.",
  },
  {
    icon: Truck,
    title: "Free Home Delivery",
    description:
      "All plans include free shipping. Your medication is delivered discreetly and conveniently to your home in 1–5 business days.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description:
      "Your health information is protected with industry-standard encryption and strict HIPAA compliance. Your data is always safe.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "No surprise fees. Your price never increases after you enroll. Affordable monthly plans starting at just $75/mo.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing Health Support",
    description:
      "Licensed healthcare providers are available throughout your journey for ongoing guidance, dosage adjustments, and questions.",
  },
  {
    icon: Zap,
    title: "Fast Prescription Approval",
    description:
      "Most prescriptions are reviewed and approved within 24–48 hours. All approved orders are processed and shipped the same day.",
  },
  {
    icon: MessageCircle,
    title: "Unlimited Provider Messaging",
    description:
      "Message your care team anytime through our secure patient portal. Get answers to your questions without waiting for an appointment.",
  },
  {
    icon: RefreshCw,
    title: "On-Demand Refills",
    description:
      "Never run out of medication. Request refills directly through your member portal, shipped automatically on your schedule.",
  },
]

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-brand/10 text-brand font-semibold text-sm rounded-full mb-4">
            Why Terna Health
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We've built a complete telehealth experience so you can focus on
            your health — not the logistics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                  <Icon size={22} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
