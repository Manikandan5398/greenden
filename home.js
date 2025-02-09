var sidenav = document.getElementById("sidenav");
var navicon = document.getElementById("navicon");
var cancelside = document.getElementById("cancelside");
navicon.addEventListener("click",function()
{
    
    sidenav.style.right=0;
})


cancelside.addEventListener("click",function(){
    sidenav.style.right="-50%";
    console.log("done")

})


