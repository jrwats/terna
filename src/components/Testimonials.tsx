import { Star } from "lucide-react"
import { Reveal } from "./Reveal"

const testimonials = [
  {
    name: "Sarah M.",
    tag: "Verified Member",
    months: "6 months",
    lost: "38 lbs",
    text: "After years of failed diets and weight loss attempts, Terna Health has been a game-changer. The team is so kind and responsive, and the process has been smooth from start to finish. I'm feeling better, eating better, and I'm super motivated to continue this journey.",
    avatar: "SM",
    medication: "Semaglutide",
  },
  {
    name: "James T.",
    tag: "Verified Member",
    months: "4 months",
    lost: "29 lbs",
    text: "The website is clean and intuitive, making the entire ordering process seamless. The doctor responded so quickly and made me feel completely comfortable. The customer support is top tier — any question I had was answered within hours.",
    avatar: "JT",
    medication: "Tirzepatide",
  },
  {
    name: "Amy R.",
    tag: "Verified Member",
    months: "8 months",
    lost: "52 lbs",
    text: "Terna Health has been absolutely incredible! The setup was quick and easy, the communication has been great, and I feel like I have real support throughout this journey. I'm feeling confident and excited about my progress. Highly recommend for anyone looking for real change.",
    avatar: "AR",
    medication: "Tirzepatide",
  },
  {
    name: "David K.",
    tag: "Verified Member",
    months: "3 months",
    lost: "18 lbs",
    text: "I was skeptical at first but the doctor review process made me feel like I was in safe hands. My prescription was approved in under 24 hours and I had my medication in two days. Already seeing amazing results and couldn't be happier with Terna Health.",
    avatar: "DK",
    medication: "Semaglutide",
  },
]

const avatarColors = [
  "bg-emerald-600",
  "bg-teal-600",
  "bg-green-600",
  "bg-lime-700",
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-brand/10 text-brand font-semibold text-sm rounded-full mb-4">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Members Seeing Real Results
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            On average, Terna Health members lose{" "}
            <span className="font-semibold text-brand">15–25%</span> of their
            body weight with our GLP-1 programs.
          </p>

          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 font-semibold text-gray-700">4.9 out of 5</span>
            <span className="text-gray-400 text-sm ml-1">(2,300+ reviews)</span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="flex flex-col">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="bg-brand-bg rounded-xl px-3 py-2 mb-4 inline-flex items-center gap-2 w-fit">
                  <span className="text-brand font-bold text-lg">{t.lost}</span>
                  <span className="text-gray-500 text-xs">
                    in {t.months} on {t.medication}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-9 h-9 rounded-full ${avatarColors[i]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.tag}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
