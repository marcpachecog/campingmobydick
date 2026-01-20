"use strict";
"client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-forest text-sand py-24 relative overflow-hidden">
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image src="/images/camping-top.jpg" alt="" fill className="object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/50 to-forest pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Top Section: CTA & Identity */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-sand/10 pb-12">
          <div className="max-w-2xl">
            <Image
              src="/images/logo-mobydick.png"
              alt="Camping Moby Dick"
              width={180}
              height={70}
              className="h-16 w-auto object-contain mb-8 opacity-90"
            />
            <h2 className="text-4xl md:text-6xl font-serif leading-[0.9] text-white">
              El secreto mejor guardado <br />
              <span className="opacity-50 italic">de la Costa Brava.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm uppercase tracking-widest opacity-60">¿Listo para desconectar?</p>
            <a
              href="mailto:info@campingmobydick.com"
              className="bg-sand text-forest px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Reservar Ahora
            </a>
          </div>
        </div>

        {/* Main Grid: Info & Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20">

          {/* Column 1: Address */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Ubicación</h4>
            <address className="not-italic text-lg md:text-xl font-serif text-white leading-relaxed">
              Costa Verda 16-28<br />
              17210, Calella de Palafrugell<br />
              Girona, España
            </address>
            <a href="https://maps.google.com" target="_blank" className="inline-block text-xs uppercase tracking-wider border-b border-sand/30 pb-0.5 hover:text-white hover:border-white transition-all">
              Ver en Mapa
            </a>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Contacto</h4>
            <div className="flex flex-col gap-1">
              <a href="tel:+34972614307" className="text-lg md:text-xl font-serif text-white hover:opacity-70 transition-opacity">(+34) 972 61 43 07</a>
              <span className="text-xs opacity-50">Recepción</span>
            </div>
            <div className="flex flex-col gap-1">
              <a href="mailto:info@campingmobydick.com" className="text-lg md:text-xl font-serif text-white hover:opacity-70 transition-opacity">info@campingmobydick.com</a>
              <span className="text-xs opacity-50">Consultas Generales</span>
            </div>
          </div>

          {/* Column 3: Menu */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Explorar</h4>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a href="#camping" className="hover:text-white transition-colors flex items-center gap-2">El Camping</a>
              <a href="#alojamientos" className="hover:text-white transition-colors flex items-center gap-2">Alojamientos</a>
              <a href="#experiencias" className="hover:text-white transition-colors flex items-center gap-2">Experiencias</a>
              <a href="#faq" className="hover:text-white transition-colors flex items-center gap-2">Preguntas Frecuentes</a>
            </nav>
          </div>

          {/* Column 4: Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Social</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/campingmobydick/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/CampingMobyDick/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            </div>
            <div className="flex flex-col gap-2 text-xs opacity-50 pt-4 border-t border-sand/10">
              <a href="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30 border-t border-sand/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Camping Moby Dick</p>
          <p>Reg. Turisme KG-000059 - Costa Brava</p>
        </div>
      </div>
    </footer>
  );
}
