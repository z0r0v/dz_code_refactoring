class Master {
  id;
  login;
  pasword;
  firstName;
  LastName;
  dateEmployment;
  categoryHired;
  book;
  category = ()=> {
    const yers = Math.floor((Date.now() - this.dateEmployment) / 31536000000);
    const preliminaryCategory = this.categoryHired + yers;
    if (preliminaryCategory >= 5) {
      return 5;
    } else {
      return preliminaryCategory;
    }
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

const master1 = new Master();
master1.id = 1;
master1.login = "";//Изменить на не пустое
master1.pasword = "";//Изменить на не пустое
master1.firstName ="Vasiliy";
master1.LastName ="Kshishtykov";
master1.dateEmployment =new Date("February 22, 2017 14:24:00");
master1.categoryHired =1;

const master2 = new Master();
master2.id = 2;
master2.login = "b";
master2.pasword = "321";
master2.firstName = "Genady";
master2.LastName = "Petrovich";
master2.dateEmployment = new Date("July 18, 2016 14:24:00");
master2.categoryHired =2;

const masters = new Masters();
masters.masters.push(master1);
masters.masters.push(master2);


export { masters };

