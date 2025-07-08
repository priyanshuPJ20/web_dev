const marks=[10,20,30,40,50,60,70,80,90,100];
const firstdivision=marks.filter((num)=>{
    return num>60;
});
console.log(firstdivision);