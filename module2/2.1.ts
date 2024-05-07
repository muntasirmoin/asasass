{
    // type assertion

    let anything : any;

    anything = "Next level web development";

    anything = 123;
    // anything as number

    const kgToGm = ( value: string | number): string |number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value);
            return `The converted value is: ${convertedValue}`;
        }

        if(typeof value === 'number'){
            return value * 1000;
        }
    }


    const resultKgToGm1 = kgToGm(1000) as number;
    const resultKgToGm2 = kgToGm('1000') as string;

    type CustomError = {
        message: string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }
}