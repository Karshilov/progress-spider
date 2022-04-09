import F from "../f";
import Line from "./Line";
import { getCaptureMouseMove, getScrollTrigger } from "../utils";
import SpiderBody from "./SpiderBody";
import { Config } from "../types";

const Spider = (props: { config: Config, target: string }) => {
  const { config, target } = props;
  const captureLeftEye = getCaptureMouseMove("spider-left-eye");
  const captureRightEye = getCaptureMouseMove("spider-right-eye");
  const lineScrollTrigger = getScrollTrigger("spider-line", target, config);
  requestAnimationFrame(lineScrollTrigger);
  window.addEventListener("mousemove", captureLeftEye);
  window.addEventListener("mousemove", captureRightEye);
  window.onunload = () => {
    window.removeEventListener("mousemove", captureLeftEye);
    window.removeEventListener("mousemove", captureRightEye);
  };
  return (
    <div>
      <Line></Line>
      <SpiderBody></SpiderBody>
    </div>
  );
};

export default Spider;
