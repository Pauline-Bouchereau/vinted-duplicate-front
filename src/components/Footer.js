import pictopb from "../assets/img/picto-pb-dark.jpg";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/pbouchereau/" target="blank">
        <img src={pictopb} alt="Picto Pauline Bouchereau" />
      </a>

      <p>
        Made by{" "}
        <a href="https://github.com/Pauline-Bouchereau" target="blank">
          Pauline Bouchereau
        </a>{" "}
        with{" "}
        <a href="https://reactjs.org/" target="blank">
          React
        </a>{" "}
        @{" "}
        <a href="https://www.lereacteur.io/" target="blank">
          Le Reacteur
        </a>{" "}
        - 2021
      </p>
    </footer>
  );
};

export default Footer;
