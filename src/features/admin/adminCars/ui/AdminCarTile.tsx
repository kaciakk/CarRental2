type AdminCarTileProps = {
  id: number;
  brand: string;
  model: string;
  color: string;
  engine: string;
  gearbox: string;
  dailyPrice: string;
  segment: string;
  image: string;
  onDelete: () => void;
  onEdit: () => void;
};
const AdminCarTile = ({
  id,
  brand,
  model,
  color,
  engine,
  gearbox,
  dailyPrice,
  segment,
  image,
  onDelete,
  onEdit,
}: AdminCarTileProps) => {
  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
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
          <div>Id: {id}</div>
          <div>Marka:{brand} </div>
          <div>Model: {model}</div>
          <div>Color: {color}</div>
          <div>Enigne: {engine}</div>
          <div>Gearbox: {gearbox}</div>
          <div>Cena: {dailyPrice}</div>
          <div>Segment: {segment}</div>
        </div>
        <div>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onEdit}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default AdminCarTile;
