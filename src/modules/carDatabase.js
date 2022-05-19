class Book {
  id;
  master_id;
  time;
  brand;
  phone;
  name;
  work;
  registerSign;
  carMileage;
  yearIssue;
  priceWork;
  priceParts;
}

const book1 = new Book();
book1.id = 0;
book1.master_id = 1;
book1.time = "16:00";
book1.brand = "1Lada";
book1.phone = "+375293767082";
book1.name = "Vasiliy Petrovich";
book1.work = "Еiming belt replacement";
book1.registerSign = "7785AA-4";
book1.carMileage = 222000;
book1.registerSign = new Date("2017").getFullYear();
book1.priceWork = 10;
book1.priceParts = 10;

const book2 = new Book();
book2.id = 1;
book2.master_id = 1;
book2.time = "16:00";
book2.brand = "2Lada";
book2.phone = "+375293767082";
book2.name = "Vasiliy Petrovich";
book2.work = "Еiming belt replacement";
book2.registerSign = "7785AA-4";
book2.carMileage = 222000;
book2.registerSign = new Date("2017").getFullYear();
book2.priceWork = 10;
book2.priceParts = 10;

const book3 = new Book();
book3.id = 2;
book3.master_id = 1;
book3.time = "16:00";
book3.brand = "3Lada";
book3.phone = "+375293767082";
book3.name = "Vasiliy Petrovich";
book3.work = "Еiming belt replacement";
book3.registerSign = "7785AA-4";
book3.carMileage = 222000;
book3.registerSign = new Date("2017").getFullYear();
book3.priceWork = 10;
book3.priceParts = 10;

const book4 = new Book();
book4.id = 3;
book4.master_id = 2;
book4.time = "16:00";
book4.brand = "BMW";
book4.phone = "+375293767082";
book4.name = "Vasiliy Petrovich";
book4.work = "Еiming belt replacement";
book4.registerSign = "7785AA-4";
book4.carMileage = 222000;
book4.registerSign = new Date("2017").getFullYear();
book4.priceWork = 10;
book4.priceParts = 10;

const book5 = new Book();
book5.id = 4;
book5.master_id = 2;
book5.time = "16:00";
book5.brand = "BMW";
book5.phone = "+375293767082";
book5.name = "Vasiliy Petrovich";
book5.work = "Еiming belt replacement";
book5.registerSign = "7785AA-4";
book5.carMileage = 222000;
book5.registerSign = new Date("2017").getFullYear();
book5.priceWork = 10;
book5.priceParts = 10;

const book6 = new Book();
book6.id = 5;
book6.master_id = 2;
book6.time = "16:00";
book6.brand = "BMW";
book6.phone = "+375293767082";
book6.name = "Vasiliy Petrovich";
book6.work = "Еiming belt replacement";
book6.registerSign = "7785AA-4";
book6.carMileage = 222000;
book6.registerSign = new Date("2017").getFullYear();
book6.priceWork = 10;
book6.priceParts = 10;




class Books {
  books = [];
  getByMasterId(id) {
    let result = [];
    this.books.forEach(function(book) {
      if (book.master_id === id) {
        result.push(book);
      }
    });

    return result;
  }
}

const books = new Books();

books.books.push(book1);
books.books.push(book2);
books.books.push(book3);
books.books.push(book4);
books.books.push(book5);
books.books.push(book6);




const carOwners = [
  {
    name: "Vasiliy Petrovich",
    phone: "+375293767082",
    car: {
      brand: "BMW",
      carMileage: 210000,
      registerSign: "7785AA-4",
      replacementParts: [
        {
          masterName: "Kshishtykov",
          replacementMileage: 105000,
          data: new Date("December 01, 2016").toLocaleString().split(",")[0],
          work: "Thrust Tip Replacement",
          nextReplacementMileage: 200000,
          priceWork: 20,
          priceParts: 35
        },
        {
          masterName: "Kshishtykov",
          replacementMileage: 120000,
          data: new Date("December 10, 2017").toLocaleString().split(",")[0],
          work: "Needle shaft replacement",
          nextReplacementMileage: 200000,
          priceWork: 150,
          priceParts: 200
        },
        {
          masterName: "Kshishtykov",
          replacementMileage: 140000,
          data: new Date("December 16, 2018").toLocaleString().split(",")[0],
          work: "Clutch replacement",
          nextReplacementMileage: 250000,
          priceWork: 150,
          priceParts: 800
        }
      ],
      futureWorkPlan: [
        {
          carMileage: 200000,
          masterName: "Kshishtykov",
          replacementMileage: 105000,
          work: "Thrust Tip Replacement",
          nextReplacementMileage: 190000,

          get checkMileageCompare() {
            if (this.carMileage >= this.nextReplacementMileage) {
              return true;
            } else {
              return false;
            }
          },
          priceWork: 20,
          priceParts: 35
        },
        {
          carMileage: 200000,
          masterName: "Kshishtykov",
          replacementMileage: 120000,
          work: "Needle shaft replacement",
          nextReplacementMileage: 195000,
          get checkMileageCompare() {
            if (this.carMileage >= this.nextReplacementMileage) {
              return true;
            } else {
              return false;
            }
          },
          priceWork: 150,
          priceParts: 200
        },
        {
          carMileage: 200000,
          masterName: "Kshishtykov",
          replacementMileage: 140000,
          work: "Clutch replacement",
          nextReplacementMileage: 250000,
          get checkMileageCompare() {
            if (this.carMileage >= this.nextReplacementMileage) {
              return true;
            } else {
              return false;
            }
          },
          priceWork: 150,
          priceParts: 800
        }
      ]
    }
  }
];

export { carOwners, books, Book };
