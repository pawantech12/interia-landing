"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/386487366483"
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="
        group fixed bottom-8 right-8 z-50
        flex items-center
        rounded-full
        bg-neutral-950/80 backdrop-blur-2xl
        border border-white/10
        pl-3 pr-5 py-2.5
        shadow-[0_25px_60px_-25px_rgba(0,0,0,0.9)]
        transition-all duration-500 ease-out
        hover:border-amber-400/40
        hover:shadow-[0_35px_90px_-30px_rgba(251,191,36,0.35)]
      "
    >
      {/* Accent Line */}
      <span
        className="
          absolute left-0 top-1/2 h-8 w-[2px]
          -translate-y-1/2
          rounded-full
          bg-gradient-to-b from-transparent via-amber-400 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Icon */}
      <span
        className="
          relative flex h-10 w-10 items-center justify-center
          rounded-full
          bg-gradient-to-br from-neutral-800 to-neutral-900
          border border-white/10
          text-amber-400
          transition-transform duration-500
          group-hover:scale-105
        "
      >
        <MessageCircle className="h-5 w-5" />
      </span>

      {/* Text */}
      <span
        className="
          ml-3
          max-w-0 overflow-hidden whitespace-nowrap
          text-[13px] font-medium tracking-wide text-white
          transition-all duration-500
          group-hover:max-w-[180px]
        "
      >
        Talk to Our Designer
      </span>
    </Link>
  );
};

export default WhatsAppButton;
