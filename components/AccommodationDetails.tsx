"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Home, Tent, Check, Info,
    Wifi, Waves, Utensils, ShoppingBag,
    WashingMachine, Gamepad2, Flower2,
    ParkingCircle, Flame, Dog, Zap, Trash2,
    Wind, Trophy, Mail, ArrowRight
} from "lucide-react";

const SHARED_SERVICES = [
    { name: "Wifi Gratis", icon: Wifi, desc: "Para que te mantengas conectado si lo deseas." },
    { name: "Piscina Solar", icon: Waves, desc: "De agua salada climatizada con placas solares." },
    { name: "Súper (100m)", icon: ShoppingBag, desc: "A 100 metros del camping y de camino al pueblo y playas." },
    { name: "Restaurante", icon: Utensils, desc: "Delicioso restaurante con terraza para saborear la gastronomía local." },
    { name: "Lavandería", icon: WashingMachine, desc: "Lavadoras de última generación." },
    { name: "Parque Infantil", icon: Wind, desc: "Para que los más pequeños se diviertan con seguridad." },
    { name: "Ping-Pong", icon: Trophy, desc: "Mesas de ping-pong y préstamo de palas gratuito." },
    { name: "Animación", icon: Gamepad2, desc: "Actividades semanales gratuitas (julio y agosto): manualidades, juegos..." },
    { name: "Yoga", icon: Flower2, desc: "Clases semanales gratuitas (julio y agosto) para relajarte y conectar." },
    { name: "Parking Privado", icon: ParkingCircle, desc: "Parking interno para que no tengas que preocuparte por tu vehículo." },
    { name: "Barbacoas", icon: Flame, desc: "Posibilidad de alquiler de barbacoa de gas para tus comidas." },
    { name: "WC Químico", icon: Trash2, desc: "Para el vaciado de aguas negras o grises." },
];

