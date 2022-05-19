import { ClassHelper } from "./reexport.js";
import { UserServiceFetch, UserServiceHXMhttp } from "./reexport.js";
import { AutoInfoGetOder } from "./reexport.js";
import { books, Book, CreateBooks } from "./reexport.js";
import { infoBook } from "./reexport.js";
import { apendHelpper } from "./reexport.js";
import { SwitchCase2 } from "./reexport.js";
import { ValidationForm } from "./reexport.js";
import { masterId } from "./reexport.js";
import { masters, master } from "./reexport.js";
import { carsOwners, ReplacementParts, Car } from "./reexport.js";
import { GetTodayDate } from "./reexport.js";
import { InfoAuto } from "./reexport.js";
import { url } from "./reexport.js";

let infoCar;
let infoOrder;
const btn = "btn";
const btnPrimary = "btn-outline-primary";
const btnSm = "btn-sm";
const colMd12 = "col-md-12";
const danger = "border-danger";
let owner;
const hidd = "hidden";

const htmlElements = {
  h2MasterInfo: document.querySelector("summary"),
  bookTbody: document.querySelector(".table > tbody"),
  buttonBook: document.querySelector(".bookButton"),
  executedOrderTr: document.querySelector(".executedOrder > tr"),
  form: document.querySelector(".bookForm"),
  spinner: document.querySelector(".lds-dual-ring")
};

htmlElements.buttonBook.addEventListener("click", onButtonToBookClicked);

function createBookHelper(array, trBookInfo) {
  array.forEach((element, index) => {
    const objTd = document.createElement("td");
    objTd.innerText = element;
    //повесил изменение только туда кудам не нужно в цикле
    if (index === 4) {
      objTd.addEventListener("dblclick", chengeWork);
    }
    trBookInfo.appendChild(objTd);
  });
}

function creatButtons(tdButtons, className, colorClass, callback) {
  const button = document.createElement("i");
  tdButtons.appendChild(button);
  button.classList.add("fa", `${className}`, `${colorClass}`, "fa-lg");
  button.addEventListener("click", callback);
}

const creatElementsBook = (element, arayElement, idBook, number) => {
  const trBookInfo = document.createElement("tr");
  trBookInfo.id = idBook;
  element.appendChild(trBookInfo);

  const thNumber = document.createElement("th");
  thNumber.innerText = number;
  trBookInfo.appendChild(thNumber);
  createBookHelper(arayElement, trBookInfo);

  const checkCircle = "fa-check-circle";
  const timesCircle = "fa-times-circle";
  const success = "text-success";
  const danger = "text-danger";

  const tdButtons = document.createElement("td");
  trBookInfo.appendChild(tdButtons);

  creatButtons(tdButtons, checkCircle, success, addInNewMasive);
  creatButtons(tdButtons, timesCircle, danger, onButtonIcoClearClicked);
};

const creatBoofing = (number, time, brand, phone, name, work, idBook) => {
  const arayElement = [time, brand, phone, name, work];
  creatElementsBook(htmlElements.bookTbody, arayElement, idBook, number);
  onANavClicked();
};

