import Link from "next/link";

export default function home() {
  return (
    <div className="w-4/5 m-auto">
      <div className="3/5 m-auto text-center flex flex-col justify-around h-[72vh]">
        <div className="texts">
          <h1 className="text-[2.5rem] [text-shadow:_3px_3px_5px_rgb(255_255_255_/_60%)] font-bold">
            aumente o desempenho do seu pc
          </h1>
          <p className="[text-shadow:_3px_3px_5px_rgb(255_255_255_/_60%)] ">
            Boas-vindas ao BoostSync, sua arma secreta contra o input lag nos
            jogos!
          </p>
        </div>
        <div className="compra flex flex-col gap-5">
          <div className="flex justify-center">
            <iframe
              className=""
              width="650"
              height="365"
              src="https://www.youtube.com/embed/mHO09NyZb84?si=z789ED8aXexE2KWs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <Link
              href="/"
              className="botao inline-flex items-center justify-center px-7 py-4 bg-transparent border border-[#6b3fa9] text-white rounded-lg shadow-lg hover:bg-[#773faa]"
            >
              Quero Melhorar Meu FPS Ruim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
