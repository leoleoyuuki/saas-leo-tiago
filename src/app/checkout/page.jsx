"use client"


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
          <div>
            <div className="texts text-4xl flex flex-col font-semibold pt-10">
              <h1>
                <span className="t1">Adquira</span> a Sua Licença
              </h1>
              <p className="text-[0.6rem] font-light">clique na imagem abaixo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-4/5 m-auto pt-10 flex items-center justify-center">
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

