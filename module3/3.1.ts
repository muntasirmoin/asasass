{
    // oop- class
    class Animal {

    //    parameter properties
        constructor(public name:string, public species: string, public sound: string){
        
        }

        //method: class er moddhe function likhle take method bole

        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`)
        }

        
    }

    // creating dog instance using animal class

    const dog = new Animal('German shepard', 'dog', 'ghew ghew');

    dog.makeSound();
    
}