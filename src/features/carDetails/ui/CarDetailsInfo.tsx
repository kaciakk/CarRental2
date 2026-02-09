import CarDetailsInfoTile from "./CarDetailsInfoTile";
import styles from "./CarDetailsInfo.module.css";
import { LuFuel, LuSettings, LuCar, LuZap } from "react-icons/lu";
const CarDetailsInfo = ({ fuel, gearbox, segment, engine, power }) => {
  return (
    <>
      <div className={styles.info}>
        <CarDetailsInfoTile
          icon={<LuFuel />}
          name={"Fuel type"}
          status={fuel}
        />
        <CarDetailsInfoTile
          icon={<LuSettings />}
          name={"Gearbox"}
          status={gearbox}
        />
        <CarDetailsInfoTile
          icon={<LuCar />}
          name={"Segment"}
          status={segment}
        />
        <CarDetailsInfoTile icon={<LuCar />} name={"Engine"} status={engine} />
        <CarDetailsInfoTile icon={<LuZap />} name={"Power"} status={power} />
      </div>
    </>
  );
};

export default CarDetailsInfo;
