console.log("---Register Form---");

// Creating Objects Literals

let pet1 = {
    name:"Luna",
    age:"2 years old",
    gender:"Female",
    service:"",
    breed:"German Shepard "

    
}

let pet2 ={
     name:"Choco",
    age:" 3 years old",
    gender:"Female",
    service:"",
    breed:"Chihuaua"
}

let pet3= {
     name:"Zorro",
    age:"1 year old",
    gender:"Male",
    service:"",
    breed:"Belgian Shepard"

}

//Creates Array for pets
    let petsList= [];

    petsList.push(pet1,pet2,pet3);



// Counts  The Pets
function petCount(){
    console.log(petsList.length);
    document.getElementById("Count").innerHTML=`<p>The Total Of Pets Is ${petsList.length}<p>`;
}



    
// Gets Pet Names
function getPetNames(){
   
    let list =  document.getElementById ("List") ;
    for(let i=0;i<petsList.length;i++){
        console.log(`Name:${petsList[i].name}`);
        list.innerHTML+=`<li> ${petsList[i].name}</li>`;
       
    }
    
   
    
}

getPetNames();
petCount();


