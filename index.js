function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getDescription = function() {
  return `This car is a ${this.make} ${this.model} manufactured in ${this.year}.`;
};

function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getDescription = function() {
  const carDescription = Car.prototype.getDescription.call(this);
  return `${carDescription} It has a range of ${this.range} miles.`;
};

const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription()); // "This car is a Tesla Model S manufactured in 2019. It has a range of 300 miles."


