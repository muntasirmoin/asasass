{

    //generic constraint with keyof operator 
    type Vehicle = {
        bike:string;
        car: string;
        ship:string
    }

    type Owner = "bike" | "car" | "ship"; //manually

    type Owner2 = keyof Vehicle;  // vehicle er key gulu union er mto kore ache("bike" | "car" | "ship")
    

    const  getProperty = <x,y extends keyof x> (obj: x, key: y) =>{
        // y er modhe x er key gula ase
        return obj[key];
    }

    const user = {
        name: 'Muntasir',
        age: 26,
        address: 'Sylhet',
    }

    getProperty(user, 'name');
   

}