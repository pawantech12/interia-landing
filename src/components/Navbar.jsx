"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* subtle top accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-semibold tracking-wide text-white">
              Inter<span className="text-amber-400">ia</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-1">
              Interior Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-300">
            {["Services", "Why Interia", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <Link href={"#projects"}>
              <Button
                variant="outline"
                className="
                hidden sm:inline-flex
                border border-white/20
                text-neutral-200
                bg-white/5
                backdrop-blur
                hover:bg-white/10
                hover:text-white
                transition
              "
              >
                View Portfolio
              </Button>
            </Link>

            <Link href={"#contact"}>
              <Button
                className="
                hidden sm:inline-flex
                relative
                text-black
                font-medium
                bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500
                hover:from-amber-400 hover:to-amber-500
                shadow-lg shadow-amber-400/30
                px-5
              "
              >
                Book Consultation
              </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white hover:bg-white/10 transition">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="bg-neutral-950 border-white/10 [&>button]:text-white
    [&>button]:hover:text-amber-400
    [&>button]:top-6
    [&>button]:right-6"
                >
                  <div className="flex flex-col gap-10 mt-10">
                    {/* Mobile Nav */}
                    <nav className="flex flex-col gap-6 text-sm text-neutral-300">
                      {["Services", "Why Interia", "Projects", "Contact"].map(
                        (item) => (
                          <Link
                            key={item}
                            onClick={() => setOpen(false)}
                            href={`#${item.toLowerCase().replace(" ", "")}`}
                            className="hover:text-white transition"
                          >
                            {item}
                          </Link>
                        )
                      )}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="flex flex-col gap-4">
                      <Link href={"#projects"} onClick={() => setOpen(false)}>
                        <Button
                          variant="outline"
                          className="
                sm:hidden inline-flex
                border w-full border-white/20
                text-neutral-200
                bg-white/5
                backdrop-blur
                hover:bg-white/10
                hover:text-white
                transition
              "
                        >
                          View Portfolio
                        </Button>
                      </Link>

                      <Link href={"#contact"} onClick={() => setOpen(false)}>
                        <Button
                          className="
                sm:hidden w-full inline-flex
                relative
                text-black
                font-medium
                bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500
                hover:from-amber-400 hover:to-amber-500
                shadow-lg shadow-amber-400/30
                px-5
              "
                        >
                          Book Consultation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
