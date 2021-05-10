import heroBanner from "../assets/img/hero-banner-vinted.jpg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  return (
    <div>
      <img src={heroBanner} alt="Femme regardant une jupe" />
      <div>
        <h2>Prêts à faire du tri dans vos placards ?</h2>
        <button
          onClick={() => {
            history.push("/publish");
          }}
        >
          Commencer à vendre
        </button>
      </div>
    </div>
  );
};

export default Hero;
