{
    // constraints (kunu kichi enforce kora)
    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
        const course = 'Next level web development';

        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent(
        {
            id: 111,
            name: 'Muntasir',
            email: 'a@g.com'
        }
    );
    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
    }>(
        {
            id: 222,
            name: 'Sakif',
            email: 'b@g.com'
        }

    );

}