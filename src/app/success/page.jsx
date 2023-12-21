import Image from 'next/image';
import Link from 'next/link';

export default function Success() {
  return (
    <div className="bg-[#302C42]">
      <section className="w-4/5 m-auto pt-16">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Obrigado pela sua compra!</h1>
          <p className="text-lg mt-4">
            Sua licença foi gerada com sucesso. Aproveite ao máximo o BoostSync Optimizer!
          </p>
        </div>
      </section>

      <section className="w-4/5 m-auto pt-16 flex justify-between items-center">
        <Image
          className="rounded-[50px] rounded-tl-[140px] rounded-br-[140px] lg:rounded-[100px] lg:rounded-tl-[240px] lg:rounded-br-[240px]"
          src="/img/testimg.svg"
          width={504}
          height={0}
          alt="Optimier"
        />

        <div className="w-5/12 flex flex-col gap-10">
          <p className="text-white">
            Bem-vindo ao BoostSync Optimizer v1! Atualizações mensais entre os dias 1 e 4, cada chave de ativação é exclusiva para um computador por um mês. Planos mensais disponíveis, além do anual. Suporte via tickets para problemas e sugestões de otimização. Relate bugs ou simplesmente converse conosco abrindo um ticket. Estamos aqui para ajudar e melhorar sua experiência!
          </p>
          <a
            href="/img/1mes.svg" download
            className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-4 rounded-full m-auto"
          >
            FAZER O DOWNLOAD DO APP BOOSTSYNC
          </a>
        </div>
      </section>

      <section className="w-4/5 m-auto pt-16 flex justify-between">
        <div>
          <div className="text-white text-4xl">
            <h1 className="font-bold">Por que usar</h1>
            <h1 className="font-light">BoostSync?</h1>
          </div>
        </div>
        <div className="w-6/12">
          <p className="text-white">
            Bem-vindo ao BoostSync Optimizer v1! Atualizações mensais entre os dias 1 e 4, cada chave de ativação é exclusiva para um computador por um mês. Planos mensais disponíveis, além do anual. Bem-vindo ao BoostSync Optimizer v1! Atualizações mensais entre os dias 1 e 4, cada chave de ativação é exclusiva para um computador por um mês. Planos mensais disponíveis.
          </p>
        </div>
      </section>

      <section className="bg-[#302C42] flex justify-center mt-8 p-8 rounded-lg shadow-lg relative">
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#443F5B] to-[#8B86B5]"></div>
        <div className="border-4 border-[#6B68A1] rounded-lg overflow-hidden relative">
          <div className="bg-[#443F5B] p-4">
            <h2 className="text-white text-2xl font-bold">Vantagens BoostSync</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out">
              <div className="w-full p-4">
                <div className="bg-black sec2 rounded-lg overflow-hidden">
                  <h1 className='text-3xl font-bold text-white'>Substituir por Iframe Agradecendo a Compra</h1>
                  <div className="p-4">
                    <h3 className="text-xl text-gray-500 font-bold">Grande Custo Benefício</h3>
                    <p className="text-gray-100">Tenha um desempenho excepcional sem comprometer seu orçamento.</p>
                  </div>
                </div>
              </div>
              {/* Adicione mais benefícios aqui */}
            </div>
          </div>
          <div className="bg-[#443F5B] p-4 text-white text-center font-bold"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#8B86B5] to-[#443F5B]"></div>
      </section>
    </div>
  );
}
