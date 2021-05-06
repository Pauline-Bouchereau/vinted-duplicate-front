import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [unauthorized, setUnauthorized] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-duplicate.herokuapp.com/user/login",
        { email: email, password: password }
      );
      const token = response.data.token;
      setUser(token);
      history.push("/");
    } catch (error) {
      console.log(error.response);
      if (error.response.data.message === "Unauthorized") {
        setUnauthorized(true);
      }
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h3>Se connecter</h3>
        {unauthorized && (
          <p>Nom d'utilisateur et/ou mot de passe invalide(s) </p>
        )}
        <input
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Mot de Passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" />
      </form>
      <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
    </main>
  );
};

export default LogIn;
