"use strict";
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "El Camping", href: "#camping" },
    { name: "Alojamientos", href: "#alojamientos" },
    { name: "Experiencias", href: "#experiencias" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="relative z-50">
          {/* Logo Image */}
          <Image
            src="/images/logo-mobydick.png"
            alt="Camping Moby Dick"
            width={150}
            height={64}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-clay",
                isScrolled ? "text-forest" : "text-white drop-shadow-md"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:info@campingmobydick.com"
            className="bg-clay text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-forest"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={cn(isScrolled ? "text-forest" : "text-white")} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-sand flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-forest hover:text-clay"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:info@campingmobydick.com"
                className="bg-clay text-white px-8 py-3 rounded-full text-lg font-bold uppercase tracking-wide"
              >
                Reservar
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
