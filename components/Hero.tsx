"use strict";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/camping-top.jpg"
          alt="Camping Moby Dick"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Darker overlay for contrast */}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl"
        >
          <span className="inline-block border border-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-xs md:text-sm tracking-[0.2em] uppercase mb-8">
            Calella de Palafrugell
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
            Un pequeño <br />
            <span className="italic font-light">tesoro de calma.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mb-12 leading-relaxed">
            Naturaleza pura a 150m del mar. <br className="hidden md:block" />
            La esencia de la Costa Brava en estado puro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-clay text-white hover:bg-white hover:text-clay transition-all duration-300 px-10 py-4 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl text-center"
            >
              Reservar Estancia
            </a>
            <a
              href="#camping"
              className="border border-white/50 text-white hover:bg-white/10 transition-all duration-300 px-10 py-4 rounded-full uppercase tracking-widest text-sm font-bold backdrop-blur-sm text-center"
            >
              Descubrir Más
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Utility Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/10 py-6 hidden md:block"
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-white/80 text-sm">
          <div className="flex gap-8">
            <span>Temporada 2024: <strong>Abierto</strong></span>
            <span>Tel: <strong>(+34) 972 61 43 07</strong></span>
          </div>
          <div className="flex gap-8 uppercase tracking-wider text-xs">
            <span>Camping 1ª Categoría</span>
            <span>KG-000059</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
