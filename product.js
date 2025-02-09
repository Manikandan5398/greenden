var sidenav = document.getElementById("sidenav");
var navicon = document.getElementById("navicon");
var cancelside = document.getElementById("cancelside");
navicon.addEventListener("click",function()
{
    
    sidenav.style.right=0;
})


cancelside.addEventListener("click",function(){
    sidenav.style.right="-50%";
    

})
 var productcontainer = document.getElementById("productcontainer")
var searchtext = document.getElementById("searchtext");
 var searchcontainer = productcontainer.querySelectorAll("div")



searchtext.addEventListener("keyup",function(){
   var enteredvalue = event.target.value.toUpperCase();

   for(var count=0;count<searchcontainer.length;count++)
   {
   // console.log(searchcontainer[count].querySelector("h1").textContent)
    var targetvalue = searchcontainer[count].querySelector("h1").textContent
  //   console.log(targetvalue)
     if( targetvalue.toUpperCase().indexOf(enteredvalue)<0)

        {
            searchcontainer[count].style.display="none";

        }
        else{
            searchcontainer[count].style.display="block";
        }
        

   }



})




