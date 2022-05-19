import { UserServiceFetch } from "../reexport.js";

class Book {
  id;
  masterId;
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

class Books {
  books = [];
  getByMasterId(id) {
    let result = [];
    this.books.forEach(function(book) {
      if (book.masterId == id) {
        result.push(book);
      }
    });
    return result;
  }
}

class CreateBooks {
  constructor(data) {
  books.books = [];
  data.forEach(item => {
    const book = new Book();
    book.id = item.id;
    book.masterId = item.masterId;
    book.time = item.time;
    book.brand = item.brand;
    book.phone = item.phone;
    book.name = item.name;
    book.work = item.work;
    book.registerSign = item.registerSign;
    book.carMileage = item.carMileage;
    book.yearIssue = item.yearIssue;
    book.priceWork = item.priceWork;
    book.priceParts = item.priceParts;
    books.books.push(book);
  });
  }
}

let books = new Books();

const url = "https://my-server-dz25.herokuapp.com/books";
new UserServiceFetch().getFetch(url).then(data => {
  new CreateBooks(data);
});


export { books, Book, CreateBooks };
