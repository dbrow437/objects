function createNewCar(newMake, newYear, newColor) {  // create new function that creates a car with make, year and color
  var speed = 0;

  return {                       //begin object
    make: newMake,
    year: newYear,
    color: newColor,
    getData: function() {
      return this.make+" "+this.year+ " " +this.color
    },
     getSpeed: function() {
       return speed
    },
    accelerate: function() {
      if (speed > 75){
      speed++
    } else {
        speed = speed + 10
    }
    },
    brake: function() {
      if (speed < 7) {
        speed--
      } else {
      speed = speed - 7
    }
    },
  }
}

var car = createNewCar("ford", 2018, "black");

while (car.getSpeed() < 85) {
  car.accelerate()
  console.log(car.getSpeed())
}
while (car.getSpeed() > 7) {
  car.brake()
  if (car.getSpeed == 0)
  break;
  console.log(car.getSpeed())
}
