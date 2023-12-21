"use client"

import Image from "next/image";
import Link from "next/link";



export default function Checkout () {

  return (
    <>
      <div className="bg-[#302C42] pb-10">
      <section className="w-4/5 m-auto">
        <div className="container-sec1 flex justify-between">
          <div className="leftsec1">
            <div className="texts text-4xl font-semibold pt-10">
              <h1>
                <span className="t1">Escolha</span> a Sua Licença
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-4/5 m-auto pt-16 flex justify-between">
        <div className="w-1/3 p-4">
          <div className="bg-[#443F5B] h-[35vh] flex flex-col justify-evenly rounded-lg overflow-hidden">
            <Image
              src="/img/1mes.svg"
              width={300}
              height={200}
              alt="Licença de 1 Mês"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Licença de 1 Mês</h3>
              <p className="text-gray-100">
                Desfrute do BoostSync Optimizer por 1 mês. Atualizações mensais
                e suporte incluídos.
              </p>
              <p className="text-[#c0b7e8] font-bold text-lg">R$15,00</p>
              <Link href="https://buy.stripe.com/eVa14A3F09Yn2MEbII">
                <p className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-2 rounded-full mt-4">
                  Comprar Agora
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="bg-[#443F5B] h-[35vh] flex flex-col justify-evenly rounded-lg overflow-hidden">
            <Image
              src="/img/6meses.svg"
              width={300}
              height={200}
              alt="Licença de 6 Meses"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Licença de 6 Meses</h3>
              <p className="text-gray-100">
                Aproveite o BoostSync Optimizer por 6 meses. Mais economia e
                benefícios.
              </p>
              <p className="text-[#c0b7e8] font-bold text-lg">R$50,00</p>
              <Link href="https://buy.stripe.com/8wM5kQ1wSeeD86Y6op">
                <p className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-2 rounded-full mt-4">
                  Comprar Agora
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="bg-[#443F5B] h-[35vh] flex flex-col justify-evenly rounded-lg overflow-hidden">
            <Image
              src="/img/vitalicio.svg"
              width={300}
              height={200}
              alt="Licença Vitalícia"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Licença Vitalícia</h3>
              <p className="text-gray-100">
                Adquira a licença vitalícia para desfrutar do BoostSync
                Optimizer para sempre.
              </p>
              <p className="text-[#c0b7e8] font-bold text-lg">R$127,90</p>
              <Link href="https://buy.stripe.com/9AQcNi2AW3zZ5YQcMP">
                <p className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-2 rounded-full mt-4">
                  Comprar Agora
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
      
        
    </>
  );
};

