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
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/offers`, {
          params: { limit: limit, page: page },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [limit, page, serverUrl]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="home">
      <Hero />
      <div className="container">
        <div>
          {data.offers.map((elem) => {
            return <OfferVignette key={elem._id} data={elem} />;
          })}
        </div>
        <p>
          Nombre de résultats affichés par page :
          <span
            onClick={() => {
              setLimit(5);
            }}
          >
            &nbsp;5
          </span>
          <span
            onClick={() => {
              setLimit(10);
            }}
          >
            &nbsp;10&nbsp;
          </span>
          <span
            onClick={() => {
              setLimit(20);
            }}
          >
            20
          </span>
        </p>

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={page === 1 ? "disabled" : ""}
        >
          Aller à la page précédente
        </button>

        {Math.ceil(data.count / limit) > page ? (
          <button onClick={() => setPage(page + 1)}>
            Aller à la page suivante
          </button>
        ) : (
          <button disable className="disabled">
            Aller à la page suivante
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
