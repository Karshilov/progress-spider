import F from "../f";
import styles from "../styles/spider.module.css";

const SpiderEye = (props: { isLeft: boolean }) => {
  const { isLeft } = props;
  return (
    <div className={styles.spiderEyeBorder}>
      <div
        className={styles.spiderEyeCore}
        id={isLeft ? "spider-left-eye" : "spider-right-eye"}
      ></div>
    </div>
  );
};

export default SpiderEye;
