const ProductInfo = ({ data }) => {
  return (
    <div>
      <img src={data.product_image.secure_url} alt={data.product_name} />
    </div>
  );
};

export default ProductInfo;
