import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-duplicate.herokuapp.com/user/login",
        { email: email, password: password }
      );
      const token = response.data.token;
      if (token) {
        setUser(token);
        history.push("/");
      } else {
        console.log("pas de token, pas d'authentification"); //ne s'affiche pas dans la console
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" />
      </form>
      <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
    </main>
  );
};

export default LogIn;
