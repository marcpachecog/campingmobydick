"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
    { src: "/images/camping-top.jpg", alt: "Vista aérea del camping", size: "large" },
    { src: "/images/camping-02.jpg", alt: "Entorno natural", size: "small" },
    { src: "/images/piscina-camping.jpg", alt: "Piscina de agua salada", size: "small" },
    { src: "/images/el-gust-del-mar.jpg", alt: "Restaurante El Gust del Mar", size: "medium" },
    { src: "/images/bungalow-top.jpg", alt: "Bungalows de madera", size: "medium" },
    { src: "/images/1-camino-ronda.jpg", alt: "Camino de Ronda", size: "small" },
    { src: "/images/5-kayak.jpg", alt: "Kayak en la Costa Brava", size: "small" },
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

    return (
        <section id="galeria" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-clay text-sm font-bold uppercase tracking-widest mb-2 block">Galería</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Captura de momentos</h2>
                    <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                        Un vistazo a la vida en Moby Dick. Naturaleza, descanso y aventura en un entorno privilegiado.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.size === 'large' ? 'col-span-2 row-span-2' :
                                img.size === 'medium' ? 'col-span-2' : ''
                                }`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-forest/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium px-4 py-2 border border-white rounded-full backdrop-blur-sm bg-black/20 md:bg-transparent">
                                    Ampliar
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl h-full max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute -bottom-12 left-0 right-0 text-center">
                                <p className="text-white text-lg font-serif">{selectedImage.alt}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
