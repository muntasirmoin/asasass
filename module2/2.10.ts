{


    // mapped type 

    const arrOfNumbers: number[] = [1, 2, 5];

    // const arrOfString: string[] = ['1', '2', '3'];

    const arrOfStrings: string[] = arrOfNumbers.map((number) => 
    
        number.toString()
    );
    console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    };

     type Height = AreaNumber['height'];  //look up type
    // type AreaString = { 
    //     height: string;
    //     width: string;
    // }

    // type Height = AreaNumber['height'];  //look up type
    //  T => {height: string; width: number}
    // key = T['Width']
    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString <{height: string; width: number}> = {
        height: "500",
        width: 100
    }



}