"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Faq() {
    const faqs = [
        {
            question: "¿Cómo funciona la reserva?",
            answer: "Para mantener un trato personal y directo, gestionamos todas las reservas exclusivamente a través de coreo electrónico (info@campingmobydick.com). Cuéntanos tus fechas ideales y te buscaremos el mejor lugar.",
        },
        {
            question: "Check-in & Check-out",
            answer: "Los Bungalows están listos a partir de las 17:00h y deben dejarse libres antes de las 11:00h. Para las Parcelas de camping, el horario es flexible (consulta en recepción para llegadas tardías).",
        },
        {
            question: "Mascotas",
            answer: "¡Amamos a los animales! Son bienvenidos en todas las parcelas de camping (con correa y bajo supervisión). Sin embargo, para garantizar la máxima higiene y cuidado de los alojamientos de madera, no se permiten mascotas en los Bungalows.",
        },
        {
            question: "Sostenibilidad y Entorno",
            answer: "Cuidamos lo que amamos. Usamos energía solar para climatizar la piscina, vehículos eléctricos para el mantenimiento y productos ecológicos. El camping es un espacio libre de pesticidas químicos agresivos.",
        },
        {
            question: "Servicios Cercanos",
            answer: "Tienes todo a mano. Nuestro restaurante 'El Gust del Mar' ofrece gastronomía local dentro del recinto. Además, hay un supermercado completo a solo 100m de la entrada y el pueblo de Calella de Palafrugell a un paseo.",
        },
        {
            question: "Actividades Incluidas",
            answer: "En temporada alta (julio y agosto) ofrecemos clases de yoga y animación infantil los fines de semana. Todo incluido en tu estancia, porque tu bienestar es parte de la experiencia Moby Dick.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle aesthetic background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="mb-20">
                    <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] border border-forest/20 text-forest/60 rounded-full">
                        Dudas Frecuentes
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-forest leading-[0.9] mb-8">
                        Resolvemos <br />
                        <span className="opacity-50 italic">tu curiosidad.</span>
                    </h2>
                    <p className="text-stone-500 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                        Queremos que tu llegada sea tan plácida como tu estancia. Aquí tienes las respuestas a lo que más nos preguntan.
                    </p>
                </div>

                <div className="grid gap-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group transition-all duration-300 ${activeIndex === index ? 'bg-stone-50 rounded-2xl shadow-sm' : 'border-b border-stone-100 hover:bg-stone-50/50'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 md:px-10 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${activeIndex === index ? 'text-forest' : 'text-stone-500 group-hover:text-forest'}`}>
                                    {faq.question}
                                </span>

                                <span className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${activeIndex === index ? 'bg-forest border-forest text-sand rotate-180' : 'border-stone-200 text-stone-300 group-hover:border-forest/30 group-hover:text-forest'}`}>
                                    <ChevronDown size={14} strokeWidth={2} />
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-6 md:px-10 pb-6 pt-0">
                                            <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
