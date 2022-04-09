import { Config } from "../types";

export const getCaptureMouseMove = (id: string) => {
  return (e: MouseEvent) => {
    const eyeCore = document.getElementById(id);
    if (eyeCore) {
      const fullX = window.innerWidth;
      const fullY = window.innerHeight;
      const elementX = eyeCore.getBoundingClientRect().left + 2;
      const elementY = eyeCore.getBoundingClientRect().top + 2;
      const distanceX = Math.abs(e.pageX - window.scrollX - elementX);
      const distanceY = Math.abs(e.pageY - window.scrollY - elementY);
      const atan2Angle = Math.atan2(
        elementY - e.pageY + window.scrollY,
        e.pageX - elementX - window.scrollX
      );
      const rotateAngle = 90 - (atan2Angle * 180) / Math.PI;
      const offset =
        (2 * Math.log(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))) /
        Math.log(Math.pow(fullX, 2) + Math.pow(fullY, 2));
      const offsetX = Math.cos(atan2Angle) * offset;
      const offsetY = -Math.sin(atan2Angle) * offset;
      eyeCore.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotateAngle}deg)`;
    }
  };
};

export const getScrollTrigger = (
  id: string,
  target: string,
  config: Config
) => {
  const ret = () => {
    const content = document.querySelector(target);
    if (!!!content) return;
    const rect = content.getBoundingClientRect();
    if (!!!rect) return;
    if (rect.height < window.innerHeight) return;
    if (rect.top < 0) {
      const percentage =
        Math.abs(rect.top) / (rect.height - window.innerHeight);
      const line = document.getElementById(id);
      line.style.height = `${Math.floor(
        Math.max(
          window.innerHeight -
            line.getBoundingClientRect().top -
            48 -
            (config.bottom ?? 40),
          0
        ) * (percentage <= 1 ? percentage : 1)
      )}px`;
    } else {
      const line = document.getElementById(id);
      line.style.height = "0px";
    }
    requestAnimationFrame(ret);
  };
  return ret;
};
