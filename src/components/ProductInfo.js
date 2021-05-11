import { Link } from "react-router-dom";

const ProductInfo = ({ data }) => {
  return (
    <div className="product-info">
      <img src={data.product_image.secure_url} alt={data.product_name} />
      <div>
        <h3>{data.product_name}</h3>
        <p>Prix : {data.product_price}€</p>
        <div>
          <p>Marque : {data.product_details[0].MARQUE} </p>
          <p>Taille : {data.product_details[1].TAILLE}</p>
          <p>Etat : {data.product_details[2].ÉTAT}</p>
          <p>Couleur : {data.product_details[3].COULEUR}</p>
          <p>Ville : {data.product_details[4].EMPLACEMENT}</p>
        </div>
        <Link
          to={{
            pathname: `/payment`,
            search: `?productId=${data._id}`,
          }}
        >
          <button>Acheter !</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
