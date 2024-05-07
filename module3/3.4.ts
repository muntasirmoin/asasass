{
    // instanceof guard
    class Animal {
        name: string;
        species: string;

        constructor(name:string, species:string){
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('I am making Sound');
        }
    }

    class Dog extends Animal {
        constructor(name:string, species:string){
            super(name, species);
        }
        makeBark() {
            console.log('Dog sound');
        }
    }

    class Cat extends Animal {
        constructor(name:string, species:string){
            super(name, species);
        }
        makeMeaw() {
            console.log('Cat sound');
        }
    }
// use instanceof here

    const idDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }

    const isCat = (animal: Animal) : animal is Cat => {
        return animal instanceof Cat
    }


    const getAnimal = (animal : Animal) => {
        // use instanceof here
        if(idDog(animal)) {
            animal.makeBark();
        } 
        else if (isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
    }

    const dog = new Dog('black Dog', 'dog');
    const cat =  new Cat('white Cat', 'Cat');

}