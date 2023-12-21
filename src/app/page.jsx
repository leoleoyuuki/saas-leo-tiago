import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



export default function home() {
  return (
    <div className="bg-[#302C42]">
      

      <section className="w-4/5 m-auto"> {/*section 1*/}
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis harum modi numquam vero assumenda. Adipisci dicta repudiandae non reiciendis voluptates eveniet placeat libero, molestias tenetur iure rem consequuntur aperiam consectetur neque magnam nisi laboriosam nostrum earum?
              </p>
            </div>
            <div className="flex items-center gap-7">
              <Link href="/checkout" className="cta text-[#343045] px-6 py-4 text-xs font-bold">
                GARANTA SEU DESEMPENHO
              </Link>
              <FaArrowRightLong size={36} color="#c0b7e8"/>
          </div>
           </div> 
          <Image className="pt-[4.6rem]" src="/img/imgsec1.svg" width={424} height={0} alt="GAMER" />
            
        </div>
      </section>

      <section className="pt-28">{/*section 2*/}
        <div className="w-4/5 sec2 m-auto flex justify-center gap-10 items-center text-white rounded-full py-12" >
            <div className="flex items-center gap-4">
              <div><FaDiscord color="#fff" size={40}/></div>
        
              <div >
                <h1 className="font-bold text-lg">Conheça o Discord</h1>
                <p className="font- font-light">Entre no nosso servidor para mais informações</p>
              </div>
            </div>
            <div className="text-[2.4rem] font-light">|</div>
            <div className="flex items-center gap-4">
              <div><IoIosMail color="#fff" size={40}/></div>
        
              <div>
                <h1 className="font-bold text-lg">Envie-nos um Email</h1>
                <p className="font- font-light">Caso preferir nos chamar pelo Email é só chamar</p>
              </div>
            </div>
        </div>
      </section>

      <section>{/*section 3*/}

          <div className="flex items-center gap-5">
            <div>
              <h1>Introduzindo</h1>
              <p>BoostSync Optimizer</p>
            </div>
            <Image/>
          </div>

      </section>

    </div>
  );
}
