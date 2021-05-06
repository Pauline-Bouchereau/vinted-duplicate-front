import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-duplicate.herokuapp.com/user/signup",
        { username: username, email: email, password: password }
      );
      const token = response.data.token;
      setUser(token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {/* Checkbox not functional --> need to modify BDD model */}
        <div>
          <input type="checkbox" />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &amp;
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.{" "}
        </p>
        <input type="submit" />
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </main>
  );
};

export default SignUp;
