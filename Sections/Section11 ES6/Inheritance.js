// Inheritance

class Course{
    constructor(courseName){
        this.courseName = courseName;
    }
    display(){
        console.log('display the course name: ' + this.courseName);
    }
}

class Teacher extends Course{
    constructor(courseName, teacherName){
        super(courseName);
        this.teacherName = teacherName;
    }

    detail(){
        console.log('Teach: ' + this.teacherName + ' Course: ' + this.courseName);
    }
}

const t1 = new Teacher('PE','Mosh');

t1.detail();
t1.display();