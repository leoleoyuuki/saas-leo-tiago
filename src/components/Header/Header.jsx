  import Link from "next/link";
  import Image from "next/image";

  export default function Header() {
    return (
      <div className="bg-[#302C42]">
        <header className="h-[11rem] items-center md:justify-between md:m-auto  md:w-4/5 md:flex">
          
            <Link className="logo" href={"/"}>
              <div >
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
                href="/archive/boostsync.exe" download
                className="flex items-center px-8 py-4 mr-8 text-xs text-white uppercase border-2 border-white rounded-full font-semibold download"
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
