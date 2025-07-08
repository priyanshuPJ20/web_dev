class Student{
    constructor(name,age,rno){
        this.name=name;
        this.age=age;
        this.rno=rno;
    }
    /*greet(){
        console.log("hi I am "+ this.name);
    }*/
    greet=()=>{
        console.log("hi I am "+ this.name);
    }

}
const student1=new Student("john",28,123);
console.log(student1);
student1.greet();