////Кнопка check in v!!!!!!!!!!
function addInNewMasive() {
  const startTime = Date.now();
  htmlElements.executedOrderTr.innerText = null;
  const thisContext = this;
  const index = findElement(thisContext);
  const array = books.books[index];
  //деструктуризация
  const {
    brand,
    yearIssue,
    carMileage,
    name,
    phone,
    work,
    registerSign
  } = array;
  const price = parseInt(array.priceWork) + parseInt(array.priceParts);
  infoCar = `Brand: ${brand}, ${yearIssue} year.\nMileage: ${carMileage} km.\nOwner: ${name}.\nPhone: ${phone}.`;
  infoOrder = {
    work: work,
    price: price
  };

  new AutoInfoGetOder().creatTableOrder(startTime);

  class FindOrAddToServer {
    constructor() {
      owner = carsOwners.carsOwners.filter(function(a) {
        return a.phone == phone;
      })[0];

      const data = GetTodayDate();
      let idCar;
      let idPeplacementParts;
      if (owner === undefined) {
        const urlG = `${url}carsOwners`;
        idCar = 1;
        idPeplacementParts = 1;
        let newIdForJsone = carsOwners.carsOwners.length + 1;

        new UserServiceFetch().add(urlG, {
          id: newIdForJsone,
          name: name,
          phone: phone,
          car: [
            {
              id: idCar,
              brand: array.brand,
              carMileage: array.carMileage,
              registerSign: array.registerSign,
              replacementParts: [
                {
                  id: idPeplacementParts,
                  masterName: master,
                  replacementMileage: carMileage,
                  data: data,
                  work: work,
                  nextReplacementMileage: undefined,
                  priceWork: array.priceWork,
                  priceParts: array.priceParts
                }
              ],
              futureWorkPlan: []
            }
          ]
        });
      } else {
        const cars = owner.car.filter(function(a) {
          return a.brand == brand;
        })[0];
        const newIdForJsone = owner.id;

        if (cars === undefined) {
          idCar = owner.car.length + 1;
          const car = new Car();
          car.id = idCar;
          car.brand = array.brand;
          car.carMileage = array.carMileage;
          car.registerSign = array.registerSign;
          car.replacementParts = [
            {
              id: idCar,
              masterName: master,
              replacementMileage: carMileage,
              data: data,
              work: work,
              nextReplacementMileage: undefined,
              priceWork: array.priceWork,
              priceParts: array.priceParts
            }
          ];
          owner.car.push(car);
          const urlG = `${url}carsOwners/${newIdForJsone}`;
          new UserServiceFetch().chenge(urlG, owner);
        } else {
          const urlG = `${url}carsOwners/${newIdForJsone}`;
          const idPeplacementParts = cars.replacementParts.length + 1;
          const replacementParts = new ReplacementParts();
          replacementParts.id = idPeplacementParts;
          replacementParts.masterName = master;
          replacementParts.replacementMileage = carMileage;
          replacementParts.nextReplacementMileage = undefined;
          replacementParts.priceWork = array.priceWork;
          replacementParts.priceParts = array.priceParts;
          replacementParts.data = data;
          replacementParts.work = work;
          cars.replacementParts.push(replacementParts);
          new UserServiceFetch().chenge(urlG, owner);

          new InfoAuto().replaced(cars.replacementParts);
        }
      }
    }
  }

  setTimeout(() => {
    new FindOrAddToServer();
  }, 2000);

  const urlG = `${url}books/${books.books[index].id}`;
  new UserServiceHXMhttp().sincDell(urlG);
  books.books.splice(index, 1);
  new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
}

const changeTimeCondition = (
  difference,
  thirtyMinutes,
  sixtyMinutes,
  elementTr
) => {
  new SwitchCase2(true, difference, thirtyMinutes, sixtyMinutes, elementTr);
};

//перекраска тайма
const onANavClicked = () => {
  const cirrentTime = new Date();
  const timeStrong = cirrentTime.toTimeString();
  const timeShort = timeStrong.split(" ")[0];
  const arrayThisTime = timeShort.split(":");
  const hour = 3600000;
  const minute = 60000;
  let timeThis = arrayThisTime[0] * hour + arrayThisTime[1] * minute;

  htmlElements.tdTime = htmlElements.bookTbody.getElementsByTagName("tr");
  const arrayTr = Array.from(htmlElements.tdTime);
  arrayTr.forEach(element => {
    const elementTr = element.childNodes[1];
    let elementTrSplit = elementTr.innerText.split(":");
    let bookTime = elementTrSplit[0] * hour + elementTrSplit[1] * minute;
    let difference = bookTime - timeThis;

    const thirtyMinutes = 1800000;
    const sixtyMinutes = 3600000;
    changeTimeCondition(difference, thirtyMinutes, sixtyMinutes, elementTr);
  });
};

// Изменение контена для Work value
const chengeWork = () => {
  const workeCheTd = event.path[0];
  htmlElements.cheInputWorke = document.createElement("input");
  htmlElements.cheInputWorke.classList.add(colMd12);
  htmlElements.cheButtontWorke = document.createElement("button");
  htmlElements.cheButtontWorke.innerText = "apply";
  htmlElements.cheButtontWorke.classList.add(btn, btnPrimary, btnSm, colMd12);
  htmlElements.cheButtontWorke.addEventListener("click", aplayChengeWork);
  htmlElements.cheInputWorke.value = workeCheTd.innerText;
  workeCheTd.innerText = "";
  apendHelpper(workeCheTd, [
    htmlElements.cheInputWorke,
    htmlElements.cheButtontWorke
  ]);
  workeCheTd.removeEventListener("dblclick", chengeWork);
};

