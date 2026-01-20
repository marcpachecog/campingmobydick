"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/30 -skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-forest rounded-3xl p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <span className="text-sand text-sm font-bold uppercase tracking-widest mb-4 block">Reservas y Consultas</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">¿Listo para tu escapada?</h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
              Escríbenos para consultar disponibilidad, precios o cualquier duda que tengas.
              Gestionamos nuestras reservas de forma personalizada para ofrecerte el mejor servicio.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="mailto:info@campingmobydick.com"
                className="group bg-clay text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-clay transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Mail className="group-hover:scale-110 transition-transform" />
                info@campingmobydick.com
              </a>
              <a
                href="mailto:bungalows@campingmobydick.com"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-forest transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Mail className="group-hover:scale-110 transition-transform" />
                bungalows@campingmobydick.com
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-2">
              <span className="text-sm uppercase tracking-wider opacity-60">¿Prefieres llamarnos?</span>
              <a href="tel:+34972614307" className="flex items-center gap-2 text-2xl font-serif hover:text-sand transition-colors">
                <Phone size={24} /> (+34) 972 61 43 07
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
