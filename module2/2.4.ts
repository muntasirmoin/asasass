{
    // generic interface

    interface Developer<T, x = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: x;
    }

    type emilabWatch = {
        brand: string;
        model: string
    }


    const poorDeveloper: Developer<emilabWatch> = {
        name: 'Muntasir',
        computer: {
            brand: 'asus',
            model: '12',
            releaseYear: 12
        },
        smartWatch: {
            brand: 'casio',
            model: 'y-77'
        }
    }

    interface appleWatch {
        brand: string;
        model: string;
        sleepTrack: boolean;
    }


    interface yamahaBike {
        model: string;
        manufacture: string
    }

    const richDeveloper: Developer<appleWatch, yamahaBike> = {
        name: 'Sakif',
        computer: {
            brand: 'Sp',
            model: '1245',
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'apollo',
            model: 'y-77',
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            manufacture: 'BD',

        }
    }
}