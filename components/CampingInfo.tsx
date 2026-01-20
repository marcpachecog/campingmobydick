"use strict";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Utensils, MapPin } from "lucide-react";

export function CampingInfo() {
  const features = [
    {
      title: "Situación Inmejorable",
      description: "A solo 150 metros del mar y a 3 minutos de la playa. Nuestro camping es el mejor ubicado de Calella de Palafrugell, ofreciendo un equilibrio perfecto entre la brisa marina y la tranquilidad del bosque.",
      image: "/images/camping-02.jpg",
      icon: MapPin,
      align: "left",
    },
    {
      title: "Piscina Ecológica",
      description: "Relájate en nuestra piscina de agua salada, climatizada gracias a la energía solar. Un espacio sostenible pensado para el disfrute de mayores y pequeños en un entorno natural.",
      image: "/images/piscina-camping.jpg",
      icon: Waves,
      align: "right",
    },
    {
      title: "El Gust del Mar",
      description: "Saborea la auténtica cocina mediterránea en nuestro restaurante. Platos elaborados con productos de mercado, directamente del mar y la montaña a tu plato.",
      image: "/images/el-gust-del-mar.jpg",
      icon: Utensils,
      align: "left",
    },
  ];

  return (
    <section id="camping" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-clay text-sm font-bold uppercase tracking-widest mb-2 block">El Camping</span>
          <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Tu refugio natural en la Costa Brava</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Un antiguo bosque adaptado que conserva su carácter rústico y natural.
            Combina la esencia del camping tradicional con servicios modernos como Wifi gratuito,
            clases de yoga, y duchas de agua caliente.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-forest/10 translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                <div className="overflow-hidden rounded-xl shadow-xl relative h-[400px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sand text-forest mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-forest">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <a href="#contacto" className="inline-block text-clay font-bold uppercase tracking-wider text-sm hover:underline decoration-2 underline-offset-4">
                  Más información
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
