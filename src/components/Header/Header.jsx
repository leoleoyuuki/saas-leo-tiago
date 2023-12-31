import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#302C42]">
      <header className=" flex justify-between w-[81%] m-auto h-[12rem] items-center">
        <Link href={"/"}>
          <div className="logo">
            <Image
              src="/img/logoboostsync.svg"
              width={307}
              height={0}
              alt="logo BoostSync"
            />
          </div>
        </Link>

        <nav>
          <ul className="flex w-auto beneficios text-white font-semibold text">
            <li className="px-4">+estabilidade</li>
            <li className="px-4">+fps</li>
            <li className="px-4">-inputlag</li>
          </ul>
        </nav>

        <nav className="">
          <ul className="flex justify-between ">
            <a
              href="/img/1mes.svg" download
              className="flex items-center px-8 py-4 mr-8 text-xs text-white uppercase border-2 border-white rounded-full font-semibold"
            >
              DOWNLOAD
            </a>

            <Link
              href="https://discord.gg/ufEvyf5d"
              className="flex items-center uppercase text-[#343045] btn text-xs px-9 py-4 rounded-full font-semibold"
            >
              JOIN DISCORD
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
