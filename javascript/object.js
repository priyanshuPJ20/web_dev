const student = {
    name: "Adam",
    rmo: 21,
    greet: ()=> {
        console.log("Hi! I am " + this.name);
    }
};
student.greet();
console.log(student.name);