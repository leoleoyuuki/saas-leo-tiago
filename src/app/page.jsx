import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";



export default function home() {
  return (
    <div className="w-4/5 m-auto h-auto ">
      <div className="3/5 m-auto text-center flex flex-col justify-around h-[82vh]">
        <div className="texts">
          <h1 className="text-[2.4rem] [text-shadow:_3px_3px_5px_rgb(255_255_255_/_60%)] font-bold">
            Aumente o desempenho do seu pc
          </h1>
          <p className="[text-shadow:_3px_3px_5px_rgb(255_255_255_/_60%)] text-lg ">
            Boas-vindas ao BoostSync, sua arma secreta contra o input lag nos
            jogos!
          </p>
        </div>
        <div className="compra flex flex-col gap-10">
          <div className="flex justify-center ">
            <iframe
              className="rounded-md shadow-lg shadow-[#6b3fa9]"
              width="800"
              height="449"
              src="https://www.youtube.com/embed/mHO09NyZb84?si=z789ED8aXexE2KWs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <Link
              href="/checkout"
              className="botao inline-flex items-center justify-center px-7 font-semibold py-4 bg-transparent border-2 border-[#6b3fa9] text-white rounded-lg shadow-lg hover:bg-[#773faa]"
            >
              Quero Melhorar Meu FPS Ruim
            </Link>
          </div>
        </div>
      </div>

      <div>

        <div className="arrow w-14 flex justify-center py-4 m-auto "><IoIosArrowDown color="#6b3fa9" size={42}/></div>
        <h1 className="text-[2.2rem] text-center font-bold">
          Como funciona o <span className="text-[#6b3fa9] underline">BoostSync </span>?
        </h1>
        <div className="w-full flex flex-row-reverse pt-16 items-center gap-14">
          <Image src={"/img/maxresdefault.jpg"} width={650} height={0 } alt="FPS BOOST" className="rounded shadow-lg shadow-[#fff]"/>
          <p className="text-2xl [text-shadow:_5px_5px_8px_rgb(107_63_169_/_70%)] font-semibold">BoostSync basicamente otimizará o seu computador para poder rodar os jogos com mais desempenho, o windows que você usa ele <span className="text-red-700">não foi criado para jogos</span>, então resolvemos esse problema pra você gamer que não quer ou não pode fazer um upgrade das peças do computador e por um <span className="text-green-500">preço muito mais acessível</span>. Ele desabilitará recursos que não são necessários para jogos e deixará o seu computador mais leve e com mais desempenho te dando mais <span className="text-[#6b3fa9]">fps</span> e um <span className="text-[#6b3fa9]">input lag dos sonhos</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
