{
    // Union types simillar to or || (|)
    // intersection types simillar to and && (&)

    // Union types

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type FullstackDeveloper = 'frontEndDeveloper' | 'expertDeveloper';

    type developer = FullstackDeveloper | FrontendDeveloper;



    const newDeveloper : FrontendDeveloper = 'juniorDeveloper';
    type user = {
        name:string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'A-';
    }

    const user1 : user = {
        name: 'Muntasir',
        gender: 'male',
        bloodGroup: 'A+'
    }


    // intersection types
    type frontendDeveloper = {
        skills: string[];
        designation1:'frontend Developer'
    }

    type backendDeveloper = {
        skills: string[];
        designation2:'Backend Developer'
    }

    type fullstackDeveloper = frontendDeveloper & backendDeveloper;

    const full_stackDeveloper : fullstackDeveloper = {
        skills: ['html', 'css', 'express'],
        designation1:'frontend Developer',
        designation2:'Backend Developer'
        
    } 






}