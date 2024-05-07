{
    // nullable types
    // unknown types
    // never


    // nullable types

    const searchName = (value: string | null) => {
        if(value){
            console.log('searching');
        }else{
            console.log('there is nothing to searching');
        }
    }

    searchName(null)
     // unknown typeof

     const getSpeedInMeterPerSecond = ( value: unknown) => {
        if(typeof value ==='number'){
            const convertSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertSpeed} ms^-1`);
        }
       else if(typeof value === 'string'){
            const [result, unit] = value.split(' ');
            const convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertSpeed} ms^-1`);
        }
        else{
            console.log('wrong Input')
        }
     }

     getSpeedInMeterPerSecond('1000 kmh^-1');

      // never

      const throwError = ( msg : string): never => {
        throw new Error(msg);
      }

      throwError('here is an error');


}