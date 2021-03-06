import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = ({ setUser, serverUrl }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [missingParameter, setMissingParameters] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/user/signup`, {
        username: username,
        email: email,
        password: password,
      });
      const token = response.data.token;
      setUser(token);
      history.goBack();
    } catch (error) {
      console.log(error.message);
      if (error.response.data.status === "409") {
        setErrorMessage("Un compte existe déjà avec cet email !");
      } else {
        setErrorMessage("Une erreur est survenue, merci d'essayer à nouveau");
      }
    }
  };

  const handleClick = () => {
    setMissingParameters(true);
  };

  const handleClickIcon = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <main className="forms-main">
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        {errorMessage && <p>{errorMessage}</p>}

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          onClick={handleClick}
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onClick={handleClick}
        />
        <div>
          <input
            type={visiblePassword ? "text" : "password"}
            placeholder="Mot de Passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            onClick={handleClick}
          />
          {visiblePassword ? (
            <FontAwesomeIcon
              icon="eye-slash"
              onClick={handleClickIcon}
              className="eye"
            />
          ) : (
            <FontAwesomeIcon
              icon="eye"
              onClick={handleClickIcon}
              className="eye"
            />
          )}
        </div>

        {password && password.length < 7 && (
          <p className="warning">Mot de passe : 7 caractères minimum</p>
        )}

        {(!password || !email || !username) && missingParameter && (
          <p className="warning">
            Complète toutes ces informations pour continuer
          </p>
        )}
        {/* Checkbox not functional --> need to modify BDD model */}
        <div>
          <input type="checkbox" />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p className="legal">
          En m'inscrivant, je confirme avoir lu et accepté les Termes &amp;
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.{" "}
        </p>
        <input
          type="submit"
          value="S'inscrire"
          disabled={!password || !email || !username}
          className={!password || !email || !username ? "disabled" : ""}
        />
        <Link replace to="/login">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
