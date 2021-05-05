import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import Loading from "../components/Loading";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// ------------------------------------------------------
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinted-duplicate.herokuapp.com/offers"
        );
        setData(response.data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <main>
        <Hero />
        <Link to={"/offer"}>Go to offer page</Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
