
getNames();

function getNames(){
    var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
    
     names.forEach(element => { 
        var name = element;
        var li = document.createElement('li');
        li.innerHTML = name;  
        document.getElementById('names').appendChild(li);
    });
}

document.getElementById("btnAddNameId").addEventListener("click",addName);

function addName(e){
    var name = document.getElementById("nameId").value;
    var li = document.createElement('li');
    li.innerHTML = name;  
    document.getElementById('names').appendChild(li);
    e.preventDefault();  
}


document.getElementById("deleteFirstNameID").addEventListener("click",deleteFirstName);

function deleteFirstName(e){
    
    var names = document.getElementById('names'); 
    var elements = names.getElementsByTagName('li'); 
    names.removeChild(elements[0]);
    e.preventDefault();
}



document.getElementById("deleteLastNameID").addEventListener("click",deleteLastName);

function deleteLastName(e){
    
    var names = document.getElementById('names'); 
    var elements = names.getElementsByTagName('li'); 
    names.removeChild(elements[elements.length-1]);
    e.preventDefault();
}


