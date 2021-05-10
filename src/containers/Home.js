import { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import OfferVignette from "../components/OfferVignette";

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
    <main>
      <Hero />
      <div className="container">
        {data.offers.map((elem) => {
          return <OfferVignette key={elem._id} data={elem} />;
        })}
      </div>
    </main>
  );
};

export default Home;
