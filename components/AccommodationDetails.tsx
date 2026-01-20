"use strict";
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Home, Tent, Check,
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

                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        {activeTab === "bungalow" ? (
                            <motion.div
                                key="bungalow"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                            >
                                {/* Visual Side with Gallery (Larger share) */}
                                <div className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl group shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentBungalowImg}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.7 }}
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

                                    {/* Glassy Controls */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="flex gap-2">
                                            {bungalowImages.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setCurrentBungalowImg(i)}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${currentBungalowImg === i ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/80'}`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setCurrentBungalowImg((prev) => (prev - 1 + bungalowImages.length) % bungalowImages.length)}
                                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-forest transition-all"
                                            >
                                                <ArrowRight className="rotate-180" size={18} />
                                            </button>
                                            <button
                                                onClick={() => setCurrentBungalowImg((prev) => (prev + 1) % bungalowImages.length)}
                                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-forest transition-all"
                                            >
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side (Refined & Luxury) */}
                                <div className="lg:col-span-5 flex flex-col justify-center h-full px-2 lg:px-6 py-4">
                                    <div className="mb-8">
                                        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] border border-clay text-clay rounded-full">
                                            Top Experience
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-serif text-forest leading-[1.1] mb-6">
                                            Cabaña Finlandesa <br />
                                            <span className="text-forest/40 italic">de Madera.</span>
                                        </h3>
                                        <p className="text-stone-600 leading-relaxed font-light text-lg">
                                            Tu propio refugio de 25m² integrado en el bosque. <br />
                                            Despierta con el sonido de las olas y disfruta de un desayuno en tu terraza privada con vistas al mar.
                                        </p>
                                    </div>

                                    {/* Elegant Specs Grid */}
                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 border-y border-stone-200 py-8">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Capacidad</span>
                                            <span className="font-serif text-xl text-forest">4-5 Personas</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Distribución</span>
                                            <span className="font-serif text-xl text-forest">2 Habitaciones + Altillo</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Exterior</span>
                                            <span className="font-serif text-xl text-forest">Terraza Privada</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Extras</span>
                                            <div className="flex gap-2 text-stone-600">
                                                <Zap size={18} className="text-clay" />
                                                <ParkingCircle size={18} className="text-clay" />
                                                <Wind size={18} className="text-clay" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500 font-medium uppercase tracking-wider">
                                            <span className="flex items-center gap-1"><Check size={14} className="text-clay" /> Cocina Equipada</span>
                                            <span className="flex items-center gap-1"><Check size={14} className="text-clay" /> Baño Completo</span>
                                            <span className="flex items-center gap-1"><Check size={14} className="text-clay" /> TV & Wifi</span>
                                            <span className="flex items-center gap-1"><Check size={14} className="text-clay" /> Ropa de cama</span>
                                        </div>

                                        <a
                                            href="mailto:bungalows@campingmobydick.com"
                                            className="group relative flex items-center justify-between w-full bg-forest text-sand px-8 py-5 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                        >
                                            <span className="relative z-10 text-sm font-bold uppercase tracking-widest group-hover:pl-2 transition-all">Solicitar Reserva</span>
                                            <span className="relative z-10 bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-forest transition-all">
                                                <Mail size={18} />
                                            </span>
                                        </a>
                                        <p className="text-center text-xs text-stone-400 italic">
                                            * Reservas exclusivamente vía email.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="camping"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                            >
                                {/* Visual Side (Larger) */}
                                <div className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl group shadow-2xl bg-stone-200">
                                    <Image src="/images/camping-02.jpg" alt="Acampada Moby Dick" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-5 flex flex-col justify-center h-full px-2 lg:px-6 py-4">
                                    <div className="mb-8">
                                        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] border border-forest/30 text-forest/70 rounded-full">
                                            Naturaleza Pura
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-serif text-forest leading-[1.1] mb-6">
                                            Parcela <br />
                                            <span className="text-forest/40 italic">Tienda & Camper.</span>
                                        </h3>
                                        <p className="text-stone-600 leading-relaxed font-light text-lg">
                                            La esencia del camping auténtico. Parcelas sombreadas bajo pinos centenarios, <br />
                                            donde el único ruido es la brisa y el mar.
                                        </p>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 border-y border-stone-200 py-8">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Sombra</span>
                                            <span className="font-serif text-xl text-forest">Natural (Pinares)</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Suelo</span>
                                            <span className="font-serif text-xl text-forest">Tierra Compacta</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Electricidad</span>
                                            <span className="font-serif text-xl text-forest">6A - 10A (Opcional)</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-widest text-stone-400">Mascotas</span>
                                            <div className="flex gap-2 text-stone-600 items-center">
                                                <Dog size={18} className="text-forest" />
                                                <span className="text-sm font-medium">Permitidas</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 mb-2">
                                            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Instalaciones Incluidas</h5>
                                            <div className="flex flex-wrap gap-4 text-sm font-medium text-stone-600">
                                                <span className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Duchas Calientes</span>
                                                <span className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Wifi Zone</span>
                                                <span className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Vaciado Aguas</span>
                                            </div>
                                        </div>

                                        <a
                                            href="mailto:info@campingmobydick.com"
                                            className="group relative flex items-center justify-between w-full bg-forest text-sand px-8 py-5 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                        >
                                            <span className="relative z-10 text-sm font-bold uppercase tracking-widest group-hover:pl-2 transition-all">Reservar Parcela</span>
                                            <span className="relative z-10 bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-forest transition-all">
                                                <Mail size={18} />
                                            </span>
                                        </a>
                                        <p className="text-center text-xs text-stone-400 italic">
                                            * Reservas exclusivamente vía email.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Services Section Redesign */}
                    <div className="mt-24 pt-12 border-t border-stone-200">
                        <div className="text-center mb-16">
                            <span className="text-clay text-sm font-bold uppercase tracking-widest mb-4 block">Confort & Servicios</span>
                            <h3 className="text-4xl md:text-5xl font-serif text-forest mb-4">Todo lo indispensable</h3>
                            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                                Porque acampar no significa renunciar a la comodidad.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
                            {SHARED_SERVICES.map((s, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-forest/5 text-forest flex items-center justify-center mb-3 md:mb-6 group-hover:bg-forest group-hover:text-sand transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
                                        <s.icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                                    </div>
                                    <h4 className="text-sm md:text-lg font-bold text-forest mb-2 md:mb-3 font-serif">{s.name}</h4>
                                    <p className="text-xs md:text-sm text-stone-600 leading-relaxed max-w-[200px] hidden md:block">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
