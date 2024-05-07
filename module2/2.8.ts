{
    //promise

    type ToDO = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async (): Promise<ToDO> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    };

    getToDo();

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => { //using Promise here

            const data: string = 'something';

            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        })

    }

    //  calling create promise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data;
        // console.log(data);
    }

    showData();

    //  promise in object

    type Something = { something: string };

    const createPromise1 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => { //using Promise here

            const data: Something = { something: 'something' };

            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        })

    }

    //  calling create promise function
    const showData1 = async (): Promise<Something> => {
        const data1: Something = await createPromise1();
        return data1;
        // console.log(data);
    }

    showData();


}