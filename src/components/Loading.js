import loading from "../assets/img/spinner.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="Gif de chargement" />
    </div>
  );
};

export default Loading;
