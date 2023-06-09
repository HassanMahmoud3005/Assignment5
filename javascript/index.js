let link = document.getElementById("active")
let chef = document.getElementById("link-chefs")


window.onload = function() {

    link.style.color = "black";
    link.style.borderBottom = "2px solid #ce1212"


}

chef.onclick = function(){

    link.style.color = "#868686";
    link.style.borderBottom = "0"


}


link.onclick = function(){

    link.style.color = "black";
    link.style.borderBottom = "2px solid #ce1212"


}