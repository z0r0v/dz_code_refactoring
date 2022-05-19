const htmlElements = {
  body: document.querySelector("body")
};

function renderSlider() {
  // requestAnimationFrame(cheSlideBG);
  htmlElements.body.classList.add("slide");

  const slider = setInterval(cheSlideBG, 7000);
  let slide = 0;

  function cheSlideBG() {
    slide++;
    if (slide >= 6) {
      return (slide = 0);
    }
    htmlElements.body.classList.remove(
      "slide",
      "slide1",
      "slide2",
      "slide3",
      "slide4",
      "slide5"
    );
    htmlElements.body.classList.add(`slide${slide}`);
  }
}

function Slider() {}

Slider.prototype.init = function(){
  renderSlider();
}

export { Slider };
