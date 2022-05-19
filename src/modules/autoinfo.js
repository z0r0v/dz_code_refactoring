import { infoCar, infoOrder } from "./book.js";
import { carOwners } from "./carDatabase.js";
import { StopWotch } from "./stopWotch.js";

const htmlElements = {
  executedOrder: document.querySelector(".executedOrder"),
  carInfo: document.querySelector(".carInfo"),
  trExecutedOrder: document.querySelector(".executedOrder > tr"),
  td: document.querySelectorAll(".executedOrder > tr > td"),
  replaced: document.querySelector(".replaced > tbody"),
  futureWorkPlan: document.querySelector(".futureWorkPlan > tbody"),
  requiresReplacement: document.querySelector(".requiresReplacement > tbody"),
};


function AutoInfo() {}

const creatTableOrders = () => {
  htmlElements.executedOrder.appendChild(htmlElements.trExecutedOrder);
  htmlElements.trExecutedOrder.appendChild(htmlElements.work);
  htmlElements.trExecutedOrder.appendChild(htmlElements.time);
  htmlElements.trExecutedOrder.appendChild(htmlElements.price);
}

const createTable = (element) =>{
  element.appendChild(htmlElements.trReplaced);
  htmlElements.trReplaced.appendChild(htmlElements.thIndex);
  htmlElements.trReplaced.appendChild(htmlElements.tdCarMileage);
  htmlElements.trReplaced.appendChild(htmlElements.tdDate);
  htmlElements.trReplaced.appendChild(htmlElements.tdWork);
  htmlElements.trReplaced.appendChild(htmlElements.tdpriceParts);
  htmlElements.trReplaced.appendChild(htmlElements.tdPriceWork);
}


AutoInfo.prototype.creatTableOrder = (startTime) => {
  htmlElements.carInfo.innerText = infoCar;
  htmlElements.work = document.createElement("td");
  htmlElements.work.classList.add("text-left");
  htmlElements.time = document.createElement("td");
  htmlElements.price = document.createElement("td");
  creatTableOrders();
  const element =  htmlElements.time;
  const stopWotch = new StopWotch();
  stopWotch.init(element, startTime);
  htmlElements.work.innerText = infoOrder.work;
  htmlElements.price.innerText = `${infoOrder.price}$`;
};

htmlElements.carMileage = document.querySelector(
  ".requiresReplacement > tbody> tr >td"
);


const creatReplaced = (
  index,
  carMileage,
  date,
  work,
  priceParts,
  priceWork,
) => {
  htmlElements.trReplaced = document.createElement("tr");
  htmlElements.thIndex = document.createElement("th");
  htmlElements.thIndex.scope = "row";
  htmlElements.thIndex.innerText = index;
  htmlElements.tdCarMileage = document.createElement("td");
  const topThree = carMileage.toString().substring(0,3);
  const secondTrike = carMileage.toString().substring(3)
  htmlElements.tdCarMileage.innerText =`${topThree} ${secondTrike} km`;
  htmlElements.tdDate = document.createElement("td");
  htmlElements.tdDate.innerText = date;
  htmlElements.tdWork = document.createElement("td");
  htmlElements.tdWork.innerText = work;
  htmlElements.tdpriceParts = document.createElement("td");
  htmlElements.tdpriceParts.innerText = `${priceParts}$`;
  htmlElements.tdPriceWork = document.createElement("td");
  htmlElements.tdPriceWork.innerText = `${priceWork}$`;
};


const renderReplaced = array => {
  htmlElements.replaced.innerText = null;
  array.forEach(function(element, index) {
    creatReplaced(
      ++index,
      element.replacementMileage,
      element.data,
      element.work,
      element.priceWork,
      element.priceParts
    );
    createTable(htmlElements.replaced);
  });
};

const renderReplacementExpired = array => {
  htmlElements.futureWorkPlan.innerText = null;
  htmlElements.requiresReplacement.innerText = null;
  array.forEach(function(element, index) {
    if(!array[index].checkMileageCompare){
      creatReplaced(
        //потом разобраться что сделать номер индексуеться по общему списку? пока отключены номера
        null,
        element.nextReplacementMileage,
        null,
        element.work,
        element.priceWork,
        element.priceParts
      );
      createTable(htmlElements.requiresReplacement);
    }else{
      creatReplaced(
         //потом разобраться что сделать номер индексуеться по общему списку? пока отключены номера
         null,
        element.nextReplacementMileage,
        null,
        element.work,
        element.priceWork,
        element.priceParts
      );
      createTable(htmlElements.futureWorkPlan);
    }
  });
};


//придумать как суда передавать именно этот масив
renderReplaced(carOwners[0].car.replacementParts);

//придумать как суда передавать именно этот масив
renderReplacementExpired(carOwners[0].car.futureWorkPlan);



export { AutoInfo };
