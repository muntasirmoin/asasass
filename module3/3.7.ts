{
    // static
    class Counter {
      static  count:number = 5;

        increment(){
            // static er kunu property ke call korte hole class ke call dite hoy  (Counter.count )
            return(Counter.count = Counter.count + 1);
        }

        // method a static use korle class er vitore and baire Class nam dhore method call korte hobe ()
     static   decrement(){
            return(Counter.count = Counter.count - 1);
        }
    }

    const instance1 = new Counter();
    console.log('Increment +1',instance1.increment());

    const instance2 = new Counter();
    console.log('Increment +1',instance2.increment());

    const instance3 = new Counter();
    console.log('Decrement -1',Counter.decrement());

    // const instance4 = new Counter();
    // console.log(instance4.decrement());


}