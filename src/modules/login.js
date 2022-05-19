import {masters} from "./materDataBase.js";
import {BooksTable} from "./book.js";

export let masterNameCategogy;
export let master_id;

let isLogged = false;

const htmlElements = {
    output: document.querySelector(".output"),
    divMasterInToBook: document.querySelector(".book"),
    formButton: document.querySelector("div.col-md-auto.mt-5 > form > input"),
    inputLogin: document.getElementById("example-input-login"),
    inputPassword: document.getElementById("exampleInputPassword"),
    divMasterInfo: document.querySelector("div.col-md-auto.mt-5 > form"),
    divNav: document.querySelector(".top-navigation-panel"),
    divLogin: document.querySelector(".login "),
    masterInfo: document.querySelector(".masterInfo"),
    tr: document.querySelector(".executedOrder > tr")
};


function onButtonCheckPassword() {
    const loginName = document.getElementById("example-input-login");
    const pasword = document.getElementById("exampleInputPassword");

    loginName.classList.remove("border-danger", "border-success");
    pasword.classList.remove("border-danger", "border-success");

    masters.masters.forEach(function (master) {
        if (pasword.value === master.pasword && loginName.value === master.login) {
            masterNameCategogy = `Master : ${master.firstName} ${
                master.LastName
            }. Category: ${master.category()}`;
            isLogged = true;
            master_id = master.id
            return isLogged, master_id;
        }
    });

    if (isLogged) {
        loginName.classList.remove("border-danger");
        pasword.classList.remove("border-danger");
        loginName.classList.add("border-success");
        pasword.classList.add("border-success");

        htmlElements.divLogin.classList.add("hidden");
        htmlElements.masterInfo.classList.remove("hidden");
        htmlElements.divNav.classList.remove("hidden");

        new BooksTable();

    } else {
        loginName.classList.add("border", "border-danger");
        pasword.classList.add("border", "border-danger");
        loginName.value = "";
        pasword.value = "";
        loginName.placeholder = "Password or login is entered incorrectly!";
        pasword.placeholder = "Password or login is entered incorrectly!";
    }

    return masterNameCategogy;
}

class Login {
    init() {
        htmlElements.formButton.addEventListener("click", onButtonCheckPassword);
    }
}

export {Login};
