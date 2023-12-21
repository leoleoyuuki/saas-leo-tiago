import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function home() {
  const benefits = [
    {
      id: 1,
      title: "Grande Custo Benefício",
      description:
        "Tenha um desempenho excepcional sem comprometer seu orçamento.",
      image: "/img/custo-beneficio.jpg",
    },
    {
      id: 2,
      title: "Mais FPS nos Jogos",
      description:
        "Experimente jogos mais suaves e aproveite uma experiência de jogo superior.",
      image: "/img/mais-fps.jpg",
    },
    {
      id: 3,
      title: "Menos Input Lag",
      description:
        "Reduza a latência para reações mais rápidas e precisas durante o jogo.",
      image: "/img/menos-input.jpg",
    },
    {
      id: 4,
      title: "Mais Estabilidade Sem Drops",
      description:
        "Desfrute de uma jogabilidade estável sem quedas de desempenho inesperadas.",
      image: "/img/mais-estavel.jpg",
    },
  ];
  return (
    <div className="bg-[#302C42]">
      <section className="w-4/5 m-auto">
        {" "}
        {/*section 1*/}
        <div className="container-sec1 flex justify-between">
          <div className="leftsec1">
            <div className="texts text-4xl font-semibold pt-24">
              <h1>
                <span className="t1">Ganhe</span> uma Experiência de jogo
              </h1>
              <h1>
                Como De <span className="t2">Profissionais</span>
              </h1>
            </div>
            <div className="subtitle">
              <p className="text-white w-[54rem] py-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis harum modi numquam vero assumenda. Adipisci dicta
                repudiandae non reiciendis voluptates eveniet placeat libero,
                molestias tenetur iure rem consequuntur aperiam consectetur
                neque magnam nisi laboriosam nostrum earum?
              </p>
            </div>
            <div className="flex items-center gap-7">
              <Link
                href="/checkout"
                className="cta text-[#343045] px-6 py-4 text-xs font-bold"
              >
                GARANTA SEU DESEMPENHO
              </Link>
              <FaArrowRightLong size={36} color="#c0b7e8" />
            </div>
          </div>
          <Image
            className="pt-[4.6rem]"
            src="/img/imgsec1.svg"
            width={424}
            height={0}
            alt="GAMER"
          />
        </div>
      </section>

      <section className="pt-28">
        {/*section 2*/}
        <div className="w-4/5 sec2 m-auto flex justify-center gap-10 items-center text-white rounded-full py-12">
          <div className="flex items-center gap-4">
            <div>
              <FaDiscord color="#fff" size={40} />
            </div>

            <div>
              <h1 className="font-bold text-lg">Conheça o Discord</h1>
              <p className="font- font-light">
                Entre no nosso servidor para mais informações
              </p>
            </div>
          </div>
          <div className="text-[2.4rem] font-light">|</div>
          <div className="flex items-center gap-4">
            <div>
              <IoIosMail color="#fff" size={40} />
            </div>

            <div>
              <h1 className="font-bold text-lg">Envie-nos um Email</h1>
              <p className="font- font-light">
                Caso preferir nos chamar pelo Email é só chamar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/*section 3*/}
        <div className="w-4/5 m-auto pt-9 flex justify-between">
          <div className="flex items-center gap-5 w-auto">
            {/*left*/}
            <div className="text-white">
              <h1 className="font-bold text-4xl">Introduzindo</h1>
              <p className="font-light text-4xl">BoostSync Optimizer</p>
            </div>
            <Image
              className="pt-12"
              src="/img/arrow.svg"
              width={160}
              height={0}
              alt=">"
            />
          </div>
          {/*left*/}

          <div className=" w-2/4">
            {/*right*/}
            <p className="text-white text-base font-light">
              Bem-vindo ao BoostSync Optimizer v1! Atualizações mensais entre os
              dias 1 e 4, cada chave de ativação é exclusiva para um computador
              por um mês. Planos mensais disponíveis, além do anual. Suporte via
              tickets para problemas e sugestões de otimização.
            </p>
          </div>
          {/*right1*/}
        </div>

        <div className="w-4/5 m-auto pt-16 flex justify-between items-center">
          <Image
            className="rounded-[50px] rounded-tl-[140px] rounded-br-[140px] lg:rounded-[100px] lg:rounded-tl-[240px] lg:rounded-br-[240px]"
            src={"/img/testimg.svg"}
            width={504}
            height={0}
            alt="Optimier"
          />

          <div className="w-5/12 flex flex-col gap-10">
            <p className="text-white ">
              Bem-vindo ao BoostSync Optimizer v1! Atualizações mensais entre os
              dias 1 e 4, cada chave de ativação é exclusiva para um computador
              por um mês. Planos mensais disponíveis, além do anual. Suporte via
              tickets para problemas e sugestões de otimização. Relate bugs ou
              simplesmente converse conosco abrindo um ticket. Estamos aqui para
              ajudar e melhorar sua experiência!Bem-vindo ao BoostSync Optimizer
              v1! Atualizações mensais entre os dias 1 e 4, cada chave de
              ativação é exclusiva para um computador por um mês.{" "}
            </p>
            <Link
              href={"/checkout"}
              className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-4 rounded-full m-auto"
            >
              Quero Aproveitar o Preço
            </Link>
          </div>
        </div>
      </section>

      <section>
        {/*section 4*/}

        <div className="w-4/5 m-auto pt-16 flex justify-between">
          <div>
            {/*left*/}
            <div>
              <div className="text-white text-4xl">
                <h1 className="font-bold">Por que usar</h1>
                <h1 className="font-light">BoostSync?</h1>
              </div>
            </div>
            <Image
              className="pt-8"
              src={"/img/arrow.svg"}
              width={160}
              height={0}
              alt=">"
            />
          </div>
          {/*left*/}

          <div className=" w-6/12">
            {/*right*/}
            <p className="text-white">
              Bem-vindo ao BoostSync Optimizer v1! Atualizações mensais entre os
              dias 1 e 4, cada chave de ativação é exclusiva para um computador
              por um mês. Planos mensais disponíveis, além do anual.Bem-vindo ao
              BoostSync Optimizer v1! Atualizações mensais entre os dias 1 e 4,
              cada chave de ativação é exclusiva para um computador por um mês.
              Planos mensais disponíveis
            </p>
          </div>
          {/*right*/}
        </div>

        <div className="bg-[#302C42] flex justify-center mt-8 p-8 rounded-lg shadow-lg relative">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#443F5B] to-[#8B86B5]"></div>
          <div className="border-4 border-[#6B68A1] rounded-lg overflow-hidden relative">
            <div className="bg-[#443F5B] p-4">
              <h2 className="text-white text-2xl font-bold">
                Vantagens BoostSync
              </h2>
            </div>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: "translateX(0%)" }}
              >
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="w-full p-4">
                    <div className="bg-black flex flex-col items-center sec2 rounded-lg overflow-hidden">
                      <Image
                        src={benefit.image}
                        width={300}
                        height={200}
                        alt={benefit.title}
                      />
                      <div className="p-4">
                        <h3 className="text-xl text-gray-500 font-bold">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-100">{benefit.description}</p>
                        <div className="flex justify-center p-12">
                          <Link
                            href={"/checkout"}
                            className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-4 rounded-full m-auto"
                          >
                            Quero Aproveitar as Vantagens
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#443F5B] p-4 text-white text-center font-bold"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#8B86B5] to-[#443F5B]"></div>
        </div>
      </section>
      {/*section 4*/}
    </div>
  );
}
