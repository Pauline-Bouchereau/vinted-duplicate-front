import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import PublishForm from "../components/PublishForm";
import PublishConfirmation from "../components/PublishConfirmation";

const Publish = ({ serverUrl }) => {
  const [offerPublished, setOfferPublished] = useState(false);
  const [responseAxios, setResponseAxios] = useState({});
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const token = Cookies.get("userToken");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("brand", brand);
      formData.append("title", title);
      formData.append("city", "Paris");

      const response = await axios.post(
        `${serverUrl}/offer/publish`,
        formData,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      setResponseAxios(response.data);
      setOfferPublished(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {!token && <Redirect push to="/login" />}
      {offerPublished ? (
        <PublishConfirmation response={responseAxios} />
      ) : (
        <PublishForm
          setPicture={setPicture}
          title={title}
          setTitle={setTitle}
          setDescription={setDescription}
          brand={brand}
          setBrand={setBrand}
          condition={condition}
          setCondition={setCondition}
          price={price}
          setPrice={setPrice}
          size={size}
          setSize={setSize}
          color={color}
          setColor={setColor}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
export default Publish;

// token ? (
// <PublishForm
//   setPicture={setPicture}
//   title={title}
//   setTitle={setTitle}
//   setDescription={setDescription}
//   brand={brand}
//   setBrand={setBrand}
//   condition={condition}
//   setCondition={setCondition}
//   price={price}
//   setPrice={setPrice}
//   size={size}
//   setSize={setSize}
//   color={color}
//   setColor={setColor}
//   handleSubmit={handleSubmit}
// />
//   ) : (
//     <Redirect to="/login" />
//   );
