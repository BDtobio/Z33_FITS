"use client";
import React, { useState } from 'react';

const InfoPay: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tu consulta ha sido enviada. ¡Gracias!');
    // Aquí puedes manejar el envío del formulario, como llamando a una API o haciendo un POST.
  };

  return (
    <div className="p-6 bg-white font-sans max-w-screen-lg mx-auto pt-24"> {/* Div principal blanco */}
      <h1 className="text-3xl font-bold text-center text-black mb-6 mt-24">Información sobre Pagos y Política de Intercambio</h1>

      {/* Sección de métodos de pago */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Métodos de Pago</h2>
        <p className="text-gray-700 mb-4">En nuestra tienda Y2K ofrecemos los siguientes métodos de pago:</p>
        <ul className="list-disc pl-5 space-y-3 text-gray-600">
          <li><strong className="font-medium text-red-600">Efectivo:</strong> Puedes pagar en efectivo en nuestra tienda física.</li>
          <li><strong className="font-medium text-red-600">Transferencia Bancaria:</strong> Realiza una transferencia a nuestra cuenta bancaria. Asegúrate de enviar el comprobante de pago a nuestro correo electrónico.</li>
        </ul>
      </section>
      
      {/* Sección de intercambio de productos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Intercambios de Productos (Trades)</h2>
        <p className="text-gray-700 mb-4">En Y2K, sabemos que a veces lo que tienes no es exactamente lo que buscas. Por eso, ofrecemos un sistema de intercambios:</p>
        <ul className="list-disc pl-5 space-y-3 text-gray-600">
          <li>Solo aceptamos intercambios por productos dentro de la misma categoría (por ejemplo, ropa por ropa, accesorios por accesorios).</li>
          <li>Los productos deben estar en buen estado y sin uso excesivo.</li>
          <li>Los intercambios se pueden realizar dentro de los primeros 30 días después de la compra.</li>
        </ul>
      </section>

      {/* Sección de política de devoluciones */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Política de Devoluciones</h2>
        <p className="text-gray-700 mb-4">Si no estás completamente satisfecho con tu compra, puedes devolver los productos dentro de los primeros 14 días después de la compra. Aquí te explicamos cómo:</p>
        <ul className="list-disc pl-5 space-y-3 text-gray-600">
          <li>El producto debe estar en su estado original (sin uso y con etiquetas).</li>
          <li>Se puede hacer la devolución en nuestra tienda física o enviando el producto por correo.</li>
          <li>La devolución será procesada y se te reembolsará en el mismo método de pago utilizado, con excepción del envío.</li>
        </ul>
      </section>

      {/* Sección de formulario de consulta */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Consulta sobre Pagos</h2>
        <p className="text-gray-700 mb-4">Si tienes alguna duda o consulta importante sobre nuestros métodos de pago, por favor completa el siguiente formulario:</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Tu Consulta</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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

      {/* Sección de enlace de WhatsApp */}
      <section>
        <h2 className="text-2xl font-semibold text-black mb-4">¿Prefieres contactarnos por WhatsApp?</h2>
        <p className="text-gray-700 mb-4">Si prefieres, puedes unirte a nuestro grupo de WhatsApp para recibir asistencia directa:</p>
        <a
          href="https://wa.me/1234567890" // Cambiar por el enlace real de WhatsApp
          className="text-red-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Únete al grupo de WhatsApp
        </a>
      </section>
    </div>
  );
};

export default InfoPay;
