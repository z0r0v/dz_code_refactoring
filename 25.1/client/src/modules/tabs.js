import { SwitchCase } from "./reexport.js";

const htmlElements = {
  tabs: document.querySelectorAll(".tabs"),
  navA: document.querySelectorAll("ul>li>a")
};

const classDis = "disabled";

const onTabsClick = event => {
  arrayElements.forEach(element => {
    element.classList.remove(classDis);
  });
  event.srcElement.classList.add(classDis);
  const elementDataAttribute = event.target.dataset.mode;
  const arrayTabs = Array.from(htmlElements.tabs[0].children);
  arrayTabs.forEach(element => {
    element.classList.add("hidden");
  });
  new SwitchCase(elementDataAttribute);
};

const arrayElements = Array.from(htmlElements.navA);
arrayElements.forEach(element => {
  element.addEventListener("click", onTabsClick);
});

function Tabs() {}
export { Tabs };
