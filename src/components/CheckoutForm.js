import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ userToken }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: "userId",
      });
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post("http://localhost:3001/payment", {
        stripeToken: stripeToken,
        productId: "product Id",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="checkout-form">
        <CardElement />
        <input type="submit" value="Valider le paiement" />
      </form>
    </main>
  );
};

export default CheckoutForm;
