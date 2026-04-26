import heroBg from "../assets/landing.png"
import heroBgMobile from "../assets/landing_mobile.png"

const TRUST_BADGES = [
  "Licensed Medical Providers",
  "Free Home Delivery",
  "HIPAA Compliant",
  "Third-party tested",
  "HSA/FSA Eligible",
];
TRUST_BADGES.push.apply(TRUST_BADGES, TRUST_BADGES);

export const Hero = () => {

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
      {/* Background photo — responsive */}
      <picture>
        <source media="(min-width: 768px)" srcSet={heroBg} />
        <img
          src={heroBgMobile}
          alt=""
          aria-hidden="true"
          className="animate-hero-photo absolute inset-0 w-full h-full object-cover object-[center_15%]"
        />
      </picture>

      {/* Gradient: darken bottom only for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {/* Gradient: subtle left vignette on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent hidden md:block" />

      {/* Content — pinned to bottom */}
      <div id="mainContent" className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-40">
        <div id="mainText" className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          {/* Eyebrow */}
          {/*
          <div className="animate-hero-1">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold rounded-full uppercase tracking-[0.12em] border border-white/20 mb-6 backdrop-blur-sm">
              Licensed Providers · Third-party tested
            </span>
          </div>
          */}

          {/* Headline */}
          <h1 className="animate-hero-2 text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-[1.05] mb-6">
            Trusted Treatment.
            <br />
            <span className="text-brand-light">Wellness for All.</span>
          </h1>

          {/* Subtext */}
          <p className="animate-hero-3 text-lg text-white/75 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Doctor-reviewed treatment plans, fast home delivery, and ongoing
            licensed support — all from the comfort of your home.
          </p>

          {/* CTA row */}
          <div className="animate-hero-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <a
              href="#plans"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-light hover:bg-brand-mid text-gray-900 font-bold text-base rounded-full transition-colors shadow-lg"
            >
              Start Losing Weight Now →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold text-base rounded-full transition-colors backdrop-blur-sm"
            >
              See How It Works
            </a>
          </div>

        </div>

        {/* Trust badges — marquee, full container width */}
        <div id="trustBadges" className="animate-hero-5 overflow-hidden mt-10">
          <div className="flex animate-marquee">
            {TRUST_BADGES.map((text, i) => ( <TrustBadge key={i} text={text} />))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-hero-6 mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { number: "50,000+", label: "Members" },
            { number: "15–25%", label: "Avg. Body Weight Lost" },
            { number: "48 hrs", label: "Avg. Prescription Approval" },
            { number: "4.9 ★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TrustBadge = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm text-white/75 flex-shrink-0 mr-10">
    <span className="w-4 h-4 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5">
        <path
          d="M1 6l3.5 3.5L11 2"
          stroke="#2a3a2e"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    {text}
  </div>
)
