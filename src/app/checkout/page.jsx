"use client"
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import Image from "next/image";
import Link from "next/link";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1OP4tyLZkqAmFk4bGjEy9wRH",
    quantity: 1,
  };


  const successUrl = typeof window !== 'undefined' ? `${window.location.origin}/success` : '/success';
  const cancelUrl = typeof window !== 'undefined' ? `${window.location.origin}/cancel` : '/cancel';
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: successUrl,
    cancelUrl: cancelUrl,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

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
          <div className="bg-[#443F5B] rounded-lg overflow-hidden">
            <Image
              src="/img/checkout1.jpg"
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
              <p className="text-[#c0b7e8] font-bold text-lg">R$19,99</p>
              <Link href="/finalizar-compra">
                <p className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-2 rounded-full mt-4">
                  Comprar Agora
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="bg-[#443F5B] rounded-lg overflow-hidden">
            <Image
              src="/img/checkout2.jpg"
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
              <p className="text-[#c0b7e8] font-bold text-lg">R$99,99</p>
              <Link href="/finalizar-compra">
                <p className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-2 rounded-full mt-4">
                  Comprar Agora
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4">
          <div className="bg-[#443F5B] rounded-lg overflow-hidden">
            <Image
              src="/img/checkout3.jpg"
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
              <p className="text-[#c0b7e8] font-bold text-lg">R$299,99</p>
              <Link href="/finalizar-compra">
                <p className="btn uppercase font-bold text-[#343045] btn text-xs px-8 py-2 rounded-full mt-4">
                  Comprar Agora
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
      
        {/* <button
          className="checkout-button"
          onClick={redirectToCheckout}
          disabled={isLoading}
        >
          <div className="grey-circle">
            <div className="purple-circle">
              <Image className="icon" src="/img/credit-card.svg" width={400} height={300} alt="credit-card-icon" />
            </div>
          </div>
          <div className="text-container">
            <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
          </div>
        </button> */}
    </>
  );
};

export default Checkout;
