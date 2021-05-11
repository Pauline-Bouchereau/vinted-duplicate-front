import { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

const CheckoutForm = ({ userToken, serverUrl }) => {
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
        const response = await axios.get(`${serverUrl}/offer/${productId}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [productId, serverUrl]);

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
        `${serverUrl}/payment`,
        {
          stripeToken: stripeToken,
          productId: "60928fb182860500150368b1",
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
