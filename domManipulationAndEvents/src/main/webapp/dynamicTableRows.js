
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];



var objLength = cars.length;
var myvar = '<table>'+
'<tr>'+
'<th>ID</th>'+
'<th>Year</th>'+
'<th>Make</th>'+
'<th>Model</th>'+
'<th>Price</th>'+
'</tr>';

 for(var i = 0; i < objLength; i++){
myvar += '<tr>'+
'<td>'+cars[i].id+'</td>'+
'<td>'+cars[i].year+'</tD>'+
'<td>'+cars[i].make+'</th>'+
'<td>'+cars[i].model+'</th>'+
'<td>'+cars[i].price+'</th>'+
'</tr>'     
 }

 myvar += '</table>';

console.log(myvar);
 document.getElementById('myTable').innerHTML = myvar;



document.getElementById("less").addEventListener("click",updateList);


function updateList(cars){
   
    var actualPrice = document.getElementById("price").value;
    
    for(var i = 0; i< cars.length;i++){
        if(cars[i].pr < actualPrice){
            
        }
    }
   
    
}

