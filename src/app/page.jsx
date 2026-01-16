"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InteriorLandingPage() {
  return (
    <main className="bg-[#0f0f0f] text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/hero-interior.png')",
          }}
        />

        {/* Architectural Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#ffffff10,transparent_55%)]" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl pt-32 pb-24 sm:pt-36 sm:pb-28 lg:py-28">
              {/* Eyebrow */}
              <p className="flex items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-300 mb-6 sm:mb-8">
                <span className="h-[1px] w-10 bg-amber-400" />
                Premium Interior Design Studio
              </p>

              {/* Heading */}
              <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight mb-6 sm:mb-8">
                Designing
                <span className="block font-light text-neutral-200 my-2 sm:my-3">
                  Architectural Spaces
                </span>
                <span className="block text-amber-400">
                  For Elevated Living
                </span>
              </h1>

              {/* Description */}
              <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 sm:mb-12">
                <span className="text-white font-medium">Interia</span> is a
                luxury interior studio crafting bespoke residential and
                commercial spaces where design precision meets timeless
                elegance.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-14 sm:mb-16">
                <Button
                  className="
              text-black
              font-medium
              bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500
              hover:from-amber-400 hover:to-amber-500
              shadow-xl shadow-amber-400/30
              px-7 py-6
              w-full sm:w-auto
            "
                >
                  Book Free Consultation
                </Button>

                <Button
                  variant="outline"
                  className="
              border-white/30
              text-white
              bg-white/5
              backdrop-blur
              hover:bg-white/10
              hover:text-white
              px-7 py-6
              w-full sm:w-auto
            "
                >
                  View Our Portfolio
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-lg">
                {[
                  { value: "10+", label: "Years of Expertise" },
                  { value: "250+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((item) => (
                  <div key={item.label} className="relative">
                    <p className="text-2xl sm:text-3xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 mt-2">
                      {item.label}
                    </p>

                    {/* subtle divider */}
                    <span className="absolute -bottom-4 left-0 h-[1px] w-8 bg-amber-400/60" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE – intentional empty space */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative bg-[#121212] px-4 sm:px-6 py-24 sm:py-28 md:py-32"
      >
        {/* subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_55%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="flex items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-5 sm:mb-6">
              <span className="h-[1px] w-8 sm:w-10 bg-amber-400" />
              Our Expertise
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight mb-5 sm:mb-6">
              Interior Design Services
              <span className="block text-neutral-400 font-light mt-2">
                Crafted for Modern Living
              </span>
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl">
              From concept to execution, we deliver thoughtfully designed
              interiors that elevate everyday living and professional spaces.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {[
              {
                title: "Residential Interiors",
                desc: "Bespoke home interiors crafted with refined materials, spatial harmony, and timeless comfort.",
                tag: "Homes",
                index: "01",
              },
              {
                title: "Commercial Spaces",
                desc: "Purpose-driven workspaces designed to elevate productivity, culture, and brand presence.",
                tag: "Workspaces",
                index: "02",
              },
              {
                title: "Luxury Renovation",
                desc: "High-end transformations defined by architectural detailing, premium finishes, and precision.",
                tag: "Luxury",
                index: "03",
              },
            ].map((service) => (
              <div
                key={service.index}
                className="
            group relative
            rounded-[24px] sm:rounded-[28px]
            bg-neutral-900/60
            backdrop-blur-xl
            border border-white/10
            p-8 sm:p-10
            overflow-hidden
            transition-all duration-500
            hover:-translate-y-4
            hover:border-amber-400/50
            hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]
          "
              >
                {/* Ambient architectural glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_left,#fbbf2418,transparent_60%)]" />

                {/* Vertical architectural spine */}
                <span className="absolute left-0 top-16 h-24 sm:h-28 w-[2px] bg-gradient-to-b from-amber-400 via-amber-400/60 to-transparent" />

                {/* Large index number */}
                <span className="absolute top-8 sm:top-10 right-8 sm:right-10 text-5xl sm:text-6xl font-semibold text-white/5 tracking-tight">
                  {service.index}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Tag */}
                  <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-amber-400 mb-4 sm:mb-5">
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[22px] font-semibold text-white leading-snug mb-5 sm:mb-6">
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <span className="block h-[1px] w-12 bg-white/10 mb-6 sm:mb-8" />

                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm text-sm sm:text-base">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <Button
                    className="
                relative
                p-0
                text-sm
                font-medium
                text-neutral-200
                hover:text-amber-400
                transition-colors
                group/btn
              "
                  >
                    <span className="flex items-center gap-3">
                      Explore Service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </span>

                    {/* underline */}
                    <span
                      className="
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  w-full
                  bg-gradient-to-r from-amber-400 to-transparent
                  scale-x-0
                  origin-left
                  transition-transform duration-300
                  group-hover/btn:scale-x-100
                "
                    />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="whyinteria"
        className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-36"
      >
        {/* Ambient studio texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#ffffff08,transparent_55%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid gap-20 lg:grid-cols-2 lg:gap-28 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="flex items-center gap-5 text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-neutral-400 mb-8 sm:mb-10">
              <span className="h-[1px] w-10 sm:w-12 bg-amber-400" />
              Why Interia
            </p>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-[1.25] mb-8 sm:mb-10">
              Designed With Purpose.
              <span className="block text-neutral-400 font-light mt-3 sm:mt-4">
                Crafted For Real Living.
              </span>
            </h2>

            {/* Description */}
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-12 sm:mb-16">
              At <span className="text-white font-medium">Interia</span>, we
              believe meaningful interiors are shaped by intent — balancing
              aesthetics, functionality, and longevity across every space we
              design.
            </p>

            {/* Principles */}
            <div className="space-y-10 sm:space-y-12">
              {[
                {
                  title: "Tailored Design Philosophy",
                  desc: "Each project begins with understanding how you live or work, ensuring spaces feel personal and intuitive.",
                },
                {
                  title: "Material Integrity & Craft",
                  desc: "We prioritize honest materials and refined craftsmanship for interiors that age beautifully.",
                },
                {
                  title: "Structured, Reliable Delivery",
                  desc: "Clear timelines, transparent workflows, and dependable execution from concept to completion.",
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-8 sm:pl-10">
                  {/* Vertical architectural marker */}
                  <span className="absolute left-0 top-1 h-full w-[2px] bg-gradient-to-b from-amber-400/90 to-transparent" />

                  <h4 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative max-w-lg mx-auto lg:max-w-none">
            {/* Image frame */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-900 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.8)]">
              <Image
                src="/why-choose-us-img.png"
                alt="Why choose Interia"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover scale-105"
              />
            </div>

            {/* Floating credibility card */}
            <div
              className="
        absolute
        left-6
        -bottom-10
        sm:-bottom-12
        sm:left-8
        lg:-left-12
        bg-neutral-950/90
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        px-8 sm:px-10
        py-6 sm:py-8
        shadow-2xl
      "
            >
              <p className="text-3xl sm:text-4xl font-semibold text-white leading-none">
                10+
              </p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-neutral-400 mt-2 sm:mt-3">
                Years of Design Expertise
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative py-24 md:py-32 px-6 bg-neutral-950"
      >
        {/* subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#ffffff08,transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-20 gap-10">
            <div className="max-w-xl">
              <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
                <span className="h-[1px] w-10 bg-amber-400" />
                Featured Projects
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                Spaces That Reflect
                <span className="block text-neutral-400 font-light mt-3">
                  Vision, Function & Craft.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-neutral-400 leading-relaxed">
              A curated selection of residential and commercial interiors — each
              project thoughtfully designed to balance aesthetics, comfort, and
              long-term usability.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="grid gap-8 lg:grid-cols-12">
            {[
              {
                title: "Modern Urban Residence",
                type: "Residential Interior",
                image: "/project1.jpg",
                layout: "hero",
              },
              {
                title: "Luxury Office Workspace",
                type: "Commercial Interior",
                image: "/project2.png",
                layout: "stack-top",
              },
              {
                title: "Minimal Villa Living",
                type: "Residential Interior",
                image: "/project3.jpg",
                layout: "stack-bottom",
              },
            ].map((project, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-neutral-900
            ${
              project.layout === "hero"
                ? "lg:col-span-7 lg:row-span-2 h-[420px] sm:h-[480px] lg:h-[580px]"
                : "lg:col-span-5 h-[260px] sm:h-[300px]"
            }
          `}
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14,transparent_60%)] opacity-60" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex items-end p-5 sm:p-7 md:p-10">
                  <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-500 group-hover:border-amber-400/40">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-amber-400 mb-3">
                      {project.type}
                    </p>

                    <h3
                      className={`text-white font-medium leading-snug
                  ${
                    project.layout === "hero"
                      ? "text-xl sm:text-2xl md:text-3xl mb-4 md:mb-5"
                      : "text-lg md:text-xl mb-3 md:mb-4"
                  }
                `}
                    >
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between gap-6">
                      <span className="hidden sm:block text-sm text-neutral-300">
                        Bespoke Interior Concept
                      </span>

                      <Link
                        href={`/projects/${project.slug ?? ""}`}
                        className="group/link inline-flex items-center gap-4 text-sm text-white transition-all duration-500
                    opacity-100 sm:opacity-0 translate-x-0 sm:translate-x-4
                    sm:group-hover:opacity-100 sm:group-hover:translate-x-0"
                      >
                        <span className="relative overflow-hidden">
                          <span className="block transition-transform duration-500 group-hover/link:-translate-y-full">
                            View Case Study
                          </span>
                          <span className="absolute left-0 top-full block text-amber-400 transition-transform duration-500 group-hover/link:-translate-y-full">
                            View Case Study
                          </span>
                        </span>

                        <span className="h-[1px] w-6 bg-white transition-all duration-500 group-hover/link:w-10 group-hover/link:bg-amber-400" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 md:mt-28 flex justify-center">
            <Link
              href="/projects"
              className="group relative flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-md transition-all duration-500 hover:border-amber-400/40"
            >
              <span className="relative overflow-hidden text-xs uppercase tracking-[0.25em] text-neutral-300 group-hover:text-white">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  View Full Portfolio
                </span>
                <span className="absolute left-0 top-full text-amber-400 transition-transform duration-500 group-hover:-translate-y-full">
                  View Full Portfolio
                </span>
              </span>

              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-amber-400">
                <span className="absolute inset-0 rounded-full bg-amber-400 scale-0 transition-transform duration-500 group-hover:scale-100" />
                <span className="relative h-[1px] w-4 bg-white group-hover:bg-black transition-colors" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative py-24 md:py-36 px-6 bg-neutral-950 overflow-hidden"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_65%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-20 md:mb-28 max-w-3xl">
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
              <span className="h-[1px] w-12 bg-amber-400" />
              Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              A Refined Journey
              <span className="block text-neutral-400 font-light mt-3">
                Thoughtfully shaping spaces from vision to reality.
              </span>
            </h2>
          </div>

          {/* PROCESS TIMELINE */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical spine (desktop only) */}
            <div className="absolute left-8 top-0 hidden md:block h-full w-[2px] bg-gradient-to-b from-amber-400/60 via-white/10 to-transparent" />

            {[
              {
                step: "01",
                title: "Client Consultation",
                desc: "We immerse ourselves in your lifestyle, aesthetic sensibilities, spatial challenges, and investment expectations to define a clear design foundation.",
              },
              {
                step: "02",
                title: "Concept & Space Planning",
                desc: "Design direction takes shape through layouts, mood boards, material studies, and spatial zoning that align vision with functionality.",
              },
              {
                step: "03",
                title: "Design Development",
                desc: "Detailed drawings, 3D visualizations, lighting strategies, and bespoke furniture designs refine the space to precision.",
              },
              {
                step: "04",
                title: "Execution & Styling",
                desc: "Meticulous execution, vendor coordination, quality control, and final styling ensure the design is delivered exactly as envisioned.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col md:flex-row gap-10 md:gap-16 md:pl-28 pb-20 md:pb-32 group"
              >
                {/* Timeline node */}
                <div className="md:absolute md:left-0 md:top-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-amber-400/50 bg-neutral-950 text-sm md:text-base font-medium text-amber-400 shadow-[0_0_0_6px_rgba(251,191,36,0.08)] transition group-hover:shadow-[0_0_0_10px_rgba(251,191,36,0.12)]">
                  {item.step}
                </div>

                {/* Content panel */}
                <div
                  className="
              relative
              overflow-hidden
              w-full
              rounded-[28px] md:rounded-[36px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8 md:p-14
              transition-all duration-500
              group-hover:border-amber-400/50
              md:group-hover:translate-x-2
            "
                >
                  {/* Ambient corner glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_left,#fbbf2418,transparent_65%)]" />

                  {/* Step label */}
                  <span className="mb-4 inline-block text-[11px] uppercase tracking-[0.35em] text-amber-400">
                    Phase {item.step}
                  </span>

                  <h3 className="text-xl md:text-2xl font-medium text-white mb-4 md:mb-6 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>

                  {/* Architectural divider */}
                  <span className="mt-8 md:mt-12 block h-[1px] w-20 md:w-24 bg-neutral-700 group-hover:bg-amber-400 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative py-24  lg:py-36 px-5 sm:px-6 bg-neutral-950"
      >
        {/* Architectural background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff06,transparent_55%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 sm:mb-20 gap-10">
            <div className="max-w-xl">
              <p className="flex items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
                <span className="h-[1px] w-10 bg-amber-400" />
                Client Testimonials
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                Designed With Trust.
                <span className="block text-neutral-400 font-light mt-3">
                  Built on Real Experiences.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-neutral-400 leading-relaxed text-sm sm:text-base">
              From private residences to commercial workspaces, our clients
              trust us to deliver interiors that balance design integrity,
              comfort, and long-term value.
            </p>
          </div>

          {/* TESTIMONIALS */}
          <div className="relative grid gap-14 lg:grid-cols-12">
            {[
              {
                name: "Ananya Sharma",
                role: "Luxury Apartment Owner",
                tag: "Residential Interior",
                feedback:
                  "The team transformed our apartment into a refined, timeless space. Every material, light source, and layout decision felt intentional and thoughtfully executed.",
                offset: "lg:col-span-7 lg:col-start-1",
              },
              {
                name: "Rohit Mehta",
                role: "Founder, Mehta Consulting",
                tag: "Commercial Workspace",
                feedback:
                  "Our office finally reflects who we are as a brand. The new layout improved collaboration, productivity, and how clients perceive us the moment they walk in.",
                offset: "lg:col-span-6 lg:col-start-7",
              },
              {
                name: "Neha Kapoor",
                role: "Villa Renovation Client",
                tag: "Luxury Renovation",
                feedback:
                  "Professional, design-driven, and deeply detail-oriented. The renovation exceeded expectations — visually and in execution quality.",
                offset: "lg:col-span-7 lg:col-start-1",
              },
            ].map((item, i) => (
              <div key={i} className={item.offset}>
                <div className="group relative">
                  {/* QUOTE SURFACE */}
                  <div className="relative rounded-[28px] sm:rounded-[36px] bg-neutral-900/70 backdrop-blur-xl border border-white/10 p-8 sm:p-10 lg:p-12 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
                    {/* Ambient highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top_left,#fbbf2412,transparent_65%)] opacity-60" />

                    {/* Quote mark (safe for mobile) */}
                    <span className="absolute -top-8 sm:-top-10 -left-3 sm:-left-6 text-6xl sm:text-7xl font-serif text-white/5">
                      “
                    </span>

                    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-neutral-200">
                      {item.feedback}
                    </p>
                  </div>

                  {/* CLIENT IDENTITY */}
                  <div className="relative mt-6 sm:mt-8 ml-4 sm:ml-8 max-w-sm">
                    {/* Brass accent */}
                    <span className="absolute -left-4 sm:-left-5 top-2 h-full w-[2px] bg-gradient-to-b from-amber-400 to-transparent" />

                    <div className="rounded-[18px] sm:rounded-[20px] bg-white/[0.04] backdrop-blur-md border border-white/10 p-5 sm:p-6">
                      <span className="block mb-3 text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-amber-400">
                        {item.tag}
                      </span>

                      <p className="text-white font-medium text-sm sm:text-base">
                        {item.name}
                      </p>

                      <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats*/}

      <section className="relative py-24 md:py-36 px-6 bg-neutral-950 overflow-hidden">
        {/* Architectural background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff08,transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-20 gap-10">
            <div className="max-w-xl">
              <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
                <span className="h-[1px] w-10 bg-amber-400" />
                Studio In Numbers
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                Design Excellence
                <span className="block text-neutral-400 font-light mt-3">
                  Measured Through Experience.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-neutral-400 leading-relaxed">
              Every number reflects years of thoughtful planning, material
              mastery, and long-term client relationships built through
              precision-led interior design.
            </p>
          </div>

          {/* STATS */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {/* Central architectural axis (desktop only) */}
            <span className="hidden lg:block absolute left-1/2 top-0 h-full w-[1px] bg-white/5" />

            {[
              { value: "10+", label: "Years of Design Practice" },
              { value: "250+", label: "Spaces Designed & Delivered" },
              { value: "40+", label: "Residential & Commercial Clients" },
              { value: "100%", label: "Client Satisfaction Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="
            group relative
            px-8 md:px-12
            py-16 md:py-20
            border-t border-white/10
            lg:border-t-0
            lg:border-l border-white/10
            bg-white/[0.02]
            backdrop-blur-sm
            overflow-hidden
            transition-all duration-500
            hover:bg-white/[0.04]
          "
              >
                {/* Vertical architectural spine */}
                <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-amber-400/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Structural corner detailing */}
                <span className="absolute left-0 top-0 h-[2px] w-16 bg-amber-400/70" />
                <span className="absolute left-0 top-0 h-16 w-[2px] bg-amber-400/50" />

                {/* Ghost studio index */}
                <span className="absolute top-6 md:top-8 right-6 md:right-8 text-[64px] md:text-[90px] font-semibold text-white/5 tracking-tight leading-none select-none">
                  0{i + 1}
                </span>

                {/* Accent line */}
                <span className="block h-[1px] w-14 bg-amber-400/70 mb-10 md:mb-12" />

                {/* Value */}
                <p className="text-[56px] md:text-[72px] font-semibold text-white leading-none tracking-tight mb-6 md:mb-8">
                  {stat.value}
                </p>

                {/* Divider */}
                <span className="block h-[1px] w-12 bg-neutral-700 mb-6 transition group-hover:bg-amber-400" />

                {/* Label */}
                <p className="text-sm text-neutral-400 leading-relaxed max-w-[240px]">
                  {stat.label}
                </p>

                {/* Ambient interior glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_left,#fbbf2416,transparent_65%)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-950 px-5 sm:px-6 py-24 sm:py-36 text-white">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fbbf2430,transparent_60%)]" />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl grid gap-20 lg:grid-cols-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="mb-6 flex items-center justify-center lg:justify-start gap-4 text-[11px] uppercase tracking-[0.35em] text-amber-400">
              <span className="h-[1px] w-10 bg-amber-400" />
              Start Your Project
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-8">
              Thoughtfully Designed
              <span className="block font-light text-neutral-300 mt-4">
                Interiors That Elevate Living.
              </span>
            </h2>

            <p className="mx-auto lg:mx-0 max-w-xl text-neutral-400 leading-relaxed mb-12">
              We design refined residential and commercial interiors that
              balance aesthetics, functionality, and long-term comfort — guided
              by experience, craftsmanship, and attention to detail.
            </p>

            {/* TRUST STATS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              {[
                { value: "120+", label: "Projects Delivered" },
                { value: "8+ Years", label: "Design Experience" },
                { value: "95%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-semibold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[32px] sm:rounded-[36px] border border-white/15 bg-white/5 backdrop-blur-2xl p-8 sm:p-10 md:p-12 transition-all duration-500 hover:border-amber-400/40 hover:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_right,#fbbf241a,transparent_60%)]" />

              {/* Architectural accent */}
              <span className="absolute left-0 top-12 h-24 w-[2px] bg-gradient-to-b from-amber-400 via-amber-400/60 to-transparent" />

              <div className="relative z-10 text-center sm:text-left">
                <p className="text-[11px] uppercase tracking-[0.4em] text-amber-400 mb-6">
                  Free Consultation
                </p>

                <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-4">
                  Let’s Discuss Your Space
                </h3>

                <p className="text-neutral-400 leading-relaxed mb-10 max-w-sm mx-auto sm:mx-0">
                  Tell us about your space, lifestyle, and design goals. Our
                  interior experts will craft a personalized design direction
                  tailored to you.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col gap-5">
                  {/* PRIMARY */}
                  <button className="group/primary relative overflow-hidden inline-flex w-full items-center justify-center gap-4 rounded-full bg-amber-400 px-10 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-amber-300 hover:-translate-y-[1px] hover:shadow-[0_12px_30px_-10px_rgba(251,191,36,0.6)]">
                    <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover/primary:translate-y-0" />
                    <span className="relative flex items-center gap-4">
                      Schedule Consultation
                      <span className="relative h-[1px] w-8 bg-black overflow-hidden">
                        <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 group-hover/primary:translate-x-0" />
                      </span>
                    </span>
                  </button>

                  {/* SECONDARY */}
                  <button className="group/secondary inline-flex w-full items-center justify-center gap-4 rounded-full border border-white/15 px-10 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:text-amber-400">
                    <span className="relative">
                      View Portfolio
                      <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-gradient-to-r from-amber-400 to-transparent scale-x-0 origin-left transition-transform duration-300 group-hover/secondary:scale-x-100" />
                    </span>
                    <span className="h-[1px] w-6 bg-current opacity-60 group-hover/secondary:opacity-100" />
                  </button>
                </div>

                {/* TRUST FOOTER */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[12px] text-neutral-500">
                  <span>Free Design Call</span>
                  <span className="h-[1px] w-6 bg-neutral-600" />
                  <span>No Obligation</span>
                  <span className="h-[1px] w-6 bg-neutral-600" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-neutral-950 px-6 py-24 md:py-32 text-white"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#fbbf2418,transparent_55%)]" />
        <div className="absolute -top-40 right-[-120px] h-[420px] w-[420px] md:h-[500px] md:w-[500px] rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* SECTION HEADER */}
          <div className="mb-20 md:mb-24 max-w-2xl">
            <p className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-amber-400">
              <span className="h-[1px] w-10 bg-amber-400" />
              Contact Interia
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Let’s Create a Space
              <span className="block font-light text-neutral-300 mt-3">
                Designed Around You.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-neutral-400 leading-relaxed">
              Share your vision with us. Whether it’s a residence, workspace, or
              luxury renovation, our interior specialists will guide you from
              concept to completion.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid gap-20 lg:grid-cols-2">
            {/* LEFT – STUDIO INFO */}
            <div className="relative">
              {/* Architectural spine */}
              <span className="absolute left-0 top-6 hidden sm:block h-40 w-[2px] bg-gradient-to-b from-amber-400 via-amber-400/60 to-transparent" />

              <div className="pl-0 sm:pl-12">
                <p className="text-[11px] uppercase tracking-[0.4em] text-amber-400 mb-6">
                  Studio Details
                </p>

                <h3 className="text-2xl font-medium mb-6 leading-snug">
                  Interia Interior Studio
                </h3>

                <p className="max-w-md text-neutral-300 leading-relaxed mb-10">
                  A design-led interior studio crafting refined residential and
                  commercial spaces. Our process balances spatial clarity,
                  premium materials, and long-term functionality.
                </p>

                {/* Info blocks */}
                <div className="space-y-8 text-sm text-neutral-300">
                  {[
                    { label: "Email", value: "hello@interiastudio.com" },
                    { label: "Phone", value: "+91 98765 43210" },
                    { label: "Studios", value: "Mumbai · Bangalore · Delhi" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-6">
                      <span className="mt-2 h-[1px] w-8 bg-neutral-600" />
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">
                          {item.label}
                        </p>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust footer */}
                <div className="mt-14 flex flex-wrap items-center gap-6 text-[12px] text-neutral-500">
                  <span>Free Design Call</span>
                  <span className="h-[1px] w-6 bg-neutral-600" />
                  <span>No Obligation</span>
                  <span className="h-[1px] w-6 bg-neutral-600" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-[28px] md:rounded-[40px] border border-white/15 bg-white/5 backdrop-blur-2xl p-8 md:p-12 transition-all duration-500 hover:border-amber-400/40">
                {/* Ambient glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,#fbbf241a,transparent_60%)]" />

                {/* Header */}
                <div className="mb-10">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-400 mb-3">
                    Consultation Request
                  </p>
                  <h3 className="text-2xl font-medium leading-snug">
                    Tell Us About Your Space
                  </h3>
                </div>

                <form className="space-y-7">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                      Full Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="h-12 rounded-xl bg-transparent border-white/15 focus-visible:ring-amber-400 focus-visible:ring-offset-0"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 rounded-xl bg-transparent border-white/15 focus-visible:ring-amber-400 focus-visible:ring-offset-0"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                      Project Type
                    </label>
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl bg-neutral-950 border-white/15 focus:ring-amber-400">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">
                          Residential Interior
                        </SelectItem>
                        <SelectItem value="commercial">
                          Commercial Space
                        </SelectItem>
                        <SelectItem value="luxury">
                          Luxury Renovation
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                      Project Overview
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="Briefly describe your space, style preferences, and expectations…"
                      className="resize-none rounded-xl bg-transparent border-white/15 focus-visible:ring-amber-400 focus-visible:ring-offset-0"
                    />
                  </div>

                  {/* CTA */}
                  <Button
                    type="submit"
                    className="
                group/submit mt-6 w-full rounded-full py-5 md:py-6
                bg-amber-400 text-black
                hover:bg-amber-300
                transition-all duration-300
                hover:-translate-y-[1px]
                hover:shadow-[0_16px_45px_-14px_rgba(251,191,36,0.6)]
              "
                  >
                    <span className="flex items-center justify-center gap-4">
                      Submit Consultation Request
                      <span className="relative h-[1px] w-8 bg-black overflow-hidden">
                        <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 group-hover/submit:translate-x-0" />
                      </span>
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
