import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";
import ProductInfo from "../components/ProductInfo";

const Offer = ({ serverUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/offer/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, serverUrl]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <ProductInfo data={data} />
    </main>
  );
};

export default Offer;
