class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    
    }
    getDetails(){
        console.log("hi I am "+ this.name);
        console.log("hi I am " + this.age +" years old");
    }
    /*greet=()=>{
        console.log("hi I am "+ this.name);
    }*/

}
const person1=new Person("john",28);
person1.getDetails();
