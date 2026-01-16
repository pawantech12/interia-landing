import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 pt-32 max-sm:pt-24 pb-14 px-6">
      {/* TOP GRADIENT DIVIDER */}
      <div className="absolute top-0 left-1/2 h-[1px] w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto grid gap-20 lg:grid-cols-12">
        {/* BRAND */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-3xl font-semibold tracking-wide text-white">
              Inter<span className="text-amber-400">ia</span>
            </h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              Interior Design Studio
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed max-w-sm">
            Crafting elegant, functional interior environments that reflect
            refined taste, thoughtful planning, and timeless design values.
          </p>

          <div className="h-[1px] w-24 bg-amber-400/60" />
        </div>

        {/* NAVIGATION */}
        <div className="lg:col-span-2">
          <h4 className="mb-8 text-xs uppercase tracking-widest text-neutral-300">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            {["Home", "Services", "Projects", "Consultation"].map((item) => (
              <li
                key={item}
                className="w-fit cursor-pointer transition hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* EXPERTISE */}
        <div className="lg:col-span-3">
          <h4 className="mb-8 text-xs uppercase tracking-widest text-neutral-300">
            Expertise
          </h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li>Residential Interior Design</li>
            <li>Commercial & Office Spaces</li>
            <li>Luxury Renovation Projects</li>
            <li>Space Planning & Styling</li>
          </ul>
        </div>

        {/* CONTACT + CTA */}
        <div className="lg:col-span-3 space-y-10">
          <div>
            <h4 className="mb-8 text-xs uppercase tracking-widest text-neutral-300">
              Contact
            </h4>

            <p className="text-sm text-neutral-400 mb-2">studio@email.com</p>
            <p className="text-sm text-neutral-400">+91 98765 43210</p>
          </div>

          {/* FIXED CTA SPACING */}
          <div>
            <button className="group inline-flex items-center justify-center gap-5 rounded-full border border-white/20 px-10 py-4 text-sm text-white transition hover:bg-white hover:text-black">
              Book a Consultation
              <span className="relative h-[1px] w-8 bg-current overflow-hidden">
                <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 group-hover:translate-x-0" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© 2026 Interia Studio. All rights reserved.</p>
        <p className="tracking-wide">
          Designed with intention & architectural clarity
        </p>
      </div>
    </footer>
  );
};

export default Footer;
