import { UserServiceFetch } from "../reexport.js";

class CarsOwners {
  carsOwners = [];
}

class carOwn {
  name;
  phone;
  car = [];
}

class Car {
  brand;
  carMileage;
  registerSign;
  replacementParts = [];
  futureWorkPlan = [];
}

class ReplacementParts {
  masterName;
  replacementMileage;
  data;
  work;
  nextReplacementMileage;
  priceWork;
  priceParts;
}

class FutureWork {
  carMileage;
  masterName;
  replacementMileage;
  work;
  nextReplacementMileage;
  get checkMileageCompare() {
    return this.carMileage >= this.nextReplacementMileage;
  }
  priceWork;
  priceParts;
}

class CarsOwnersCeate {
  constructor(data) {
    data.forEach(element => {
      const own = new carOwn();
      carsOwners.carsOwners.push(own);
      own.id = element.id;
      own.name = element.name;
      own.phone = element.phone;
      element.car.forEach(element => {
        const ownCar = new Car();
        ownCar.id = element.id;
        ownCar.brand = element.brand;
        ownCar.carMileage = element.carMileage;
        ownCar.registerSign = element.registerSign;
        own.car.push(ownCar);
        element.replacementParts.forEach(element => {
          const newReplacement = new ReplacementParts();
          newReplacement.id = element.id;
          newReplacement.masterName = element.masterName;
          newReplacement.replacementMileage = element.replacementMileage;
          newReplacement.data = element.data;
          newReplacement.work = element.work;
          newReplacement.nextReplacementMileage =
            element.nextReplacementMileage;
          newReplacement.priceWork = element.priceWork;
          newReplacement.priceParts = element.priceParts;
          ownCar.replacementParts.push(newReplacement);
        });
        element.futureWorkPlan.forEach(element => {
          const futureWork = new FutureWork();
          futureWork.id = element.id;
          futureWork.carMileage = element.carMileage;
          futureWork.masterName = element.masterName;
          futureWork.replacementMileage = element.replacementMileage;
          futureWork.work = element.work;
          futureWork.nextReplacementMileage = element.nextReplacementMileage;
          futureWork.priceWork = element.priceWork;
          futureWork.priceParts = element.priceParts;
          ownCar.futureWorkPlan.push(futureWork);
        });
      });
    });
  }
}

const carsOwners = new CarsOwners();
const url = "https://my-server-dz25.herokuapp.com/carsOwners";
new UserServiceFetch().getFetch(url).then(data => {
  new CarsOwnersCeate(data);
});

export { carsOwners, CarsOwnersCeate, ReplacementParts, Car };
