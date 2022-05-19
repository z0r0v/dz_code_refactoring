import { apendHelpper } from "./reexport.js";

const htmlElements = {
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody"),
  futureWorkPlan: document.querySelector(".futureWorkPlan > tbody"),
  requiresReplacement: document.querySelector(".requiresReplacement > tbody"),
  trReplaced: document.querySelector(".replaced > tbody > tr"),
  carMileage: document.querySelector(".requiresReplacement > tbody> tr >td")
};

class InfoAuto {
  replaced(array) {
    array.forEach((elem, index) => {
      createPlan(
        ++index,
        elem.replacementMileage,
        elem.data,
        elem.work,
        elem.priceParts,
        elem.priceWork
      );
    });

    function createPlan(nuber, mill, date, work, pricePar, priceWork) {
      const trelem = document.createElement("tr");
      trelem.innerHTML = null;
      htmlElements.replaced.appendChild(trelem);
      const th1 = document.createElement("th");
      th1.innerText = nuber;
      const th2 = document.createElement("th");
      th2.innerText = mill;
      const th3 = document.createElement("th");
      th3.innerText = date;
      const th4 = document.createElement("th");
      th4.innerText = work;
      htmlElements.replaced.appendChild(th4);
      const th5 = document.createElement("th");
      th5.innerText = pricePar;
      const th6 = document.createElement("th");
      th6.innerText = priceWork;
      apendHelpper(trelem, [th1, th2, th3, th4, th5, th6]);
    }
  }

  workPlan(array) {
    array.forEach(elem => {
      createPlan(
        elem.replacementMileage,
        elem.data,
        elem.work,
        elem.priceParts,
        elem.priceWork
      );
    });

    function createPlan(mill, work, pricePar, priceWork) {
      const trelem = document.createElement("tr");
      trelem.innerHTML = null;
      htmlElements.futureWorkPlan.appendChild(trelem);
      const th1 = document.createElement("th");
      th1.innerText = mill;
      const th2 = document.createElement("th");
      th2.innerText = work;
      const th3 = document.createElement("th");
      th3.innerText = pricePar;
      const th4 = document.createElement("th");
      th4.innerText = priceWork;
      apendHelpper(trelem, [th1, th2, th3, th4]);
    }
  }
}

export { InfoAuto };
