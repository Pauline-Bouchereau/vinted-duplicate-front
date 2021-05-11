import { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import OfferVignette from "../components/OfferVignette";

// ------------------------------------------------------
const Home = ({ serverUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [limit, setLimit] = useState("");
  //const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/offers`
          // { params: { limit: limit, skip: skip } }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [serverUrl]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <Hero />
      <div className="container">
        {data.offers.map((elem) => {
          return <OfferVignette key={elem._id} data={elem} />;
        })}
        <p>
          Nombre de résultats par page{" "}
          <span
          // onClick={() => {
          //   setLimit(5);
          // }}
          >
            5
          </span>{" "}
          <span
          // onClick={() => {
          //   setLimit(10);
          // }}
          >
            10
          </span>
          <span
          // onClick={() => {
          //   setLimit(20);
          // }}
          >
            20
          </span>
        </p>
      </div>
    </main>
  );
};

export default Home;
