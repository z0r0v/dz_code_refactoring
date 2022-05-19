import { UserServiceFetch, UserServiceHXMhttp } from "../reexport.js";
const url = "https://my-server-dz25.herokuapp.com/masters";
const oneYearMs = 31536000000;

class Master {
  id;
  login;
  pasword;
  firstName;
  lastName;
  dateEmployment;
  categoryHired;
  category = () => {
    const yers = Math.floor((Date.now() - this.dateEmployment) / oneYearMs);
    const preliminaryCategory = this.categoryHired + yers;
    preliminaryCategory >= 5 ? (preliminaryCategory = 5) : preliminaryCategory;
    return preliminaryCategory;
  };
}

class Masters {
  masters = [];
  getById(id) {
    let result = null;
    this.masters.forEach(function(master) {
      if (master.id === id) {
        result = master;
        return;
      }
    });
    return result;
  }
}

class MasterCeate {
  constructor(data) {
    data.forEach(element => {
      const master = new Master();
      master.id = element.id;
      master.login = element.login;
      master.pasword = element.pasword;
      master.firstName = element.firstName;
      master.lastName = element.lastName;
      master.dateEmployment = new Date(element.dateEmployment);
      master.categoryHired = element.categoryHired;
      masters.masters.push(master);
    });
  }
}

const masters = new Masters();
//ES6 Fetch

// new UserServiceFetch().getFetch(url).then(data => {
//   new MasterCeate(data);
// });

//ES6 Fetch
// new UserServiceFetch().getHXMhttp(url).then(
//   data => {
//   new MasterCeate(data);
// });

//ES5 HXMhttp
new UserServiceHXMhttp().getHXMhttp(url).then(data => {
  new MasterCeate(data);
});
export { masters };
