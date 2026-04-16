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
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={ternaLogo} alt="Terna Health" className="h-9 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-600 hover:text-brand font-medium text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#plans"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-semibold text-sm rounded-full transition-colors"
          >
            Get Started →
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-brand font-medium px-2 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#plans"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-2.5 bg-brand text-white font-semibold rounded-full"
            >
              Get Started →
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
