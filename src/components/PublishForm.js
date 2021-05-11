const PublishForm = ({
  setPicture,
  title,
  setTitle,
  setDescription,
  brand,
  setBrand,
  condition,
  setCondition,
  price,
  setPrice,
  size,
  setSize,
  color,
  setColor,
  handleSubmit,
  picture,
  description,
}) => {
  return (
    <div className="forms-main">
      <form onSubmit={handleSubmit}>
        <h2>Vends ton article</h2>
        <div>
          <label htmlFor="picture">Ajoute une image</label>
          <input
            className="hidden"
            type="file"
            id="picture"
            onChange={(event) => {
              setPicture(event.target.files[0]);
              console.log(event.target.files[0]);
            }}
          />
          {picture && (
            <img
              src={URL.createObjectURL(picture)}
              alt="Aperçu du fichier téléchargé"
            />
          )}
        </div>
        <div className="publish-div">
          <div>
            <span>Titre</span>
            <input
              type="text"
              placeholder="ex : Chemise Sézane verte"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          {title.length >= 50 && (
            <span className="warning">
              Le titre ne doit pas avoir plus de 50 caractères.
            </span>
          )}
          <div>
            <span>Décris ton article</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="ex : porté quelques fois, taille correctement"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
          {description.length >= 500 && (
            <span className="warning">
              La description ne doit pas avoir plus de 500 caractères.
            </span>
          )}
        </div>
        <div className="publish-div">
          <div>
            <span>Marque</span>
            <input
              type="text"
              placeholder="Indique la marque de ton article"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Taille</span>
            <input
              type="text"
              placeholder="Indique la taille de ton article"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Etat</span>
            <input
              list="condition"
              placeholder="Indique l'état de ton article"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
            <datalist id="condition">
              <option value="Neuf avec étiquette" />
              <option value="Neuf sans étiquette" />
              <option value="Très bon état" />
              <option value="Bon état" />
              <option value="Satisfaisant" />
            </datalist>
          </div>
          <div>
            <span>Couleur</span>
            <input
              type="text"
              placeholder="Indique la couleur de ton article"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="publish-div">
          <div>
            <span>Prix</span>
            <input
              type="text"
              placeholder="0,00€"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
        </div>
        {price >= 100000 && (
          <span className="warning">
            Le prix de ton article doit être inférieur à 100 000€.
          </span>
        )}
        <p className="warning">
          Tous les champs doivent être remplis pour poster ton annonce.
        </p>

        <input
          type="submit"
          value="Ajouter"
          disabled={
            description.length >= 500 || title.length >= 50 || price >= 100000
          }
          className={
            description.length >= 500 ||
            title.length >= 50 ||
            price >= 100000 ||
            !title ||
            !description ||
            !brand ||
            !condition ||
            !color ||
            !price
              ? "disabled"
              : ""
          }
        />
      </form>
    </div>
  );
};

export default PublishForm;
