import F from "../f";
import styles from "../styles/spider.module.css";

const SpiderLeg = (props: { deg: number, offsetX: number, offsetY: number, style?: any }) => {
  const { deg, style, offsetX, offsetY } = props;
  return (
    <div
      className={styles.spiderLeg}
      style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${deg}deg)`, position: "absolute", ...style }}
    ></div>
  );
};

export default SpiderLeg;
