import ternaImg from "../assets/terna_health.png"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-site-dark">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full bg-brand opacity-10 blur-[100px]" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-brand-dark opacity-15 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand-light text-sm font-semibold rounded-full mb-6 border border-brand/30">
              Trusted Telehealth · Licensed Providers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trusted Treatment. <span className="text-brand">Wellness for All </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Doctor-reviewed treatment plans, fast home delivery, and ongoing
              licensed support — all from the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#plans"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brand hover:bg-brand-dark text-white font-bold text-base rounded-full transition-colors shadow-lg shadow-brand/30"
              >
                Start Losing Weight Now →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 hover:border-white/60 text-white font-semibold text-base rounded-full transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <TrustBadge text="Licensed Medical Providers" />
              <TrustBadge text="Free Home Delivery" />
              <TrustBadge text="HIPAA Compliant" />
            </div>
          </div>

          {/* Right: product image / hero visual */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-brand opacity-20 blur-3xl scale-110" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-site-dark-mid/50 backdrop-blur-sm p-8">
                <img
                  src={ternaImg}
                  alt="Terna Health"
                  className="w-72 h-auto max-h-72 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { number: "50,000+", label: "Members" },
            { number: "15–25%", label: "Avg. Body Weight Lost" },
            { number: "48 hrs", label: "Avg. Prescription Approval" },
            { number: "4.9 ★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TrustBadge = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm text-gray-300">
    <span className="w-4 h-4 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-white">
        <path d="M1 6l3.5 3.5L11 2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    {text}
  </div>
)
