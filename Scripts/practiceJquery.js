console.log("Welcome to jQuery");


let htmlElement=document.getElementById("red");
htmlElement=$("#red");
console.log(htmlElement);

let htmlElement2=document.getElementById("tomato-bg");

htmlElement2=$(".tomato-bg");
console.log(htmlElement2);


//By Id
$("#red").css("background-color","red").css("color","white");
$("#blue").css("background-color","blue").css("color","white");

//By Class
let pargraphWithBorder =$(".with-border")
pargraphWithBorder.css("border","3px solid black");


pargraphWithBorder.on("click",function(){
    console.log("Clicked");
$(this).addClass("bg-gray");
});

//By TAg
$("p").css("cursor","pointer");


//simple common function 

function register(){
    let testEntry= $("#testInput").val();//get Input
    $("#results").append(`<li>${testEntry}</li>`);
    
    console.log("regsiter");

  
}

//Hook Event
  $("#btnregister").on("click",register);


  //dispaly click me

  function clickMe(){
    console.log("Clicked");
  }

$("#btnClick").on("click",clickMe);

//Hides Paragraph
$("p:first").hide();