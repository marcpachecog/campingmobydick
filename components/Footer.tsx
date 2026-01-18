"use strict";
"use client";

import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-sand/60 py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
             <Image 
               src="/images/logo-mobydick.png" 
               alt="Camping Moby Dick" 
               width={120}
               height={48}
               className="h-12 w-auto object-contain mb-6 invert brightness-0 grayscale opacity-80"
             />
             <p className="text-sm leading-relaxed">
               Costa Verda 16-28<br />
               17210, Calella de Palafrugell<br />
               Girona – Costa Brava – España
             </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Recepción</span>
                <a href="tel:+34972614307" className="hover:text-white transition-colors">(+34) 972 61 43 07</a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Email General</span>
                <a href="mailto:info@campingmobydick.com" className="hover:text-white transition-colors">info@campingmobydick.com</a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider mb-1 opacity-50">Email Bungalows</span>
                <a href="mailto:bungalows@campingmobydick.com" className="hover:text-white transition-colors">bungalows@campingmobydick.com</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explora</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#camping" className="hover:text-white transition-colors">El Camping</a></li>
              <li><a href="#bungalows" className="hover:text-white transition-colors">Bungalows</a></li>
              <li><a href="#experiencias" className="hover:text-white transition-colors">Experiencias</a></li>
              <li><a href="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/campingmobydick/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/CampingMobyDick/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Camping Moby Dick. Todos los derechos reservados.</p>
          <p>Registro de Turisme KG-000059</p>
        </div>
      </div>
    </footer>
  );
}
