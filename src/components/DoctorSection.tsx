import { BadgeCheck, Clock, Lock, Users } from "lucide-react"

const highlights = [
  {
    icon: BadgeCheck,
    title: "State-Licensed Physicians",
    text: "Every treatment plan is reviewed by a physician licensed in your state.",
  },
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    text: "From submission to prescription approval in as little as 24–48 hours.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    text: "Your medical records are encrypted and never shared without consent.",
  },
  {
    icon: Users,
    title: "Dedicated Care Team",
    text: "Your team is available throughout your journey — not just at intake.",
  },
]

export const DoctorSection = () => {
  return (
    <section className="py-20 bg-site-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block px-4 py-1 bg-brand/20 text-brand-light font-semibold text-sm rounded-full mb-6 border border-brand/20">
              Licensed Medical Review
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Doctor-Reviewed Treatment Plans, Every Time
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A licensed healthcare provider affiliated with Terna Health's
              Professional Entities reviews your health information and, if
              appropriate, creates a customized treatment plan aligned with your
              health needs and goals. Telehealth allows you to interact with
              your provider at times and locations that are convenient for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((h) => {
                const Icon = h.icon
                return (
                  <div key={h.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">
                        {h.title}
                      </div>
                      <div className="text-gray-400 text-xs leading-relaxed">
                        {h.text}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#plans"
              className="inline-flex items-center mt-10 px-8 py-3.5 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-colors shadow-lg shadow-brand/25"
            >
              Start Your Assessment →
            </a>
          </div>

          {/* Right: visual card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-brand opacity-10 blur-3xl scale-90 pointer-events-none" />

            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              {/* Doctor icon */}
              <div className="w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
                <svg
                  viewBox="0 0 48 48"
                  className="w-12 h-12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="16" r="8" fill="#aa3bff" opacity="0.7" />
                  <path
                    d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16"
                    stroke="#aa3bff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M28 32h8M32 28v8"
                    stroke="#aa3bff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Your Care Team at a Glance
              </h3>

              {/* Simulated review steps */}
              {[
                { step: "1", label: "Health intake received", done: true },
                { step: "2", label: "Medical history reviewed", done: true },
                { step: "3", label: "Treatment plan created", done: true },
                { step: "4", label: "Prescription issued", done: false },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      s.done
                        ? "bg-brand text-white"
                        : "border-2 border-white/20 text-gray-500"
                    }`}
                  >
                    {s.done ? (
                      <svg viewBox="0 0 12 12" className="w-3 h-3">
                        <path
                          d="M1 6l3.5 3.5L11 2"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      s.step
                    )}
                  </div>
                  <span
                    className={`text-sm ${s.done ? "text-gray-300" : "text-gray-500"}`}
                  >
                    {s.label}
                  </span>
                  {s.done && (
                    <span className="ml-auto text-xs text-brand font-medium">
                      ✓ Done
                    </span>
                  )}
                </div>
              ))}

              <div className="mt-6 p-4 rounded-xl bg-brand/10 border border-brand/20">
                <p className="text-xs text-gray-300 leading-relaxed">
                  "A physician licensed in your state will review your medical
                  intake and issue the prescription if eligible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
