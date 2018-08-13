class Bike {
    miles: number;
  
    constructor(
      public price: Number,
      public max_speed: String) {
        this.miles = 0;
    }
  
 
    ride = () => { 
      this.miles += 10;
      console.log(`Riding @ ${this.miles} mph`);
      return this;
    };
    reverse = () => {
      this.miles -= 5;
      console.log(`Reversing by ${this.miles} mph`);
      return this;
    };
    displayInfo = () => {
      console.log(`Bike info:
                  Price:    $${this.price}
                  Max Speed: ${this.max_speed}
                  Miles:     ${this.miles} miles`);
                 return this;
    };
  }
  

  var bike1 = new Bike(100, '25 mph');
  var bike2 = new Bike(300, '35 mph');
  var bike3 = new Bike(500, '45 mph');
  
  bike1.ride().reverse().displayInfo();
  bike2.ride().reverse().displayInfo();
  bike3.ride().reverse().displayInfo();