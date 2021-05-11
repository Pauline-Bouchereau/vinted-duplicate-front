import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import noAvatar from "../assets/img/no-avatar-profile.jpeg";

const OfferVignette = ({ data }) => {
  return (
    <Link to={`/offer/${data._id}`}>
      <div className="offer-vignette">
        <div>
          {data.owner.account.avatar ? (
            <img
              src={data.owner.account.avatar.secure_url}
              alt={`Avatar de ${data.owner.account.username}`}
            />
          ) : (
            <img src={noAvatar} alt="" />
          )}

          <span>{data.owner.account.username}</span>
        </div>
        <img src={data.product_image.secure_url} alt={data.product_name} />
        <div>
          <span>{data.product_price}€</span>
          <span>
            <FontAwesomeIcon icon="heart" /> 8
          </span>
        </div>
        <p>{data.product_details[1].TAILLE}</p>
        <p>{data.product_details[0].MARQUE}</p>
      </div>
    </Link>
  );
};

export default OfferVignette;
