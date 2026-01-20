"use strict";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Experiences() {
  const experiences = [
    {
      title: "Camino de Ronda",
      category: "Naturaleza",
      image: "/images/1-camino-ronda.jpg",
      description: "Recorre el sendero litoral que conecta calas secretas y paisajes impresionantes."
    },
    {
      title: "Kayak y Mar",
      category: "Aventura",
      image: "/images/5-kayak.jpg",
      description: "Descubre cuevas inaccesibles y las Islas Formigues desde el mar."
    },
    {
      title: "Gastronomía Local",
      category: "Cultura",
      image: "/images/7-rica-gastronomia.jpg",
      description: "Saborea los productos del Empordà: gambas de Palamós, vinos y cocina de mar y montaña."
    },
    {
      title: "Pueblos Medievales",
      category: "Historia",
      image: "/images/6-pueblos-medievales.jpg",
      description: "Viaja en el tiempo visitando Pals, Peratallada y los encantos del Baix Empordà."
    }
  ];

  return (
    <section id="experiencias" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-clay text-sm font-bold uppercase tracking-widest mb-4 block">El Entorno</span>
          <h2 className="text-5xl md:text-7xl font-serif text-forest mb-8 leading-tight">
            Mucho más que <br />
            <span className="italic text-forest/40">sol y playa.</span>
          </h2>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Calella de Palafrugell es cultura, deporte y tradición. <br className="hidden md:block" />
            Descubre la auténtica esencia de la Costa Brava.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-0 md:translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-wider text-sand mb-2 block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">{exp.category}</span>
                <h3 className="text-2xl font-serif mb-2">{exp.title}</h3>
                <p className="text-white/80 text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-3">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
