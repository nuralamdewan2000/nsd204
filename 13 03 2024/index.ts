let ID : number =0

class Product{
    id : number
    name : string;
    description : string;
   private price : number;
   static ID : number =0
    constructor(name : string,desc : string,price : number){
      
        this.id = Product.ID;
        this.name = name,
        this.description = desc,
        this.price = price

        Product.ID++;
    }

    buy(value:number){
        if(value>=this.price){
            console.log("Yes, you can buy this product")
        }else{
            console.log("No, you can buy this product")
        }
    }

    get Cost(){
        return this.price
    }

    set Price(new_price:number){
        this.price = new_price
    }
}

const p1 =new Product("box","gift box",50)
p1.buy(60)
console.log(p1.Cost)
// p1.Price(70)

// inheritence
// class Mamals{
//     hasHair : boolean;
//     isBloodWarm : boolean;
//     hasEyes : boolean;
//     noOfLegs : number;

//     constructor(legs:number){
//         this.hasHair =true;
//         this.isBloodWarm =true;
//         this.hasEyes =true;
//         this.noOfLegs =legs

//     }
// }


// class Cow extends Mamals{
//     hasHorns :boolean;
//     constructor(horns:boolean){
//         super(4)
//         this.hasHorns =horns
//     }
// }


// class Human extends Mamals{
//     canSpeak :boolean;

//     constructor(speak :boolean){
//         super(2)
//         this.canSpeak =speak
//     }
// }


// const c1 =new Cow(true)
// c1.hasEyes // true

// const h1 =new Human(true)
// h1.hasHair // true



//abstraction

abstract class Vehicle{
    engine :string;
    wheels:number;

    constructor(){

    }
}


class Car extends Vehicle{
    isAc :boolean

    constructor(ac:boolean){
        super()
        this.isAc = ac
    }
}

const car1 =new Car(false)

class Bus extends Vehicle{
    isSlepper :boolean

    constructor(slepper:boolean){
        super()
        this.isSlepper =slepper
    }
}

const bus1 =new Bus(true)

// Polymorphism

class Mamals{
    hasHair : boolean;
    isBloodWarm : boolean;
    hasEyes : boolean;
    noOfLegs : number;

    constructor(legs:number){
        this.hasHair =true;
        this.isBloodWarm =true;
        this.hasEyes =true;
        this.noOfLegs =legs

    }

    movement(){
        console.log("the movement is walking")
    }
}


class Cow extends Mamals{
    hasHorns :boolean;
    constructor(horns:boolean){
        super(4)
        this.hasHorns =horns
    }
}


class Human extends Mamals{
    canSpeak :boolean;

    constructor(speak :boolean){
        super(2)
        this.canSpeak =speak
    }
}



class Bird extends Mamals{
    constructor(){
        super(2)
    }

    movement() {
        console.log("The movement is flying")
    }
}

const c1 =new Cow(true)
c1.hasEyes // true

const h1 =new Human(true)
h1.hasHair // true
h1.movement() // the movement is walking


const b1 =new Bird()
b1.movement() //The movement is flying



// encapsulation

class Student{
    name:string;
    batch_name:string;
    student_code:string;
    static student_number :number =0

    constructor(name:string, batch_name:string){
        this.name = name;
        this.batch_name = batch_name;
        this.student_code =`${this.batch_name}_${Student.student_number}`
        Student.student_number++
    }

    get stuCode(){
        return this.student_code;
    }
}
