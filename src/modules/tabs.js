const htmlElements = {
  navA: document.querySelectorAll("ul>li>a"),
  masterInfo: document.querySelector(".masterInfo"),
  tabs: document.querySelectorAll(".tabs"),
  autoInfo:document.querySelector(".autoInfo"),
  // workPlan:document.querySelector(".workPlan"),
};

const onTabsClick = (event) => {
  arrayElements.forEach(element => {
    element.classList.remove("disabled");
  });
  event.srcElement.classList.add("disabled");
  const mode = event.srcElement.dataset.mode;
  const arrayTabs = Array.from(htmlElements.tabs[0].children);
  arrayTabs.forEach(element => {
    element.classList.add("hidden");
  });

  switch (mode) {
    case "Master":
      htmlElements.masterInfo.classList.remove("hidden");
      break;
    case "Auto":
      htmlElements.autoInfo.classList.remove("hidden");
      break;
  }
}

const arrayElements = Array.from(htmlElements.navA);
arrayElements.forEach(element => {
  element.addEventListener("click", onTabsClick);
});

function Tabs() {}

export { Tabs };
