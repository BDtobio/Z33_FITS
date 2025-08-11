"use client";
import Image from 'next/image'; // Para cargar imágenes
import { useState, useEffect } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Aquí podrías agregar lógica si necesitas algo extra al cargar la página
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tu mensaje ha sido enviado. ¡Gracias!');
    // Aquí puedes manejar el envío del formulario, como llamando a una API o haciendo un POST.
  };

  return (
    <div className="w-full p-4 pt-32 bg-white text-white"> 
      <div className="flex flex-col items-center justify-center mb-8 w-full text-center">
  <div className="mb-6"> 
    <div className="text-4xl font-bold text-red-600 mb-6"> 
      Z-33fits
    </div>
    <Image src="/images/qr.png" alt="QR Code" width={250} height={250} /> 
  </div>

  <p className="text-red-600 text-2xl font-semibold"> 
    Comparte este código y hagamos crecer esta shit!
  </p>
</div>


      <div className="mb-8 w-full"> {/* Aseguramos que ocupe todo el ancho */}
        <h2 className="text-xl font-semibold mb-4 text-red-600">Punto de Encuentro</h2> {/* Título rojo */}
       <div className="h-64 w-full bg-gray-800 rounded-lg overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.204128545188!2d-65.204223764111!3d-26.825586781757018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c10b319b1a9%3A0x9b2ac535ac6b6d4d!2sMcDonald&#39;s!5e0!3m2!1ses!2sar!4v1741147920261!5m2!1ses!2sar"
    width="100%"
    height="450"
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

      </div>

      {/* Formulario de contacto */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Contáctanos</h2> {/* Título blanco */}
        <p className="text-white mb-4">Si tienes alguna pregunta o consulta, no dudes en enviarnos un mensaje.</p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">Tu Consulta</label> {/* Etiqueta blanca */}
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black" 
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" 
          >
            Enviar Consulta
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
