function displayPets(){
    let div=document.getElementById("petList");
    let card="";
    for(let i =0;i <pets.length;i++){
        
    //     card+=`
        
    // <div class ="card">
    //     <div class = "card-body">
    //     <h5>${pets[i].name}</h5>
    //         <h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
    //     <p class = "card-subtitle mb-2 text-body-secondary">${pets[i].gender}</p>
    //     <p> <class="card-text">${pets[i].age}</p>
    //     <button class="btn btn-danger">Delete </button>

    //     </div>

    //  </div>
    //  `;

    }
    div.innerHTML=card;
}


function displayInfo(){
    console.log(pets.length);
    document.getElementById("info") .innerHTML= `<p>Total Pets Is :${pets.length}</p>`;
}
function deletePet(petIndex){
    console.log("delete pet"+petIndex);
    document.getElementById(petIndex).remove();
    pets.splice(petIndex,1);

}

