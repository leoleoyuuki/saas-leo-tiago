"use client"

import Image from "next/image";
import Link from "next/link";
import {LazyLoadImage} from 'react-lazy-load-image-component';



export default function Checkout () {

 const handleCheckout = () => {
  window.location.href = "https://pay.kiwify.com.br/KzJkUxA";
 }

  return (
    <>
      <div className="bg-[#26242f] pb-10">
      <section className="w-4/5 m-auto">
        <div className="container-sec1 flex justify-between">
          <div className="leftsec1">
            <div className="texts text-4xl font-semibold pt-10">
              <h1>
                <span className="t1">Adquira</span> a Sua Licença Abaixo
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-4/5 m-auto pt-16 flex items-center justify-center md:flex-row">
        <div className="cursor-pointer hover:scale-105 hover:border-2 rounded-2xl border-purple-500" onClick={handleCheckout}>
            <LazyLoadImage
              className="rounded-2xl"
              src="/img/checkout.jpg"
              width={1100}
              height={200}
              alt="Licença de 1 Mês"
            />
        </div>    
      </section>
    </div>
      
        
    </>
  );
};

