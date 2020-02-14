

//exercise 2a;

document.getElementById("1").onclick = click1;
document.getElementById("2").onclick = click2;

function click1(){
    console.log("Hi from div1");
    //var greet1 = "Hi from div1";
    //document.getElementById("2c").innerText = greet1;
}


function click2(){
    console.log("Hi from div2");
}


//Exercise 2b and 2c
document.getElementById("outer").onclick = pointToTarget;
function pointToTarget(e){
    console.log(e.target.id);
    console.log(this.id);
    document.getElementById("para").innerText = "Target id is. " + e.target.id + " and this.id is: " + this.id; //2c
    
}


   













