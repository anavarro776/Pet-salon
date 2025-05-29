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
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    if (isValid(newPet)){
        pets.push(newPet);
    displayInfo();
    clearForm();
     displayRow();
     
    }
    else {
        alert("Please Fill Out Whole Form");
    }
    
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
     document.getElementById("selectService").value="";


}

function displayRow(){
    let div=document.getElementById("petTable");
    let list="";
    for(let i =0;i <pets.length;i++){
        
        list+=`
 

        <tr id="${i}">
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].breed}</td>
            <td>${pets[i].service}</td>
            <td> <button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
        <tr>        
        
            `;
     
   

    }
    div.innerHTML=list;
}

        
        
   

    
   



function displayInfo(){
    console.log(pets.length);
    document.getElementById("info") .innerHTML= `<p>Total Pets Is :${pets.length}</p>`;
}

function isValid(aPet){
    let validation = true;
    if(aPet.name ===""){
        validation=false;
    }

    if(aPet.gender===""){
        validation=false;
    }
    return validation;
}

function init(){
    //Creates obj
    let pet1= new Pet("Shaggy",19,"Male" ,"Gemarn Shepard","Nails");
  
    let pet2= new Pet("Choco",7,"Male","Mix","Grooming");
    
   
    let pet3 =new Pet( "twitty",23,"Male","Canaarian","Grooming");
      pets.push(pet1,pet2,pet3);
    console.log(pets);
    displayInfo();
    displayRow();
}

window.onload=init;