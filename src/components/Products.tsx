import { Reveal } from "./Reveal"

export const Products = () => {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-brand/10 text-brand font-semibold text-sm rounded-full mb-4">
            Our Medications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All Dosages the Same Low Price
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compounded medications produced in FDA-registered facilities,
            prescribed by licensed physicians — delivered directly to your door.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Reveal delay={0}>
            <ProductCard
              name="Semaglutide"
              tagline="GLP-1 Weight Loss Medication"
              price="$95"
              features={[
                "Weekly subcutaneous injection",
                "Gradual dosage titration",
                "Clinically proven for weight loss",
                "Includes Vitamin B12",
                "Free supplies included",
              ]}
              badge="Most Popular"
              badgeColor="bg-brand text-white"
              gradient="from-green-50 to-brand-bg"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProductCard
              name="Tirzepatide"
              tagline="Dual GIP/GLP-1 Receptor Agonist"
              price="$145"
              features={[
                "Weekly subcutaneous injection",
                "Dual hormone mechanism",
                "Superior weight loss results",
                "Includes Vitamin B12",
                "Free supplies included",
              ]}
              badge="Maximum Results"
              badgeColor="bg-site-dark text-white"
              gradient="from-gray-50 to-gray-100"
            />
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="text-center text-xs text-gray-400 mt-8">
            These are compounded medications. They are not FDA-approved, but are
            produced in FDA-registered facilities by licensed compounding
            pharmacies.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

interface ProductCardProps {
  name: string
  tagline: string
  price: string
  features: string[]
  badge: string
  badgeColor: string
  gradient: string
}

const ProductCard = ({
  name,
  tagline,
  price,
  features,
  badge,
  badgeColor,
  gradient,
}: ProductCardProps) => (
  <div
    className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow`}
  >
    <span
      className={`absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full ${badgeColor}`}
    >
      {badge}
    </span>

    <div className="w-24 h-24 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 border border-gray-100">
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="18" y="4" width="12" height="40" rx="6" fill="#3a5a40" opacity="0.8" />
        <rect x="4" y="18" width="40" height="12" rx="6" fill="#3a5a40" opacity="0.4" />
      </svg>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-gray-500 text-sm mb-4">{tagline}</p>

    <div className="mb-6">
      <span className="text-4xl font-bold text-gray-900">{price}</span>
      <span className="text-gray-500 text-sm">/mo</span>
      <p className="text-xs text-gray-400 mt-1">Starting price · all dosages</p>
    </div>

    <ul className="space-y-2.5 mb-8">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
          <span className="w-4 h-4 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 12 12" className="w-2.5 h-2.5">
              <path
                d="M1 6l3.5 3.5L11 2"
                stroke="#3a5a40"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {f}
        </li>
      ))}
    </ul>

    <a
      href="#plans"
      className="block text-center py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-full transition-colors text-sm"
    >
      Choose {name} →
    </a>
  </div>
)