export function AccommodationDetails() {
    const [activeTab, setActiveTab] = useState<"bungalow" | "camping">("bungalow");
    const [currentBungalowImg, setCurrentBungalowImg] = useState(0);

    const bungalowImages = [
        "/images/bungalow-top.jpg",
        "/images/bungalow-01.jpg",
        "/images/bungalow-02.jpg",
        "/images/bungalow-03.jpg",
        "/images/bungalow-05.jpg",
    ];
    return (
        <section id="alojamientos" className="py-24 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-clay text-sm font-bold uppercase tracking-widest mb-2 block">Tu Estancia</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Alojamientos y Servicios</h2>

                    {/* Tab Switcher */}
                    <div className="inline-flex p-1 bg-stone-200 rounded-full mt-4">
                        <button
                            onClick={() => setActiveTab("bungalow")}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'bungalow' ? 'bg-forest text-sand shadow-lg' : 'text-stone-500 hover:text-forest'}`}
                        >
                            <Home size={18} /> Los Bungalows
                        </button>
                        <button
                            onClick={() => setActiveTab("camping")}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'camping' ? 'bg-forest text-sand shadow-lg' : 'text-stone-500 hover:text-forest'}`}
                        >
                            <Tent size={18} /> El Camping
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {activeTab === "bungalow" ? (
                            <motion.div
                                key="bungalow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl"
                            >
                                {/* Visual Side with Gallery */}
                                <div className="relative h-[400px] lg:h-auto overflow-hidden group bg-stone-200">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentBungalowImg}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={bungalowImages[currentBungalowImg]}
                                                alt="Bungalow Moby Dick"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Gallery Navigation Dots */}
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                                        {bungalowImages.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentBungalowImg(i)}
                                                className={`h-1.5 rounded-full transition-all shadow-sm ${currentBungalowImg === i ? 'bg-white w-6' : 'bg-white/50 w-2 hover:bg-white/80'}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Gallery Arrows */}
                                    <button
                                        onClick={() => setCurrentBungalowImg((prev) => (prev - 1 + bungalowImages.length) % bungalowImages.length)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ArrowRight className="rotate-180" size={20} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentBungalowImg((prev) => (prev + 1) % bungalowImages.length)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ArrowRight size={20} />
                                    </button>
                                </div>

                                {/* Content Side */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-6 border-b border-stone-100 pb-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-clay/10 text-clay px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-clay/20">
                                                Top Experience
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-serif text-forest leading-tight">
                                            Cabaña de Madera Finlandesa
                                        </h3>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-stone-700 mb-2">¡Tu casita con vistas al mar!</h4>
                                            <p className="text-stone-600 leading-relaxed font-light">
                                                Despierta con el sonido de los pajaritos en nuestro acogedor bungalow de 25m².
                                                Un refugio familiar a sólo 10min a pie de la playa. Incluye terraza privada, cocina equipada,
                                                salón con sofá cama y dos dormitorios (uno de ellos en un encantador altillo).
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-y-4">
                                            <div className="flex items-center gap-2 text-sm text-stone-700">
                                                <Zap size={16} className="text-clay" /> <span>Cocina Completa</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-stone-700">
                                                <ParkingCircle size={16} className="text-clay" /> <span>Parking Incluido</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-stone-700">
                                                <Wind size={16} className="text-clay" /> <span>Climatización (F/C)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-stone-700">
                                                <Dog size={16} className="text-stone-400 line-through" /> <span>No se admiten perros</span>
                                            </div>
                                        </div>

                                        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                            <h4 className="text-xs font-bold uppercase text-stone-400 tracking-widest mb-4 flex items-center gap-2">
                                                <Info size={14} /> Inventario Incluido
                                            </h4>
                                            <ul className="text-xs grid grid-cols-2 gap-2 text-stone-600">
                                                <li className="flex items-center gap-2"><Check size={12} className="text-green-600" /> Utensilios & Nevera</li>
                                                <li className="flex items-center gap-2"><Check size={12} className="text-green-600" /> Microondas & TV</li>
                                                <li className="flex items-center gap-2"><Check size={12} className="text-green-600" /> Cafetera Italiana</li>
                                                <li className="flex items-center gap-2"><Check size={12} className="text-green-600" /> Mantas (Temp. Baja)</li>
                                                <li className="flex items-center gap-2"><Check size={12} className="text-green-600" /> Baño Adaptado</li>
                                                <li className="flex items-center gap-2"><Check size={12} className="text-green-600" /> Terraza Vistas Mar</li>
                                            </ul>
                                        </div>

                                        <a href="mailto:bungalows@campingmobydick.com" className="flex items-center justify-center gap-3 w-full bg-forest text-sand py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-forest/90 transition-all shadow-lg shadow-forest/20">
                                            Consultar Disponibilidad <Mail size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="camping"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl"
                            >
                                {/* Visual Side */}
                                <div className="relative h-[400px] lg:h-auto overflow-hidden bg-stone-200">
                                    <Image src="/images/camping-02.jpg" alt="Acampada Moby Dick" fill className="object-cover" />
                                </div>

                                {/* Content Side */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-6 border-b border-stone-100 pb-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-forest/10 text-forest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-forest/20">
                                                Naturaleza Pura
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-serif text-forest leading-tight">
                                            Parcelas para Tienda y Camper
                                        </h3>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-stone-700 mb-2">La esencia del camping tradicional</h4>
                                            <p className="text-stone-600 leading-relaxed font-light">
                                                Disfruta de la tranquilidad del Baix Empordà en parcelas sombreadas bajo nuestro bosque de pinos y encinas.
                                                A pocos metros de la playa, disponemos de todo lo necesario para tu aventura al aire libre.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4 p-4 bg-forest/5 rounded-xl border border-forest/10">
                                                <Zap className="text-forest mt-1" size={20} />
                                                <div>
                                                    <h4 className="font-bold text-forest text-sm">Puntos de Electricidad</h4>
                                                    <p className="text-xs text-stone-600">Alquiler de hasta 1300W. (Prohibido superar esta potencia)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                                                <Dog className="text-clay mt-1" size={20} />
                                                <div>
                                                    <h4 className="font-bold text-stone-700 text-sm">Mascotas Permitidas</h4>
                                                    <p className="text-xs text-stone-600">Perros bienvenidos siempre bajo supervisión y atados.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
                                                <Check size={14} className="text-green-600" /> Duchas Agua Caliente
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
                                                <Check size={14} className="text-green-600" /> Vaciado Aguas Grises
                                            </div>
                                        </div>

                                        <a href="mailto:info@campingmobydick.com" className="flex items-center justify-center gap-3 w-full bg-forest text-sand py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-forest/90 transition-all shadow-lg shadow-forest/20">
                                            Reservar Parcela <Mail size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Denser Shared Services Bar */}
                    <div className="mt-12 bg-forest rounded-3xl p-8 lg:p-12 text-sand">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-serif text-white mb-2">Servicios e Instalaciones</h3>
                                <p className="text-sand/70 text-sm">Todo lo que necesitas para tu día a día en el camping</p>
                            </div>
                            <a href="#contacto" className="text-xs font-bold uppercase tracking-widest border-b border-clay pb-1 hover:text-white transition-colors">
                                Ver ubicación y contacto
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {SHARED_SERVICES.map((s, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="w-10 h-10 rounded-xl bg-sand/10 flex items-center justify-center shrink-0 group-hover:bg-clay/20 transition-colors">
                                        <s.icon size={18} className="text-sand" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-1">{s.name}</h4>
                                        <p className="text-[10px] text-sand/60 leading-tight line-clamp-2 group-hover:line-clamp-none transition-all">
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
