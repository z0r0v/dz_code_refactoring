//Замененный switchCase
const htmlElements = {
  masterInfo: document.querySelector(".masterInfo"),
  autoInfo: document.querySelector(".autoInfo")
};

const modeList = {
  Master: htmlElements.masterInfo,
  Auto: htmlElements.autoInfo
};

class SwitchCase {
  constructor(elementDataAttribute) {
    if (elementDataAttribute in modeList) {
      modeList[elementDataAttribute].classList.remove("hidden");
    } else {
      throw new Error("Error in onTabsClick module tabs str 33");
    }
  }
}

class SwitchCase2 {
  constructor(
    elementDataAttribute,
    difference,
    thirtyMinutes,
    sixtyMinutes,
    elementTr
  ) {
    if (difference <= 0) {
      elementTr.classList.add("text-danger");
    }
    if (difference <= thirtyMinutes) {
      elementTr.classList.add("text-warning");
    }

    if (difference <= sixtyMinutes) {
      elementTr.classList.add("text-success");
    }
    if (difference > sixtyMinutes) {
      elementTr.classList.add("text-success");
    }
  }
}

export { SwitchCase, SwitchCase2 };
