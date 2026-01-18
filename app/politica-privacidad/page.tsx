import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Header Spacer */}
      <div className="h-32 bg-forest" />

      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-forest mb-12 border-b border-stone-200 pb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-stone lg:prose-lg max-w-none text-stone-700 space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-forest mb-4">Política de Privacidad del Camping Moby Dick</h2>
            <p>
              El acceso y uso del sitio web https://www.campingmobydick.com/ (en adelante, “la Web”), atribuye la condición de usuario a su visitante, hecho que implica la total aceptación sin reservas por parte del usuario de las condiciones de uso vigentes en la Política de Privacidad de CAMPING MOBY DICK, S.L. (en adelante, “la Política de Privacidad”) de la Web de CAMPING MOBY DICK, S.L. en cada momento.
            </p>
            <p>
              CAMPING MOBY DICK, S.L. trabaja para ofrecerle a través de sus productos y servicios la mejor experiencia posible. Para ello, en algunos casos, es necesario recabar información para conseguirlo. Es importante la privacidad de las personas, tanto de los usuarios de la Web, como de cualesquiera otros afectados que proporcionan información a través de ésta.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-forest mb-4">Información básica sobre Protección de Datos:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-forest">1. – ¿Quién es el Responsable del tratamiento de sus datos?</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Denominación social: CAMPING MOBY DICK, S.L.</li>
                  <li>N.I.F.: B72892565.</li>
                  <li>Domicilio social: CALLE COSTA VERDE, 16, 17210 Palafrugell, Girona.</li>
                  <li>Teléfono: 972 61 43 07.</li>
                  <li>Correo electrónico: info@campingmobydick.com</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-forest mb-4">2.- ¿Qué datos personales recopilamos?</h3>
            <p>Recopilamos los datos personales que como usuario puede llegar a proporcionarnos, especialmente:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nombre, dirección y fecha de nacimiento.</li>
              <li>Número de teléfono y dirección de correo electrónico.</li>
              <li>Ubicación geográfica.</li>
              <li>Información relativa a pagos y devoluciones.</li>
              <li>Dirección IP, fecha y hora en la que has accedido a nuestros servicios.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-forest mb-4">3.- ¿Cuál es la finalidad del tratamiento de sus datos?</h3>
            <p>Tratamos la información con las siguientes finalidades:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gestionar las reservas y peticiones que el usuario realice a través de la Web.</li>
              <li>Gestionar el envío de información solicitada, incluyendo comunicaciones comerciales sobre noticias y promociones.</li>
              <li>Desarrollar y gestionar concursos o actividades promocionales.</li>
              <li>Acciones comerciales y mantenimiento de la relación con el usuario.</li>
              <li>Videovigilancia de las instalaciones para velar por la seguridad física.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-forest mb-4">4.- ¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
            <p>
              Las bases legales son la existencia de una relación precontractual y/o contractual, el interés legítimo de Camping MobyDick, y el consentimiento expreso del usuario en ciertos casos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-forest mb-4">5.- ¿Por cuánto tiempo conservaremos sus datos?</h3>
            <p>
              Los datos obtenidos serán conservados por el menor tiempo posible, que como mínimo será durante su relación con Camping MobyDick. Posteriormente se conservarán durante el plazo necesario para obligaciones legales.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-forest mb-4">6.- ¿Compartimos sus datos con terceros?</h3>
            <p>
              Camping MobyDick se compromete a nunca intercambiar ni proporcionar sus datos a terceros sin su consentimiento expreso, salvo proveedores necesarios para el servicio (Master Camping S.L., Cool'n Camp SAS, etc.).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-forest mb-4">7.- ¿Qué derechos le asisten y cómo ejercerlos?</h3>
            <p>Puede solicitar gratuitamente el derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad de sus datos enviando un email a info@campingmobydick.com.</p>
          </section>

          <div className="pt-12 border-t border-stone-200 text-xs text-stone-500">
            <p>Última modificación: 28/03/2024</p>
            <p>© CAMPING MOBY DICK, S.L. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
