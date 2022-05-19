const htmlElements = {
  body: document.querySelector("body")
};

function renderSlider() {
  // requestAnimationFrame(cheSlideBG);
  htmlElements.body.classList.add("slide");
  const second = 7000;
  const slider = setInterval(cheSlideBG, second);
  let slide = 0;

  function cheSlideBG() {
    slide++;
    if (slide >= 6) {
      return (slide = 0);
    }
    htmlElements.body.className = "";
    htmlElements.body.classList.add(`slide${slide}`);
  }
}

function Slider() {}

Slider.prototype.init = function() {
  renderSlider();
};

export { Slider };
