type CarTileProps = {
  image: string;
  brand: string;
  model: string;
  dailyPrice: string;
  onDetails: () => void;
  onBook: () => void;
};
const CarTile = ({
  image,
  brand,
  model,
  dailyPrice,
  onDetails,
  onBook,
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
        <button onClick={onBook}>Book a Car</button>
      </div>
    </>
  );
};

export default CarTile;
