
colorChange(document.getElementsByTagName("div"));

function colorChange(array){
    for(let item of array){
        item.style.backgroundColor = "yellow";
    }
}
document.getElementById("x").addEventListener("click", buttonClick);

function buttonClick(){
    
document.getElementById("div1").style.backgroundColor = "red";
document.getElementById("div2").style.backgroundColor = "yellow";
document.getElementById("div3").style.backgroundColor = "blue";

}


//document.getElementById("div1").addEventListener("click",clickRed);
//
//function clickRed(){
//
//document.getElementById("div1").style.backgroundColor = "red";    
//    
//}
