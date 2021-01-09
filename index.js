function animateSvg(id, delay, delayIncrement) {
  const logo = document.getElementById(id);
  const logoPaths = document.querySelectorAll(`#${id} path`);
  delay = delay;
  for (let i = 0; i < logoPaths.length; i++) {
    logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
    logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
    logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
    delay += delayIncrement;
  }
  //logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    animateSvg("left-logo", 0, 0.5);
    animateSvg("right-logo", 2.5, 0.5);

    animateSvg("top-logo", 0, 0.5);
    animateSvg("bottom-logo", 2.5, 0.5);
  },
  false
);
