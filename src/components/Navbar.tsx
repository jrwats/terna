import { useState } from "react"
import { Menu, X } from "lucide-react"
import ternaLogo from "../assets/terna_health.png"

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Plans", href: "#plans" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <nav className="animate-nav sticky top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={ternaLogo} alt="Terna Health" className="h-9 w-auto brightness-200" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/85 hover:text-white font-medium text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#plans"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-brand-light hover:bg-brand-mid text-gray-900 font-semibold text-sm rounded-full transition-colors"
          >
            Get Started →
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-4 flex flex-col gap-3 bg-black/80 backdrop-blur-lg -mx-4 px-4 sm:-mx-6 sm:px-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-white font-medium px-2 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#plans"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-2.5 bg-brand-light text-gray-900 font-semibold rounded-full"
            >
              Get Started →
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
