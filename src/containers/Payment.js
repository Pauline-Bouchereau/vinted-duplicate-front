import { Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IpuDxFzl7D5XfKoja3yzUdsXLipZbBPv1G6zLZVhomfbXCdGiIAMBiDrOlS0bxEj2OFvPVcY7HuPaQ6DAFqYmuJ00y21yzjTP"
);

const Payment = ({ userToken }) => {
  return !userToken ? (
    <Redirect push to="/login" />
  ) : (
    <Elements stripe={stripePromise}>
      <CheckoutForm userToken={userToken} />
    </Elements>
  );
};

export default Payment;
