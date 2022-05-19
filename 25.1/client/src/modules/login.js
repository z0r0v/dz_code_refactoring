import { Clock } from "./reexport.js";
import { masters } from "./reexport.js";
import { RenderBook } from "./reexport.js";
import { ClassHelper } from "./reexport.js";
import { books, sortBook } from "./reexport.js";
import { LocalStorHelp } from "./reexport.js";

let masterNameCategogy;
let masterId;
let isLogged = false;
let master;

const loginName = document.getElementById("exampleInputLoggin");
const pasword = document.getElementById("exampleInputPassword");
const danger = "border-danger";
const success = "border-success";
const incorrectly = "Password or login is entered incorrectly!";
const log = "loggin";
const pass = "password";
const passPlac = "Enter you ";
const hidd = "hidden";

const htmlElements = {
  output: document.querySelector(".output"),
  buttonLogout: document.querySelector(".logOut"),
  divMasterInToBook: document.querySelector(".book"),
  formButton: document.querySelector("div.col-md-auto.mt-5 > form > input"),
  inputLogin: document.getElementById("exampleInputLoggin"),
  inputPasword: document.getElementById("exampleInputPassword"),
  divMasterInfo: document.querySelector("div.col-md-auto.mt-5 > form"),
  divNav: document.querySelector("div.divNav"),
  divLogin: document.querySelector(".login "),
  masterInfo: document.querySelector(".masterInfo"),
  tr: document.querySelector(".executedOrder > tr"),
  h2MasterInfo: document.querySelector("summary"),
  bookTbody: document.querySelector(".table > tbody"),
  spinner: document.querySelector(".lds-dual-ring")
};

htmlElements.buttonLogout.addEventListener("click", onLogoutCuttonclick);
htmlElements.formButton.addEventListener("click", onButtonCheckPassword);

function onLogoutCuttonclick() {
  isLogged = false;
  localStorage.clear();

  htmlElements.divLogin.classList.remove(hidd);
  new ClassHelper().addClass(
    [htmlElements.masterInfo, htmlElements.divNav],
    hidd
  );

  new ClassHelper().addNullValue([
    htmlElements.inputLogin,
    htmlElements.inputPasword
  ]);

  htmlElements.inputLogin.placeholder = `${passPlac}${log}`;
  htmlElements.inputPasword.placeholder = `${passPlac}${pass}`;
  htmlElements.tr.innerText = null;
}

class ValidRender {
  constructor(isLogged, masterNameCategogy, masterId, array) {
    if (isLogged) {
      htmlElements.h2MasterInfo.innerText = masterNameCategogy;
      Clock.prototype.init();
      // debugger;
      sortBook();
      new RenderBook().strBook(htmlElements.bookTbody, array, masterId);

      const threeMinutes = 180000;
      setInterval(() => {
        new RenderBook().strBook(htmlElements.bookTbody, array, masterId);
      }, threeMinutes);

      new ClassHelper().removeClass([loginName, pasword], danger);
      new ClassHelper().addClass(
        [loginName, pasword, htmlElements.divLogin],
        hidd
      );
      new ClassHelper().removeClass(
        [htmlElements.masterInfo, htmlElements.divNav],
        hidd
      );
    } else {
      new ClassHelper().addClass([loginName, pasword], danger, "border");
      new ClassHelper().addNullValue([loginName, pasword]);
      loginName.placeholder = incorrectly;
      pasword.placeholder = incorrectly;
    }
  }
}

class Authentication {
  constructor(masters) {
    masters.forEach(function(master) {
      if (
        pasword.value === master.pasword &&
        loginName.value === master.login
      ) {
        masterNameCategogy = `Master : ${master.firstName} ${
          master.lastName
        }. Category: ${master.category()}`;
        isLogged = true;
        masterId = master.id;
        new LocalStorHelp().set(isLogged, masterId, masterNameCategogy);
        master = master.lastName;
        return isLogged, masterId, master;
      }
    });
  }
}

function onButtonCheckPassword() {
  new ClassHelper().removeClass([loginName, pasword], danger, success);
  new Authentication(masters.masters);
  new ValidRender(isLogged, masterNameCategogy, masterId, books);
  return masterNameCategogy;
}

class Relog {
  constructor(books) {
    htmlElements.divLogin.classList.add(hidd);
    isLogged = localStorage.getItem("aItem", isLogged);
    masterId = localStorage.getItem("bItem", masterId);
    masterNameCategogy = localStorage.getItem("cItem", masterNameCategogy);
    if (isLogged) {
      htmlElements.spinner.classList.remove(hidd);
      new Promise(function(resolve, reject) {
        setTimeout(() => {
          new ClassHelper().removeClass(
            [htmlElements.masterInfo, htmlElements.divNav],
            hidd
          );
          if (books) {
            htmlElements.spinner.classList.add(hidd);
            resolve(
              new ValidRender(isLogged, masterNameCategogy, masterId, books)
            );
          }
        }, 800);
      });
    } else {
      htmlElements.divLogin.classList.remove(hidd);
    }
  }
}

new Relog(books);

class Loggin {}

export { Loggin, masterId, master };
