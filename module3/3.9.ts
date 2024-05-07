{

    // abstraction  dui vabe hoy 1. interface 2. abstract

    // interfcae bebhora kore abstracion toiri kora
    // start
    interface Vehicle1 {
      startEngine(): void;
      stopEngine(): void;
      move(): void;
    }

    // class judi kunu structure follow kore tokhn implements korte hoy

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('Staring engine');
        }

        stopEngine(): void {
            console.log('stop engine');
        }

        move(): void {
            console.log('move car');
        }

        test(){
            console.log('test engine');
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    // end
    // abstract class die abstarction 
    // start
    abstract class Car2 {
       abstract startEngine(): void;

      abstract  stopEngine(): void ;

       abstract move(): void ;

        test(){
            console.log('test engine2');
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('Staring engine ToyotaCar');
        }

        stopEngine(): void {
            console.log('stop engine ToyotaCar');
        }

        move(): void {
            console.log('move car ToyotaCar');
        }
    }

    

    
    // end

}