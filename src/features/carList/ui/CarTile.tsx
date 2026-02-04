type CarTileProps = {
  image: string;
  brand: string;
  model: string;
  dailyPrice: string;
};
const CarTile = ({ image, brand, model, dailyPrice }: CarTileProps) => {
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
      </div>
    </>
  );
};

export default CarTile;
