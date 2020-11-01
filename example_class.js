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
    // Display age in human readable format
    displayAge() {
        console.log("This car is " + this.age() + " years old.");
    }
    // Display the data within a specified key in the current instance
    displayKey(keyName) {
        // Only act when the key exists
        if (this.hasOwnProperty(keyName)) {
            console.log(keyName+": "+this[keyName])
        }
    }
    // Display every key and value in the current instance
    displayAll() {
        for (var i = 0; i < Object.getOwnPropertyNames(this).length; i++) {
            this.displayKey(Object.getOwnPropertyNames(this)[i])
        }
    }
    
}

// create an example class instance
let myCar = new Car("Ford", 2014);

myCar.displayAll()
myCar.displayAge()