import heroBanner from "../assets/img/hero-banner-vinted.jpg";

const Hero = () => {
  return (
    <div>
      <img src={heroBanner} alt="Femme regardant une jupe" />
      <div>
        <h2>Prêts à faire du tri dans vos placards ?</h2>
        <button>Commencer à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
