// VEHICLE CLASS //
class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    honk() {
        return "Beep."
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

const toyota = new Vehicle('Toyota', 'Rav4', 2011)
//
//
//
//
//
// CAR CLASS //
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

const firstCar = new Car('Toyota', 'Corolla', 2005)
//
//
//
//
//
// MOTORCYCLE CLASS //
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }

    revEngine() {
        return "VROOM!!!"
    }
}

let moto = new Motorcycle('bike', 'fastbike', 2010)
//
//
//
//
//
// GARAGE CLASS //
class Garage {
    constructor(n) {
        this.capacity = n
        this.vehicles = []
    }

    add(vehicleObject) {
        if(!(vehicleObject instanceof Vehicle)) {
            console.log('Only vehicles are allowed in here!')
        } else if(this.vehicles.length >= this.capacity) {
            console.log('Sorry, we are full')
        } else {
            this.vehicles.push(vehicleObject)
        }
    }
}

let garage = new Garage(2)
console.log(garage.capacity)

garage.add('test1')
garage.add(toyota)
garage.add(firstCar)
garage.add(moto)

console.log(garage.vehicles)