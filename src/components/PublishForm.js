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
}) => {
  return (
    <main>
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
              console.log(event.target.files[0]);
            }}
          />
        </div>
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
          <span>Taille</span>
          <input
            type="text"
            placeholder="Indique la taille de ton article"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
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
        <input type="submit" value="Ajouter" />
      </form>
    </main>
  );
};

export default PublishForm;
