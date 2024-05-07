{

    // ternary operator 
       // nullish coalescing operator
    // optional chaining
    

    const age: number = 19;

    if(age >= 18){
        console.log('Adult');
    }else{
        console.log('Not Adult');
    }

    // ternary operator 
    const isAdult = age >= 18 ? 'adult' : 'not adult';

     // nullish coalescing operator

     const isAuthenticated = undefined;
     const result = isAuthenticated ?? 'Guest';
     console.log(result);
     const isnull = null;
     const result1 = isnull ?? 'null';
     console.log(result1);

      // optional chaining

      type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string //optional chaining
        }
      }

      const user: User = {
        name: "Muntasir",
        address: {
            city: 'sylhet',
            road: '14,Munshipara',
            presentAddress: 'Sylhet',
           
        }
      }


      const permanentAddress = user?.address?.permanentAddress ?? 'no permanetAddress';
      console.log({permanentAddress});
      }


