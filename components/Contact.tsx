"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-32 bg-stone-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-clay/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] border border-forest/10 text-forest/60 rounded-full">
            Contacto & Reservas
          </span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-forest leading-[0.9] mb-10">
            ¿Listo para <br />
            <span className="opacity-40 italic font-light">tu escapada?</span>
          </h2>

          <p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            No somos un motor de reservas. Somos personas gestionando tus vacaciones.
            Escríbenos y diseñaremos tu estancia perfecta.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="mailto:info@campingmobydick.com"
              className="group relative px-10 py-5 bg-forest text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                <Mail size={18} /> info@campingmobydick.com
              </span>
            </a>

            <a
              href="mailto:bungalows@campingmobydick.com"
              className="group px-10 py-5 bg-transparent border border-forest/20 text-forest rounded-full transition-all hover:border-forest hover:bg-forest/5"
            >
              <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                <Mail size={18} /> Bungalows
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">O llámanos directamente</p>
            <a href="tel:+34972614307" className="text-3xl md:text-4xl font-serif text-forest hover:text-clay transition-colors">
              (+34) 972 61 43 07
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
