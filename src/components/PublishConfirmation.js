const PublishConfirmation = ({ response }) => {
  return (
    <main>
      <h3>Ton annonce a bien été publiée !</h3>
      <h3>{response.product_name}</h3>
      <img
        src={response.product_image.secure_url}
        alt={response.product_name}
      />
      {/* Add link to modify Offer here */}
    </main>
  );
};

export default PublishConfirmation;
