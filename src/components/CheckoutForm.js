import { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

const CheckoutForm = ({ userToken }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Get product id from query
  const search = useLocation().search;
  const productId = new URLSearchParams(search).get("productId");

  // Get info about product from DB
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-duplicate.herokuapp.com/offer/${productId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get payment info
      const cardElements = elements.getElement(CardElement);

      // Creation of the stripeToken
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userToken,
      });
      const stripeToken = stripeResponse.token.id;

      // Send request to server
      const response = await axios.post(
        "http://localhost:3001/payment",
        {
          stripeToken: stripeToken,
          productId: productId,
        },
        { headers: { authorization: `Bearer ${userToken}` } }
      );

      // Indicate to user if the payment was successful or not
      if (response.status === 200) {
        setMessage("Paiement validé");
      } else {
        setMessage("Une erreur est survenue, merci de recommencer");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h3>Validation de commande</h3>
        <p>
          Pour valider votre commande de <span>{data.product_name}</span>, d'un
          montant de <span>{data.product_price}€</span>, veuillez renseigner vos
          coordonnées bancaires ci-dessous et valider le paiement.
        </p>
        <p>{message}</p>
        <CardElement />
        <input type="submit" value="Valider le paiement" />
      </form>
    </main>
  );
};

export default CheckoutForm;
