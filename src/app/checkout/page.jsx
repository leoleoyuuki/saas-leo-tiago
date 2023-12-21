"use client"
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import Image from "next/image";

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
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
      <Image
        className="checkout-product-image"
        src="/img/product-image.jpg"
        width={400}
        height={300}
        alt="Product"
      />
      
        <button
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
        </button>
    </div>
  );
};

export default Checkout;
