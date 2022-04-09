import Spider from "./components/Spider";
import F from "./f";
import styles from "./styles/spider.module.css";
import { Config } from "./types";

function SpiderProgress(begin?: string, target?: string, config?: Config) {
  if (begin) {
    const beginNode = document.querySelector(begin)! as HTMLElement;
    beginNode.appendChild(
      <div
        style={{
          marginLeft: config ? config.left ?? 0 : 0,
          ...(config ? config.style ?? {} : {}),
        }}
        className={styles.container}
      >
        <Spider config={config} target={target}></Spider>
      </div>
    );
  } else {
    document.querySelector("body").appendChild(
      <div
        style={{
          marginLeft: config ? config.left ?? 0 : 0,
          ...(config ? config.style ?? {} : {}),
          position: 'fixed'
        }}
        className={styles.container}
      >
        <Spider config={config} target={target}></Spider>
      </div>
    );
  }
}

export default SpiderProgress;
