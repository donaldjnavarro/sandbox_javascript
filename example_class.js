class Car {
    // class data
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // method that returns the car's age based on its year compared to the current year
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

// create an example class instance
let myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");