import { Link } from "react-router-dom";

const ProductInfo = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img src={data.product_image.secure_url} alt={data.product_name} />
      <div>
        <p>{data.product_price}</p>
        <div>
          <span>{data.product_details[0].MARQUE} </span>
          <span>{data.product_details[1].TAILLE}</span>
          <span>{data.product_details[2].ÉTAT}</span>
          <span>{data.product_details[3].COULEUR}</span>
          <span>{data.product_details[4].EMPLACEMENT}</span>
        </div>
        <Link to="/payment">
          <button>Acheter !</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