const findElement = thisContext => {
  const idElement = thisContext.parentNode.parentNode.id;
  const neadArrayElement = books.books.filter(function(a) {
    return a.id == idElement;
  })[0];
  const index = books.books.indexOf(neadArrayElement);
  return index;
};

class chooseСontent {
  constructor(thisContext, callback) {
    const index = findElement(thisContext);
    callback(index);
    new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
  }
}

const aplayChengeWork = function() {
  const thisContext = this;
  new chooseСontent(thisContext, index => {
    const obj1 = books.books[index];
    const urlG = `${url}books/${books.books[index].id}`;

    new UserServiceHXMhttp().patch(urlG, {
      masterId: obj1.masterId,
      time: obj1.time,
      brand: obj1.brand,
      phone: obj1.phone,
      name: obj1.name,
      work: htmlElements.cheInputWorke.value,
      registerSign: obj1.registerSign,
      carMileage: obj1.carMileage,
      yearIssue: obj1.yearIssue,
      priceWork: obj1.priceWork,
      priceParts: obj1.priceParts
    });
    books.books[index].work = htmlElements.cheInputWorke.value;
  });
};

const onButtonIcoClearClicked = function() {
  const thisContext = this;
  new chooseСontent(thisContext, index => {
    const urlG = `${url}books/${books.books[index].id}`;
    new UserServiceHXMhttp().sincDell(urlG);
    delete books.books[index];
  });
};

function formClear() {
  const inputColection = htmlElements.form.getElementsByTagName("input");
  const arrayInput = Array.from(inputColection);
  arrayInput.forEach(element => {
    element.value = "";
    htmlElements.buttonBook.value = "Book";
  });
}

function sortBook() {
  books.books.sort(function(a, b) {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });
}

function onButtonToBookClicked() {
  //Добавление элементов в очередь
  const newBook = new Book();
  newBook.id = books.books.length;
  newBook.masterId = masterId;

  newBook.time = infoBook.time.value;
  newBook.brand = infoBook.brand.value;
  newBook.phone = infoBook.phone.value;
  newBook.name = infoBook.name.value;
  newBook.work = infoBook.work.value;
  newBook.registerSign = infoBook.registerSign.value;
  newBook.carMileage = infoBook.carMileage.value;
  newBook.yearIssue = infoBook.yearIssue.value;
  newBook.priceWork = infoBook.priceWorke.value;
  newBook.priceParts = infoBook.priceParts.value;

  const array = [
    infoBook.time,
    infoBook.brand,
    infoBook.phone,
    infoBook.name,
    infoBook.work,
    infoBook.registerSign,
    infoBook.carMileage,
    infoBook.yearIssue,
    infoBook.priceWorke,
    infoBook.priceParts
  ];

  new ValidationForm(array, danger, () => {
    formClear();
    const urlG = `${url}books`;
    new UserServiceFetch().add(urlG, 
      {
      masterId: newBook.masterId,
      time: newBook.time,
      brand: newBook.brand,
      phone: newBook.phone,
      name: newBook.name,
      work: newBook.work,
      registerSign:newBook.registerSign,
      carMileage: newBook.carMileage,
      yearIssue: newBook.yearIssue,
      priceWork: newBook.priceWork,
      priceParts: newBook.priceParts
      }
      );
    new UserServiceHXMhttp().sincGetHXMhttp(urlG, sortBook, () => {
      //мне пришлось спровоцировать перезагрузку страницы
      location.reload();
      new RenderBook().strBook(htmlElements.bookTbody, books, masterId);
    });
  });
}

class RenderBook {
  constructor() {}
  strBook(element, array, masterId) {
    element.innerText = null;
    array.getByMasterId(masterId).forEach((element, index) => {
      creatBoofing(
        ++index,
        element.time,
        element.brand,
        element.phone,
        element.name,
        element.work,
        element.id
      );
    });
  }
}

export { infoCar, infoOrder, RenderBook, sortBook };
