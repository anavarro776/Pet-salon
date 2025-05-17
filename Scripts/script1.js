console.log("Welcome to Session1 !");

//---ARRAYS[]---
let fruits= ["Apple","Bannana","Orange"];
console.log(`This is an Array ${fruits}`);
console.table(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1]="Cherry";
console.table(fruits);


fruits.push("Watermelon");//adds from end
fruits.pop()//removes from thev end
fruits.unshift()//adding from begining
fruits.shift()// remove from beginng




let students= ["Alexis","Brad","Chris","Michel", "Ryan ","Wilbert" ,"Amber"];

for ( let i=0;i<students.length;i++){
    console.log(students[i]);
}


// Object Literal example
let student1={
    name:"Leo",
    age:99,
    address:"&42 evergreen"
}



let student2 = {
    name:"Alexis",
    age:26,
    email:"Random 1@",
    address:"Random Adress 2"
    
}

let student3 = {
    name:"Brad",
    age:27,
    email:"Random 2@",
    address:"Random Address 3"
}

let student4 = {
    name:"Michel",
    email:"Random 3@",
    age:28,
    address:"Random Address 4"
}


let studentsList = [];

studentsList.push(student1,student2,student3,student4);
console.log("Student List :"+ studentsList.length);

document.getElementById ("List") .innerHTML= "Student List :"+studentsList.length;

console.log( `Email : ${studentsList[0].email} Address${studentsList[0].address}`);

function getStudentNames (){
    let list= document.getElementById ("List");
    for (i=0;i<=studentsList.length;i++){
        console.log(studentsList[i].name);
        list.innerHTML+= `<li>${studentsList[i].name}</li>`;
    }
}
getStudentNames();