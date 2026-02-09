import styles from "./CarDetailsImage.module.css";
const CarDetailsImage = ({ image, brand, model }) => {
  return (
    <>
      <div className={styles.card__image}>
        <img src={image} alt={`${brand} ${model}`} />
      </div>
    </>
  );
};

export default CarDetailsImage;
