import F from "../f";
import styles from "../styles/spider.module.css";
import SpiderEye from "./SpiderEye";
import SpiderLeg from "./SpiderLeg";

const SpiderBody = () => {
  return (
    <div>
      <div className={styles.spiderBodyTop} style={{ position: "relative" }}>
        <SpiderLeg
          deg={45}
          offsetX={-14}
          offsetY={-18}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={-45}
          offsetX={14}
          offsetY={-18}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={20}
          offsetX={-14}
          offsetY={-10}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={-20}
          offsetX={14}
          offsetY={-10}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={-20}
          offsetX={-14}
          offsetY={-6}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={20}
          offsetX={14}
          offsetY={-6}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={-35}
          offsetX={-12}
          offsetY={-2}
          style={{ bottom: -6 }}
        ></SpiderLeg>
        <SpiderLeg
          deg={35}
          offsetX={12}
          offsetY={-2}
          style={{ bottom: -6 }}
        ></SpiderLeg>
      </div>
      <div className={styles.spiderBodyBottom}>
        <SpiderEye isLeft></SpiderEye>
        <SpiderEye isLeft={false}></SpiderEye>
      </div>
    </div>
  );
};

export default SpiderBody;
