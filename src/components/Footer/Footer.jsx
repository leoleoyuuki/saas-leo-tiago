import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="w-full h-36 bg-[#6b3fa9] flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-[#6b3fa9] to-[#000] ">
      <h1 className="text-gray-300">
        2023 BoostSync - Todos os direitos reservados&copy;
      </h1>
      <nav>
          <ul className="text-white text-lg flex gap-10 [text-shadow:_3px_3px_8px_rgb(255_255_255_/_50%)]">
            <li>
              <Link
                className="flex justify-center items-center gap-2 px-2 py-1"
                href={"/"}
              >
                <BsFillTelephoneFill />
                Contato
              </Link>
            </li>

            <li>
              <Link
                className="flex justify-center items-center gap-2  px-2 py-1"
                href={"/"}
              >
                <FaDiscord /> Discord
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}