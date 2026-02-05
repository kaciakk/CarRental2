type CarTileProps = {
  image: string;
  brand: string;
  model: string;
  dailyPrice: string;
  onDetails: () => void;
};
const CarTile = ({
  image,
  brand,
  model,
  dailyPrice,
  onDetails,
}: CarTileProps) => {
  return (
    <>
      <img
        src={image}
        style={{
          width: "250px",
          height: "250px",
          contain: "fill",
          objectFit: "cover",
        }}
      />
      <div>
        <div>Marka:{brand} </div>
        <div>Model: {model}</div>
        <div>Cena: {dailyPrice}</div>
        <button onClick={onDetails}>Details</button>
      </div>
    </>
  );
};

export default CarTile;
