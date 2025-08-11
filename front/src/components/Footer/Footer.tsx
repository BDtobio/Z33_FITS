import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-6 w-full text-center mt-auto">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a href="https://wa.me/yourphonenumber" className="mx-4 text-2xl hover:text-green-500 transition-all">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/nightfallgroup_/" className="mx-4 text-2xl hover:text-pink-600 transition-all">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@yourusername" className="mx-4 text-2xl hover:text-purple-600 transition-all">
          <FaTiktok />
        </a>
        <a href="mailto:your@email.com" className="mx-4 text-2xl hover:text-blue-500 transition-all">
          <FaEnvelope />
        </a>
      </div>

      <p className="text-lg mb-4">
        Nightfall - Av. Diagonal, 123, 08004 Barcelona, España
      </p>

      <p>&copy; 2025 NIGHTFALL | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
