console.log("---Register Form---");

let pets=[];

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selectService");
//Creating Obj Constructor
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;


}

function register(){
    let newPet= Pet(inputName.value,inputAge.value,inputGender,inputBreed.value);
    pets.push(newPet);
    console.log(newPet);
    alert("The Registeration was successful");
     displayInfo();
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
     document.getElementById("selectService").value="";


}

function displayInfo(){
    console.log(pets.length);
    document.getElementById("info") .innerHTML= `<p>Total Pets Is :${pets.length}</p>`;
}



function init(){
    //Creates obj
    let pet1= new Pet("Shaggy",19,"Male");
  
    let pet2= new Pet("Choco",7,"Male","Mix");
    
   
    let pet3 =new Pet( "twitty",23,"Male","Canaarian");
      pets.push(pet1,pet2,pet3);
    console.log(pets);
    displayInfo();
}

window.onload=init;