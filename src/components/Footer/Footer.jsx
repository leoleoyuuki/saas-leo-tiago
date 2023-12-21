import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#302C42] text-white py-12 border-t-2 border-[#443F5B]">
      <div className="w-4/5 m-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Entre em Contato</h3>
          <p>Email: contato@boostsync.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
          <ul>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-bold mb-4">Receba Novidades</h3>
          <p>Inscreva-se para receber atualizações e ofertas exclusivas.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border text-[#443f5b] border-white rounded focus:outline-2"
            />
            <button
              type="submit"
              className="bg-[#443F5B] text-white px-4 py-2 mt-2 rounded hover:bg-[#8B86B5] transition duration-300"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; 2023 BoostSync. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
