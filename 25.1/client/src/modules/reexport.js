export {
  UserServiceFetch,
  UserServiceHXMhttp
} from "./serviceServer/user.service.js";
export { ClassHelper } from "./helpModule/classHelper.js";
export { GetTodayDate } from "./helpModule/getDateDdMmYy.js";
export { SwitchCase, SwitchCase2 } from "./helpModule/switchCase.js";
export { LocalStorHelp } from "./helpModule/localStorHelp.js";
export { Clock } from "./clock.js";
export { masters } from "./dataBase/materDataBase.js";
export { books, Book, CreateBooks } from "./dataBase/carDatabase.js";
export { infoCar, infoOrder, RenderBook, sortBook } from "./book.js";
export { Loggin, masterId, master } from "./login.js";
export {
  carsOwners,
  CarsOwnersCeate,
  ReplacementParts,
  Car
} from "./dataBase/carOwners.js";
export { AutoInfoGetOder, CreateTable } from "./autoInfoGetOder.js";
export { StopWotch } from "./stopWotch.js";
export { apendHelpper } from "./helpModule/apendHelpper.js";
export { infoBook } from "./infoBook.js";
export { Slider } from "./slider.js";
export { Tabs } from "./tabs.js";
export { ValidationForm } from "./validation.js";
export { MaskPhone } from "./helpModule/maskPhone.js";
export { InfoAuto } from "./infoauto.js";

export const url = "https://my-server-dz25.herokuapp.com/";

//альтернативный json
//export const url = "https://firebasestorage.googleapis.com/v0/b/aliakseizhorau.appspot.com/o/db.json?alt=media&token=26c41fcc-b429-4364-8346-f97245ae180c/";
