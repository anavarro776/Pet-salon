console.log("--Services--");






//constructor 
function Service(title,price){
    this.title=title;
    this.price=price;

}


//register() Adds Service
function register(){
    let inputTitle=$("#typeTxt").val();
    let inputPrice=$("#priceTxt").val();
    let newSerivce = new Service(inputTitle,inputPrice);
    
    if (isValid(newSerivce)){
        save(newSerivce);
    }
 
}




//validation 
function isValid(service){
   let  isValidTitle=true;
   let isValidPrice=true;

    if(service.title ==""){
        isValidTitle =false;
        $("#textIsRequiered").css("color","red").show();
    } else{
         $("#textIsRequiered").hide();
    }
if (service.price ==""){
    isValidPrice=false;
    $("#priceRequierment").css("color","red").show();
} else{
     $("#priceRequierment").hide();
}

    return isValidTitle && isValidPrice;

    

}


//init()





function int(){
     $(".register-btn").on("click","pointer",register); 
     $("#priceRequierment").hide();
    $("#textIsRequiered").hide();
}


window.onload=int;