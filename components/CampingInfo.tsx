"use strict";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Utensils, MapPin } from "lucide-react";

export function CampingInfo() {

  return (
    <section id="camping" className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-clay text-sm font-bold uppercase tracking-widest mb-4 block">Descubre Moby Dick</span>
            <h2 className="text-5xl md:text-7xl font-serif text-forest leading-[1.1]">
              Tu refugio natural <br />
              <span className="text-forest/30 italic">en la Costa Brava.</span>
            </h2>
          </div>
          <p className="text-stone-600 text-lg max-w-sm leading-relaxed mb-2">
            Un antiguo bosque que conserva su carácter rústico. Combina la esencia del camping tradicional con el confort moderno.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[800px]">

          {/* Item 1: Situation (Big Square) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden group min-h-[400px]"
          >
            <Image
              src="/images/camping-02.jpg"
              alt="Ubicación Moby Dick"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full w-fit mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif mb-4">Ubicación Privilegiada</h3>
              <p className="text-white/80 max-w-md text-lg">A 3 minutos de la playa y 150m del mar. El equilibrio perfecto entre brisa marina y bosque.</p>
            </div>
          </motion.div>

          {/* Item 2: Pool (Small Vertical) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group min-h-[300px] bg-sky-100"
          >
            <Image
              src="/images/piscina-camping.jpg"
              alt="Piscina Ecológica"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-0 right-0 p-6">
              <div className="bg-white text-forest p-3 rounded-full shadow-lg">
                <Waves size={20} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Piscina Solar</h3>
              <p className="text-sm opacity-90">Agua salada climatizada.</p>
            </div>
          </motion.div>

          {/* Item 3: Restaurant (Small Vertical) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group min-h-[300px] bg-orange-50"
          >
            <Image
              src="/images/el-gust-del-mar.jpg"
              alt="Restaurante Moby Dick"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-0 right-0 p-6">
              <div className="bg-clay text-white p-3 rounded-full shadow-lg">
                <Utensils size={20} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Gastronomía</h3>
              <p className="text-sm opacity-90">Auténtico sabor mediterráneo.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
