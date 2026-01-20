"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function Faq() {
    const faqs = [
        {
            question: "¿Cómo puedo realizar una reserva?",
            answer: "La reserva únicamente se puede realizar por correo electrónico escribiéndonos a info@campingmobydick.com. En el caso de los bungalows, puedes indicar tus preferencias, aunque no garantizamos un número de bungalow específico.",
        },
        {
            question: "¿Cuál es el horario de check-in y check-out?",
            answer: "Para los bungalows, el check-in es a partir de las 17:00h y el check-out debe realizarse antes de las 11:00h. Para parcelas de camping, consulta nuestro horario en recepción.",
        },
        {
            question: "¿Se admiten mascotas en el camping?",
            answer: "Sí, las mascotas son bienvenidas en las parcelas de camping y disponemos de duchas adaptadas para ellas. Sin embargo, por razones de higiene, NO se permiten mascotas en los bungalows.",
        },
        {
            question: "¿Qué medidas de sostenibilidad aplica el camping?",
            answer: "Estamos comprometidos con el medio ambiente: nuestra piscina es de agua salada y climatizada con energía solar, realizamos recogida selectiva de residuos, usamos pesticidas naturales y disponemos de vehículos eléctricos internos.",
        },
        {
            question: "¿Hay supermercado o restaurantes cerca?",
            answer: "Dentro del camping disponemos del restaurante 'El Gust del Mar'. Además, hay un supermercado a tan solo 100 metros de la entrada principal.",
        },
        {
            question: "¿Las clases de yoga y actividades son de pago?",
            answer: "No, las clases de yoga y las actividades de animación los sábados (en julio y agosto) son totalmente gratuitas para todos nuestros huéspedes.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-clay text-sm font-bold uppercase tracking-widest mb-2 block">Ayuda</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Preguntas Frecuentes</h2>
                    <p className="text-stone-600 text-lg">
                        Todo lo que necesitas saber para preparar tu estancia con nosotros.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-stone-200 rounded-2xl bg-white overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeIndex === index ? 'bg-clay text-white' : 'bg-stone-100 text-stone-500'}`}>
                                        <HelpCircle size={18} />
                                    </div>
                                    <span className="text-lg font-bold text-forest">{faq.question}</span>
                                </div>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-stone-400"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-6 pt-0 ml-12 text-stone-600 leading-relaxed">
                                            {faq.answer}
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
