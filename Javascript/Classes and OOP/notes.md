# JavaScript is prototype based language 

#Javascript and classes

#OOP

#Object
-collection of properties and methods 
-to lowerCase


##why use OOP

#parts of OOP
Object Literal

-Constructor function
-Prototype
-Classes
Instances(new,this)


#4 Pillars 
Abstraction 
Encapsulation 
Inheritance 
Polymorphism

Abstraction
Abstraction is about simplifying complex systems by exposing only the necessary parts and hiding the implementation details. In JavaScript, abstraction can be achieved using classes and objects, focusing on the "what" rather than the "how."

Example:

javascript
Copy code
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting...`);
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Outputs: Toyota Corolla is starting...
In this example, Car abstracts away the details of how the start function works internally and provides a simple interface to the user.

2. Encapsulation
Encapsulation refers to bundling data (properties) and methods (functions) that operate on the data into a single unit, typically a class. It also involves controlling access to the data, often using private or protected members.

Example:

javascript
Copy code
class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Outputs: 150
Here, #balance is a private field that can't be accessed directly from outside the class, encapsulating the account balance and controlling how it is modified.

3. Inheritance
Inheritance allows one class to inherit properties and methods from another class. In JavaScript, this can be done using the extends keyword in class definitions.

Example:

javascript
Copy code
class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Dog barks');
  }
}

const myDog = new Dog();
myDog.speak(); // Outputs: Animal speaks
myDog.bark(); // Outputs: Dog barks
In this example, Dog inherits from Animal, so it can use the speak method from Animal in addition to its own bark method.

4. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also refers to the ability of different classes to provide different implementations of methods that are defined in a common interface or superclass.

Example:

javascript
Copy code
class Shape {
  draw() {
    console.log('Drawing a shape');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing a square');
  }
}

const shapes = [new Circle(), new Square()];

shapes.forEach(shape => shape.draw());
// Outputs:
// Drawing a circle
// Drawing a square