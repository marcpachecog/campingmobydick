"use strict";
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BedDouble, Users, Home } from "lucide-react";

export function Bungalows() {
  const images = [
    "/images/bungalow-top.jpg",
    "/images/bungalow-01.jpg",
    "/images/bungalow-02.jpg",
    "/images/bungalow-03.jpg",
    "/images/bungalow-05.jpg",
  ];

  const amenities = [
    { icon: Users, label: "1-5 Personas" },
    { icon: Home, label: "25m² Superficie" },
    { icon: BedDouble, label: "2 Dormitorios" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section id="bungalows" className="py-24 bg-forest text-sand overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xl">
          <span className="text-sand/70 text-sm font-bold uppercase tracking-widest mb-2 block">Alojamientos</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Bungalows de Madera</h2>
          <p className="text-sand/80 text-lg leading-relaxed">
            Tu casita de madera finlandesa con vistas al mar. Despierta con el sonido de los pájaros y disfruta de la máxima comodidad en plena naturaleza.
          </p>
        </div>
        
        <div className="hidden md:flex gap-2">
          {/* Decorative lines or controls could go here */}
        </div>
      </div>

      {/* Horizontal Slider */}
      <div className="relative pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-[600px] h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden snap-center flex-shrink-0 group"
            >
              <Image 
                src={src} 
                alt={`Bungalow view ${index + 1}`} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {index === 0 && (
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex gap-4 mb-4">
                    {amenities.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        <item.icon size={14} />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Confort Rústico</h3>
                  <p className="text-white/80 text-sm max-w-md">Cocina equipada, terraza privada y todo lo necesario para desconectar.</p>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* CTA Card at the end */}
          <div className="min-w-[300px] md:min-w-[400px] h-[400px] md:h-[500px] bg-sand/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center snap-center flex-shrink-0 border border-sand/20 hover:bg-sand/20 transition-colors">
            <h3 className="text-3xl font-serif text-white mb-4">¿Te imaginas aquí?</h3>
            <p className="text-sand/80 mb-8">Reserva tu bungalow enviándonos un email.</p>
            <a 
              href="mailto:bungalows@campingmobydick.com" 
              className="bg-sand text-forest px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-colors flex items-center gap-2"
            >
              Consultar Disponibilidad <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
