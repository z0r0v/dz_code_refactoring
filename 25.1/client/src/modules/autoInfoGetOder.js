import { infoCar, infoOrder } from "./reexport.js";
import { apendHelpper } from "./reexport.js";
import { StopWotch } from "./reexport.js";

const htmlElements = {
  carInfo: document.querySelector(".carInfo"),
  trExecutedOrder: document.querySelector(".executedOrder > tr"),
  executedOrder: document.querySelector(".executedOrder")
};

class AutoInfoGetOder {
  constructor() {}
  creatTableOrder(startTime) {
    htmlElements.carInfo.innerText = infoCar;
    htmlElements.work = document.createElement("td");
    htmlElements.work.classList.add("text-left");
    htmlElements.time = document.createElement("td");
    htmlElements.price = document.createElement("td");
    htmlElements.executedOrder.appendChild(htmlElements.trExecutedOrder);
    const arayElements = [
      htmlElements.work,
      htmlElements.time,
      htmlElements.price
    ];
    apendHelpper(htmlElements.trExecutedOrder, arayElements);
    const element = htmlElements.time;
    const stopWotch = new StopWotch();
    stopWotch.init(element, startTime);
    htmlElements.work.innerText = infoOrder.work;
    htmlElements.price.innerText = `${infoOrder.price}$`;
  }
}

class CreateTable {
  constructor(element, elementTo, apendElemetnTo, arayElements) {
    element.appendChild(elementTo);
    apendHelpper(apendElemetnTo, arayElements);
  }
}

export { AutoInfoGetOder, CreateTable };
